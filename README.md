
# Telegram Message API

This project provides a simple Node.js and Express-based API to send messages to a Telegram chat. It's designed to be easily deployed to services like Render.

## Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd telegram-api
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file:**

    Create a `.env` file in the root of the project and add your Telegram Bot Token and Chat ID. You can use the `.env.example` file as a template.

    ```
    TELEGRAM_BOT_TOKEN=your_bot_token_here
    TELEGRAM_CHAT_ID=your_chat_id_here
    ```

    *   **To get your Bot Token:** Talk to the [BotFather](https://t.me/botfather) on Telegram.
    *   **To get your Chat ID:** You can get this by sending a message to a bot and checking the updates using the Telegram API, or by using other available tools.

4.  **Start the server:**

    ```bash
    npm start
    ```

    The server will start on port 3000 by default.

## API Endpoint

*   **POST** `/sendMessage`

    Sends a message to the configured Telegram chat.

    **Request Body:**

    ```json
    {
        "message": "Hello, from the API!"
    }
    ```

    **Response:**

    ```json
    {
        "success": true,
        "message": "Message sent successfully"
    }
    ```

## Deployment to Render

Render is a platform that makes it easy to deploy web applications. Here’s how you can deploy this project:

1.  **Push your code to a GitHub repository.**

2.  **Create a new Render account** or log in to your existing one.

3.  **Create a new "Web Service"** from the Render dashboard.

4.  **Connect your GitHub repository** to Render.

5.  **Configure the service:**

    *   **Name:** Give your service a name (e.g., `telegram-api`).
    *   **Region:** Choose a region close to you.
    *   **Branch:** Choose the branch you want to deploy (e.g., `main`).
    *   **Build Command:** `npm install`
    *   **Start Command:** `node index.js`

6.  **Add Environment Variables:**

    Under the "Environment" section, add the following variables:

    *   `TELEGRAM_BOT_TOKEN`: Your Telegram Bot Token.
    *   `TELEGRAM_CHAT_ID`: Your Telegram Chat ID.

7.  **Click "Create Web Service".**

Render will automatically build and deploy your application. Once the deployment is complete, you will get a URL for your new API (e.g., `https://telegram-api.onrender.com`). You can then use this URL to send Telegram messages from your frontend application.
