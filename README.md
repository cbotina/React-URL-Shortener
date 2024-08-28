# ShortRUL

A URL shortener application built with React and TypeScript and implementing Clean Architecture. It allows users to shorten URLs and view the top 100 most frequently accessed URLs. The application interacts with a backend API for URL shortening and retrieval.

This project is the second part of the LTV technical challenge for the Junior FullStack Engineer role. The [First Part](https://github.com/LTVCoHiring/cbotina-jr-fs-challenge/tree/develop) (Ruby on Rails Backend) is required to run this project.

## Features

- Shorten URLs
- View the top 100 most frequently accessed URLs
- Responsive design with Tailwind CSS
- Copy-to-clipboard functionality for shortened URLs

## Installation

To get started with this project, follow these steps:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install dependencies

Ensure you have Node.js installed. Then, run the following command to install the project dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of your project directory and add the following environment variable:

```env
REACT_APP_API_BASE_URL=http://localhost:3000
```

- `REACT_APP_API_BASE_URL`: The base URL for the backend API. Adjust this URL if your backend is running on a different port or host.

### 4. Port Configuration

The React app is configured to run on port 3003 to avoid conflicts with the backend server running on port 3000. This is handled by the proxy field in the package.json file.

### 5. Start the Development Server

Run the following command to start the development server:

```bash
npm run start
```

The application will be available at http://localhost:3003.
