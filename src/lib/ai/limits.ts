/** Conversation limits shared by the chat panel and the API route. */

/** Longest conversation the API accepts (visitor and assistant turns together). Must be odd. */
export const MAX_MESSAGES = 11;

/** Longest question a visitor can send, in characters. */
export const MAX_QUESTION_LENGTH = 1000;

/** Longest earlier answer the API accepts back in the history, in characters. */
export const MAX_ANSWER_LENGTH = 10_000;
