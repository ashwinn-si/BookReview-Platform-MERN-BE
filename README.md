# BookReview Platform - Backend (MERN)

A modern web platform where users can explore, review, and share their thoughts about their favorite books.  

This is the **backend** repository of the BookReview Platform project.

---
## Live Demo

[Visit Live Website](https://book-review-ashwin.vercel.app/)

---

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT, Passport (Google OAuth)
- **File Upload**: Multer
- **Security**: Helmet, XSS-Clean, Express-Mongo-Sanitize, HPP
- **Request Validator**: Express-Validator 

---
## Backend Repository

[BookReview Platform FrontEnd Repo](https://github.com/ashwinn-si/BookReview-Platform-MERN-FE)
---
## Prerequisites
- Node.js (v14 or higher)
- MongoDB instance (local or Atlas)
- Google OAuth credentials (for social login)
---

## 🏗️ Backend Structure

The backend follows the **MVC (Model-View-Controller)** architecture for clean separation of concerns:

```
BookReview-Platform-MERN-BE/
│
├── models/            # Mongoose models (Schemas)
├── controllers/       # Controller logic for handling requests
├── routes/            # API routes (user routes, book routes, etc.)
├── middleware/        # Authentication and other middleware
├── config/            # Configuration files (database, environment)
├── server.js          # Main entry point
├── package.json       # Backend dependencies and scripts
└── README.md          # Backend documentation (this file)
```

---
## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ashwinn-si/BookReview-Platform-MERN-BE.git
   cd BookReview-Platform-MERN-BE
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URL=your_mongodb_connection_string

   JWT_SECRET=your_jwt_secret
   
   # Email configuration
   mailID=your_email_service
   mailPass=your_email_password
   
   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_CALLBACK_URL=http://localhost:8000/api/auth/google/callback
   GOOGLE_REDIRECT_URL=http://localhost:3000/profile

   CLIENT_URL = http://localhost:3000

   SALT_VALUE = 20
   ```

4. Start the development server
   ```bash
   npm start
   ```

## Security Implementations
This backend implements several security measures:
- JSON Web Tokens (JWT) for authentication
- Password hashing with bcrypt
- HTTP security headers with Helmet
- Rate limiting to prevent brute-force attacks
- Data sanitization against NoSQL injection
- XSS protection
- Parameter pollution prevention

## Error Handling
The API includes a global error handling middleware that provides consistent error responses:
- Validation errors
- Authentication errors
- Authorization errors
- Resource not found errors
- Database errors



## Contact
- Project Repository: [https://github.com/ashwinn-si/BookReview-Platform-MERN-BE](https://github.com/ashwinn-si/BookReview-Platform-MERN-BE)