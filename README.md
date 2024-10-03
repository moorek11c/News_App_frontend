# News App Frontend

This is a React-based News App that allows users to sign up, sign in, and save articles to a separate saved-news page. The app uses a mock server with `db.json` for data storage and Vite for the project setup and build process.

## Features

- **User Authentication**: Users can sign up and sign in to the app.
- **Save Articles**: Logged-in users can bookmark and save articles to a saved-news page.
- **News API Integration**: Fetches news articles from a News API.
- **Mock Server**: Uses `db.json` as a mock server for data storage.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For project setup and build process.
- **News API**: For fetching news articles.
- **json-server**: For running the mock server with `db.json`.

## Getting Started

- **Start the mock server**: npx json-server --watch db.json --port 3001
- **Start the app**: npm run dev

> **Note**: In order to sign-up or sign-in, and save cards the mock server needs to be running.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/moorek11c/News_App_Frontend.git
   cd News_App_Frontend
   ```
