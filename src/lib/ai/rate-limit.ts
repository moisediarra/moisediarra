const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 20;

const hits = new Map<string, number[]>();

/**
 * Sliding-window limit per visitor: at most 20 questions every 10 minutes.
 *
 * The counts live in this server instance's memory, so on serverless hosting each instance
 * counts separately. It stops casual abuse; for a hard cap use a shared store (e.g. Upstash
 * Redis) or your host's firewall rules, and set a monthly spend limit in the Anthropic Console.
 */
export function rateLimit(key: string): { ok: true } | { ok: false; retryAfter: number } {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return { ok: false, retryAfter: Math.ceil((recent[0] + WINDOW_MS - now) / 1000) };
  }

  recent.push(now);
  hits.set(key, recent);

  // Forget visitors whose window has expired, so the map doesn't grow forever.
  if (hits.size > 5000) {
    for (const [visitor, times] of hits) {
      if (now - times[times.length - 1] >= WINDOW_MS) hits.delete(visitor);
    }
  }

  return { ok: true };
}
