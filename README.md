# 🚀  Full Stack MERN Blog Application

## 📌 Description

This is a Full Stack MERN Blog Application built using React.js, Node.js, Express.js, and MongoDB.

The application allows users to register, login, create blog posts, view blogs, and manage content securely using JWT authentication.

The frontend communicates with the backend REST API using Axios, while MongoDB is used for data storage. Protected routes ensure that only authenticated users can access blog management features.

The project follows the MVC (Model-View-Controller) architecture on the backend and demonstrates full-stack development concepts including authentication, API integration, CRUD operations, and deployment.

---

## 🔥 Features

- 🔐 User Registration
- 🔑 User Login using JWT Authentication
- 🛡️ Protected Routes
- ✅ Input Validation
- 📝 Create Blog Posts
- 📄 View All Blog Posts
- ✏️ Update Existing Blog Posts
- ❌ Delete Blog Posts
- 🚪 Logout Functionality
- ⚡ React Frontend with Axios Integration
- 🌐 Full Stack Deployment
- 📱 Responsive User Interface
- 🔒 Ownership-Based Authorization (Users can manage only their own blogs)

---

🎯 What I Learned

• JWT Authentication & Authorization
• React Router Navigation
• Axios API Integration
• MongoDB Data Modeling
• MVC Architecture
• REST API Development
• Full Stack Deployment using Netlify & Render

---

# 🛠️ Tech Stack

## Frontend
React.js
React Router DOM
Axios
CSS

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

## 🚀 Live Demo

Frontend:
https://sivablog.netlify.app

Backend:
https://blog-api-flrk.onrender.com

---

## 📸 Screenshots

### Login Page

<img width="2500" height="1464" alt="Screenshot 2026-06-04 115938" src="https://github.com/user-attachments/assets/a022e4dd-f7df-4632-a16c-1c8076e621b2" />

### Register Page

<img width="2499" height="1469" alt="Screenshot 2026-06-04 115955" src="https://github.com/user-attachments/assets/6a7f3421-fb6b-46c9-a4f3-2aa340c8090d" />

### Blog Dashboard

<img width="2560" height="1600" alt="Screenshot (145)" src="https://github.com/user-attachments/assets/0e7f41c5-d8dc-439b-a9f1-00267928955d" />


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
git clone https://github.com/Sivanishanth/blog-api.git
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

# 🔮 Future Improvements

# ❤️ Like and Comment System
# 🖼️ Image Upload Support
# 🔒 Role-Based Authorization
# 👤 User Profiles
# 📱 Improved Responsive Design

---

# 👨‍💻 Author

## Sivanishanth

Final Year MCA Student | MERN Stack Developer

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub!
