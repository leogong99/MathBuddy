require('dotenv').config();
const OpenAI = require('openai');
const readline = require('readline');

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Store conversation history
const conversationHistory = [];

async function chat() {
  try {
    const userInput = await new Promise((resolve) => {
      rl.question('You: ', (input) => {
        if (input.toLowerCase() === 'exit') {
          rl.close();
          process.exit(0);
        }
        resolve(input);
      });
    });

    // Add user message to history
    conversationHistory.push({ role: 'user', content: userInput });

    // Get response from ChatGPT
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: conversationHistory,
      max_tokens: 150
    });

    const response = completion.choices[0].message.content;
    
    // Add assistant's response to history
    conversationHistory.push({ role: 'assistant', content: response });
    
    console.log('\nBot:', response, '\n');
    
    // Continue the conversation
    chat();
  } catch (error) {
    console.error('Error:', error.message);
    chat();
  }
}

console.log('ChatBot initialized. Type "exit" to end the conversation.\n');
chat();