# 🚀 Blog API with Authentication (Node.js + Express + MongoDB)

## 📌 Description

This is a RESTful Blog API built using Node.js, Express.js, and MongoDB.

The application includes secure user authentication using JWT and password hashing with bcryptjs. Users can register, login, and perform CRUD operations on blog posts. All protected blog routes are secured using authentication middleware and validation middleware.

The project follows the MVC (Model-View-Controller) architecture for better scalability and maintainability.

---

# 🔥 Features

* 🔐 User Registration with Hashed Passwords
* 🔑 User Login using JWT Authentication
* 🛡️ Protected Routes using Middleware
* ✅ Input Validation Middleware
* 📝 Create Blog Posts
* 📄 Get All Blog Posts
* ❌ Delete Blog Posts
* ⚡ REST API Architecture using MVC Pattern
* 🌐 Environment Variables using `.env`
* 🚀 Backend Deployment Ready

---

# 🛠️ Tech Stack

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication & Security

* jsonwebtoken (JWT)
* bcryptjs

## Validation

* Custom Validation Middleware
* Regex Validation

## Deployment

* Render

---

# 📁 Project Structure

```bash id="jlwm82"
blog-api/
│
├── controllers/
│   ├── authController.js
│   └── blogController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── validationMiddleware.js
│
├── models/
│   ├── User.js
│   └── Blog.js
│
├── routes/
│   ├── auth.js
│   └── blog.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash id="jlwm83"
git clone https://github.com/your-username/blog-api.git
cd blog-api
```

---

## 2️⃣ Install Dependencies

```bash id="’wini0dx"
npm install
```

---

## 3️⃣ Create `.env` File

Create a `.env` file in the root directory:

```env id="jlwm84"
MONGO_DB_URL=your_mongodb_connection_string
JWT_KEY=your_secret_key
PORT=6000
```

---

## 4️⃣ Run the Server

```bash id="jlwm85"
nodemon server.js
```

Server runs on:

```bash id="’wini0jr"
http://localhost:6000
```

---

# 🔑 API Endpoints

## 🔹 Authentication Routes

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /auth/register | Register new user |
| POST   | /auth/login    | Login user        |

---

## 🔹 Blog Routes (Protected)

| Method | Endpoint  | Description     |
| ------ | --------- | --------------- |
| GET    | /blog     | Get all blogs   |
| POST   | /blog     | Create new blog |
| DELETE | /blog/:id | Delete blog     |

---

# 🔐 Authentication

Protected routes require JWT token in request headers.

Example:

```bash id="waswoz4"
Authorization: Bearer <your_token>
```

---

# ✅ Input Validation

The project includes custom validation middleware for:

* Required field validation
* Email format validation using Regex
* Password length validation
* Authentication token validation

---

# 🚀 Deployment

Backend deployed using Render with MongoDB Atlas integration.

---

# 🔮 Future Improvements

* ✏️ Update Blog API
* 🔒 Role-based Authorization
* 🌐 Frontend Integration using React
* 🚀 Full Stack MERN Deployment

---

# 👨‍💻 Author

## Sivanishanth

Final Year MCA Student | MERN Stack Developer

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub!
