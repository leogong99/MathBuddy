import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const config = {
  openaiApiKey: process.env.OPENAI_API_KEY,
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development'
};