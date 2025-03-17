# Uptern Idea Backend

## Project Overview
The **uptern_idea_backend** is a server-side application designed to handle the backend operations for a agency platform. It is built using **Node.js** and **Express.js**, with MongoDB as the database, providing a scalable and efficient API for the frontend.

## Features
- **User Authentication**: Secure JWT-based authentication system.
- **Database Management**: Uses **Mongoose** for MongoDB operations.
- **Security**: Implements **Crypto-JS** for encryption and **dotenv** for environment variable management.
- **Cross-Origin Resource Sharing (CORS)**: Enabled for secure API communication.
- **Scalability**: Designed to handle multiple API requests efficiently.

## Tech Stack
- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB with Mongoose
- **Security**: JWT Authentication, Crypto-JS encryption
- **Environment Management**: Dotenv

## Installation
To set up and run this project locally:
```bash
# Clone the repository
git clone https://github.com/Asadullah246/uptern_idea_backend.git
cd uptern_idea_backend

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Available Scripts
- `npm run dev` - Starts the backend in development mode.
- `npm run start` - Starts the backend in production mode.
- `npm run start-dev` - Runs the backend with **nodemon** for automatic restarts.
- `npm test` - Placeholder for test cases.


## Environment Variables
Create a `.env` file in the root directory and add the following variables:
```
PORT=5000
DATABASE_URL=your_mongodb_connection_string
SECRET_KEY = your_jwt_secret_key


## Deployment
The backend can be deployed on **Heroku**, **Vercel**, or **VPS servers** for production use.



## Contact
For inquiries or support, please reach out to asadm2258@gmail.com
