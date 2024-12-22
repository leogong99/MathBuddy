import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // Enable browser usage
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

export async function getMathResponse(messages) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to get math response');
  }
}