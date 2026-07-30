require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Allow requests from any website (for testing only)
app.use(cors());

// Home route
app.get('/', (req, res) => {
res.send('Render server is working!');
});

// Health check route
app.get('/health', (req, res) => {
res.json({
status: 'ok',
message: 'Render deployment is working'
});
});

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
