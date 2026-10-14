import Anthropic from "@anthropic-ai/sdk";
import { ASSISTANT_MODEL, isAssistantEnabled } from "@/lib/ai/config";
import { MAX_ANSWER_LENGTH, MAX_MESSAGES, MAX_QUESTION_LENGTH } from "@/lib/ai/limits";
import { rateLimit } from "@/lib/ai/rate-limit";
import { SYSTEM_PROMPT } from "@/lib/ai/system-prompt";

export const maxDuration = 60;

/**
 * Streams the assistant's answer as plain text.
 * Body: { messages: [{ role: "user" | "assistant", content: string }, ...] }, alternating and
 * ending with the visitor's question.
 */
export async function POST(request: Request) {
  if (!isAssistantEnabled()) {
    return Response.json({ error: "assistant_disabled" }, { status: 503 });
  }

  const visitor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anonymous";
  const limit = rateLimit(visitor);
  if (!limit.ok) {
    return Response.json(
      { error: "rate_limited" },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  const messages = parseMessages(await request.json().catch(() => null));
  if (!messages) {
    return Response.json({ error: "invalid_request" }, { status: 400 });
  }

  const client = new Anthropic();
  const stream = client.beta.messages.stream(
    {
      model: ASSISTANT_MODEL,
      max_tokens: 2048,
      // Chat answers are short; low effort keeps them fast and inexpensive.
      output_config: { effort: "low" },
      // If a safety classifier declines, the API retries on Anthropic's recommended fallback model.
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
      messages,
    },
    { signal: request.signal },
  );

  const logFailure = (error: unknown) => {
    if (error instanceof Anthropic.APIError) {
      console.error(`[chat] Anthropic API error ${error.status}: ${error.message}`);
    } else if (!request.signal.aborted) {
      console.error("[chat] streaming failed", error);
    }
  };

  // Wait for the first event before answering, so a rejected request (invalid key, overload)
  // returns a clean error status instead of a stream that breaks before any text.
  const events = stream[Symbol.asyncIterator]();
  let first: Awaited<ReturnType<typeof events.next>>;
  try {
    first = await events.next();
  } catch (error) {
    logFailure(error);
    return Response.json({ error: "upstream_error" }, { status: 502 });
  }

  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for (let result = first; !result.done; result = await events.next()) {
          const event = result.value;
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        // A declined answer ends with no text; the chat panel then shows its own fallback message.
        controller.close();
      } catch (error) {
        logFailure(error);
        controller.error(error);
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}

/** Accepts only a well-formed, bounded conversation that ends with the visitor's question. */
function parseMessages(body: unknown): Anthropic.Beta.BetaMessageParam[] | null {
  if (typeof body !== "object" || body === null) return null;
  const { messages } = body as { messages?: unknown };
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) return null;
  // Alternating turns starting with the visitor means an odd count ends with a question.
  if (messages.length % 2 === 0) return null;

  const parsed: Anthropic.Beta.BetaMessageParam[] = [];
  for (const [i, message] of messages.entries()) {
    if (typeof message !== "object" || message === null) return null;
    const { role, content } = message as { role?: unknown; content?: unknown };
    const expected = i % 2 === 0 ? "user" : "assistant";
    if (role !== expected || typeof content !== "string") return null;

    const text = content.trim();
    const maxLength = expected === "user" ? MAX_QUESTION_LENGTH : MAX_ANSWER_LENGTH;
    if (!text || text.length > maxLength) return null;
    parsed.push({ role: expected, content: text });
  }
  return parsed;
}
