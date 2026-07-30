
require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/sendMessage', async (req, res) => {
    const { message } = req.body;
    const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

    if (!message) {
        return res.status(400).send({ error: 'Message is required' });
    }

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        return res.status(500).send({ error: 'Telegram bot token or chat ID is not configured' });
    }

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const data = {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
    };

    try {
        await axios.post(url, data);
        res.status(200).send({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error sending Telegram message:', error);
        res.status(500).send({ error: 'Failed to send message' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
