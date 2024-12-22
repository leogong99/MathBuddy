const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Validate required environment variables
if (!process.env.OPENAI_API_KEY) {
  console.error('ERROR: OPENAI_API_KEY is required but not set in environment');
  process.exit(1);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const chatRoutes = require('./routes/chat.routes');

// Routes
app.use('/api', chatRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});