require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Allow requests from any website
app.use(cors());

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is running'
  });
});

// Telegram message endpoint
app.post('/sendMessage', async (req, res) => {
  const { message } = req.body;
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

  if (!message) {
    return res.status(400).json({
      error: 'Message is required'
    });
  }

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return res.status(500).json({
      error: 'Telegram bot token or chat ID is not configured'
    });
  }

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message
    });

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Error sending Telegram message:', error.response?.data || error.message);

    return res.status(500).json({
      success: false,
      error: 'Failed to send message'
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
