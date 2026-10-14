/** Model behind the portfolio assistant. */
export const ASSISTANT_MODEL = "claude-opus-5-5";

/** The assistant is shown only when an Anthropic API key is configured on the server. */
export const isAssistantEnabled = () => Boolean(process.env.ANTHROPIC_API_KEY);
