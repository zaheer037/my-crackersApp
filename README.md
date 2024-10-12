
# Crackers E-commerce Application

This project is a full-stack web application for an e-commerce platform selling crackers, offering both backend and frontend features.

## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Description
This Crackers app allows users to view, search, and purchase crackers online with dynamic discounts and cart management. The app is built using a Node.js/Express backend and a React frontend.

## Technologies
- **Backend**: Node.js, Express
- **Frontend**: React
- **Database**: MongoDB (likely based on the models directory)
- **Version Control**: Git
  
## Live Link
https://my-crackers-app.netlify.app/

## Installation

### Backend:
1. Navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

### Frontend:
1. Navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

## Usage

### Running the Backend:
1. Inside the `backend` folder, start the backend server:
    ```bash
    npm start
    ```
   This will start the Node.js server (likely on port 5000 or configured in `server.js`).

### Running the Frontend:
1. Inside the `frontend` folder, start the React development server:
    ```bash
    npm start
    ```
   The React app will run on `localhost:3000` by default.

### Full-Stack Workflow:
Make sure both frontend and backend are running. The frontend will communicate with the backend for product data and order handling.

## Features
- **Product Listing**: A grid view of crackers with dynamic pricing and discounts.
- **Search Functionality**: Users can search for crackers by name.
- **Cart Management**: Users can add products to their cart and view the total price dynamically.
- **Responsive Design**: The app is responsive and works on both desktop and mobile.

## License
This project is licensed under the MIT License.

---

You can further refine this by adding specific details, such as environment variables, database setup, or additional features of your app. If you'd like to see the `package.json` files for specific dependencies and scripts, I can also guide you through them manually.
