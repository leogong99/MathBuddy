const express = require('express');
const { generateMathResponse } = require('../services/openai.service');

const router = express.Router();

router.post('/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    const response = await generateMathResponse(messages);
    res.json({ response });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
});

module.exports = router;