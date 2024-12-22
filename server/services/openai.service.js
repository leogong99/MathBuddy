const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const SYSTEM_PROMPT = `You are Math Buddy, a friendly and encouraging math tutor for kids. 
Follow these guidelines:
- Explain concepts in simple terms
- Use encouraging language
- Make math fun and engaging
- Break down problems into simple steps
- Use emojis and friendly language
- Keep responses focused on mathematics
- Provide visual examples when possible using ASCII art
- Celebrate success and encourage learning from mistakes`;

async function generateMathResponse(messages) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages
    ],
    max_tokens: 350,
    temperature: 0.7,
  });

  return completion.choices[0].message.content;
}

module.exports = {
  generateMathResponse
};