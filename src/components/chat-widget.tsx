"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { ArrowUp, RotateCcw, Sparkles, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { MAX_MESSAGES, MAX_QUESTION_LENGTH } from "@/lib/ai/limits";
import { OPEN_ASSISTANT_EVENT } from "./ask-button";

type Message = { role: "user" | "assistant"; content: string };

/** An error whose message can be shown to the visitor as is. */
class ChatError extends Error {}

export function ChatWidget({ lang, text }: { lang: Locale; text: Dictionary["assistant"] }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const titleId = useId();

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_ASSISTANT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_ASSISTANT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Keep the latest message in view while the answer streams in.
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, error]);

  // Stop a streaming answer if the visitor leaves the page.
  useEffect(() => () => abortRef.current?.abort(), []);

  const send = async (question: string) => {
    const content = question.trim();
    if (!content || pending) return;

    const previous = messages;
    // Only the latest turns are sent; slicing an odd count keeps a visitor message first.
    const history: Message[] = [...previous, { role: "user" as const, content }].slice(-MAX_MESSAGES);
    const show = (answer: string) =>
      setMessages([...previous, { role: "user", content }, { role: "assistant", content: answer }]);

    show("");
    setInput("");
    setError(null);
    setPending(true);
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });
      if (!response.ok || !response.body) {
        throw new ChatError(response.status === 429 ? text.rateLimited : text.error);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let answer = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        answer += decoder.decode(value, { stream: true });
        show(answer);
      }
      answer += decoder.decode();
      show(answer.trim() || text.noAnswer);
    } catch (err) {
      if (controller.signal.aborted) return;
      // Remove the failed exchange and give the question back, so it can be sent again.
      setMessages(previous);
      setInput(content);
      setError(err instanceof ChatError ? err.message : text.error);
    } finally {
      if (abortRef.current === controller) {
        abortRef.current = null;
        setPending(false);
      }
    }
  };

  const reset = () => {
    abortRef.current?.abort();
    abortRef.current = null;
    setMessages([]);
    setError(null);
    setPending(false);
    inputRef.current?.focus();
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void send(input);
  };

  // Enter sends, Shift+Enter adds a new line.
  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      void send(input);
    }
  };

  const last = messages[messages.length - 1];
  const waiting = pending && last?.role === "assistant" && last.content === "";

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-fg px-4 py-3 text-sm font-semibold text-bg shadow-xl shadow-black/20 transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
      >
        <Sparkles className="size-4 text-accent" aria-hidden />
        {text.launcher}
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-labelledby={titleId}
      lang={lang}
      className="fixed inset-x-2 bottom-2 z-50 flex h-[min(38rem,calc(100dvh-1rem))] flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl shadow-black/25 sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[25rem]"
    >
      <div className="flex items-start gap-3 border-b border-border px-4 py-3">
        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
          <Sparkles className="size-4" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h2 id={titleId} className="text-sm font-semibold">
            {text.title}
          </h2>
          <p className="text-xs leading-snug text-muted">{text.subtitle}</p>
        </div>
        {messages.length > 0 && (
          <button
            type="button"
            onClick={reset}
            aria-label={text.reset}
            title={text.reset}
            className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <RotateCcw className="size-4" aria-hidden />
          </button>
        )}
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={text.close}
          title={text.close}
          className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg"
        >
          <X className="size-4" aria-hidden />
        </button>
      </div>

      <div ref={listRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-sm">
        <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-surface-2 px-3.5 py-2.5 leading-relaxed">
          {text.greeting}
        </p>

        {messages.length === 0 && (
          <div>
            <p className="mb-2 text-xs text-muted">{text.suggestionsLabel}</p>
            <ul className="flex flex-col items-start gap-2">
              {text.suggestions.map((suggestion) => (
                <li key={suggestion}>
                  <button
                    type="button"
                    onClick={() => void send(suggestion)}
                    className="rounded-full border border-border px-3 py-1.5 text-left text-xs transition-colors hover:border-accent hover:text-accent"
                  >
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {messages.map((message, i) =>
          message.role === "user" ? (
            <p
              key={i}
              className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-accent px-3.5 py-2.5 leading-relaxed whitespace-pre-wrap text-accent-fg"
            >
              {message.content}
            </p>
          ) : message.content ? (
            <p
              key={i}
              className="max-w-[90%] rounded-2xl rounded-tl-sm bg-surface-2 px-3.5 py-2.5 leading-relaxed whitespace-pre-wrap"
            >
              {message.content}
            </p>
          ) : null,
        )}

        {waiting && (
          <p className="inline-flex items-center gap-2 rounded-2xl rounded-tl-sm bg-surface-2 px-3.5 py-2.5 text-muted">
            <span aria-hidden className="flex gap-1">
              <span className="size-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.3s]" />
              <span className="size-1.5 animate-bounce rounded-full bg-current [animation-delay:-0.15s]" />
              <span className="size-1.5 animate-bounce rounded-full bg-current" />
            </span>
            {text.thinking}
          </p>
        )}

        {error && (
          <p role="alert" className="rounded-xl border border-accent/40 bg-accent-soft px-3.5 py-2.5 text-xs">
            {error}
          </p>
        )}
      </div>

      <form onSubmit={onSubmit} className="border-t border-border p-3">
        <div className="flex items-end gap-2 rounded-xl border border-border bg-bg px-3 py-2 focus-within:border-accent">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder={text.placeholder}
            aria-label={text.placeholder}
            maxLength={MAX_QUESTION_LENGTH}
            rows={1}
            className="max-h-32 min-h-6 flex-1 resize-none bg-transparent text-sm leading-6 outline-none placeholder:text-muted [field-sizing:content] focus-visible:outline-none"
          />
          <button
            type="submit"
            disabled={pending || !input.trim()}
            aria-label={text.send}
            title={text.send}
            className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent text-accent-fg transition-opacity disabled:opacity-40"
          >
            <ArrowUp className="size-4" aria-hidden />
          </button>
        </div>
        <p className="mt-2 px-1 text-[0.7rem] leading-snug text-muted">{text.disclaimer}</p>
      </form>
    </div>
  );
}
