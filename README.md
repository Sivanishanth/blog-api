# 🚀 Blog API with Authentication (Node.js + Express + MongoDB)

## 📌 Description

This is a RESTful Blog API built using Node.js, Express, and MongoDB.
It includes user authentication using JWT and password hashing with bcrypt.

Users can register, login, and perform CRUD operations on blog posts.
All blog routes are protected using authentication middleware.

---

## 🔥 Features

* 🔐 User Registration (with hashed passwords)
* 🔑 User Login with JWT Authentication
* 🛡️ Protected Routes using Middleware
* 📝 Create Blog Posts
* 📄 Get All Blogs
* ❌ Delete Blog Posts
* ⚡ REST API Architecture (MVC Pattern)

---

## 🛠️ Tech Stack

* Backend: Node.js, Express.js
* Database: MongoDB (Mongoose)
* Authentication: JWT (jsonwebtoken)
* Password Hashing: bcryptjs

---

## 📁 Project Structure

```
blog-api/
│
├── controllers/
│   ├── authController.js
│   └── blogController.js
│
├── models/
│   ├── User.js
│   └── Blog.js
│
├── routes/
│   ├── auth.js
│   └── blog.js
│
├── middleware/
│   └── authMiddle.js
│
├── server.js
├── package.json
```

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/your-username/blog-api.git
cd blog-api
npm install
```

---

## ▶️ Run the Server

```bash
nodemon server.js
```

Server will run on:

```
http://localhost:6000
```

---

## 🔑 API Endpoints

### 🔹 Auth Routes

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /auth/register | Register new user |
| POST   | /auth/login    | Login user        |

---

### 🔹 Blog Routes (Protected)

| Method | Endpoint  | Description   |
| ------ | --------- | ------------- |
| GET    | /blog     | Get all blogs |
| POST   | /blog     | Create blog   |
| DELETE | /blog/:id | Delete blog   |

---

## 🔐 Authentication

* JWT token is required for all blog routes
* Send token in headers:

```
Authorization: <your_token>
```

---

## ⚠️ Note

Currently, sensitive data like MongoDB URL and JWT secret are hardcoded.
This will be updated using `.env` for better security.

---

## 🚀 Future Improvements

* Update Blog API
* User-specific blogs (ownership)
* Input validation
* Environment variables (.env)
* Deployment

---

## 👨‍💻 Author

**Sivanishanth**

---

## ⭐ If you like this project

Give it a ⭐ on GitHub!
