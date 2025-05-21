# 🛒 MERN E-Commerce App

A full-stack e-commerce web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, product browsing, cart management, and protected routes using JWT. The project includes proper folder structure, RESTful APIs, state management, and seamless UI navigation.

---

## 📁 Folder Structure

/client → React frontend
/server → Node.js + Express backend


## Client: 
Handles UI, React Router, global state (Context API), and authentication flow.
## Server:
Handles all REST APIs, JWT auth middleware, and MongoDB models.

---



## 🔧 Tech Stack

### Frontend
- React.js (Vite)
- React Router
- Context API
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- CORS & dotenv

---

## 🧠 Global State Management

- Context API (`ShopContext`)
- Used for: Cart operations, search filter, product state

---

## 🔐 Authentication

- JWT Tokens: Issued on login, stored in localStorage
- Protected APIs: Secured using middleware that verifies token
- Features: Register, Login, Auto-check auth on frontend

---

## 🛍️ Product Features

- View All Products
- Search Filter
- View Product Detail
- Add to Cart (auth required)
- Protected Product Routes

---

## 🛠️ How to Run Locally

### Backend

cd server
npm install
npm run dev
Server runs on http://localhost:5000

# Add .env with:

MONGO_URL=your_mongodb_uri
JWT_SECRET=your_secret_key


## Frontend
cd client
npm install
npm run dev
Frontend runs on http://localhost:5173

# API Overview
Products
GET /api/products - Get all products

GET /api/products/:id - Get product by ID

POST /api/products - Add product (protected)

PUT /api/products/:id - Update product (protected)

DELETE /api/products/:id - Delete product (protected)

Auth
POST /api/auth/register - Register user

POST /api/auth/login - Login user

👥 Developed by 
Dua Amir & Samreen Bibi

📌 Conclusion
This project showcases the implementation of a complete MERN stack application with proper authentication, routing, state handling, and real-time API integration. Built with scalability and clarity in mind for future improvements like admin panel, Stripe integration, and more.

📎 GitHub Repo
https://github.com/dua-amir/JeweliaLuxe.git 