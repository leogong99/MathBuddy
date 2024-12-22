export const createUserMessage = (content) => ({
  role: 'user',
  content
});

export const createAssistantMessage = (content) => ({
  role: 'assistant',
  content
});

export const INITIAL_MESSAGE = createAssistantMessage(
  "Hi! I'm Math Buddy! 🤖 I'm here to help you with math! Ask me any math question, and I'll help you solve it step by step! 📚✨"
);