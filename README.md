# MindBloom — Online Bookstore with Secure Purchases

MindBloom is a full-stack web application built with React and Node.js that allows users to browse, purchase, and read digital books securely. The app features JWT-based authentication, seamless payment integration with eSewa, and purchase recording to personalize user access.



### Features

- **User Authentication:** Register and login with JWT-based secure tokens.
- **Browse Books:** Search and filter through a collection of books with ratings, authors, and pricing.
- **Secure Purchase Flow:** Integration with eSewa payment gateway for digital purchases.
- **Purchase Recording:** Successful transactions are recorded in the backend, unlocking purchased books for users.
- **Protected Routes:** Middleware verifies JWT tokens to protect sensitive API endpoints.
- **Responsive UI:** Built with React, styled with CSS, and icons from react-icons.
- **Node.js & Express Backend:** RESTful API endpoints for auth, books, and purchase handling.
- **MongoDB Database:** Stores user info, books, and purchase records (assumed from db.js).


### Tech Stack

- Frontend: React, React Router, Axios, react-icons
- Backend: Node.js, Express, JWT, dotenv
- Database: Postgres (via `db.js`)
- Payment Gateway: eSewa integration (test environment)
- Authentication: JWT with Express middleware



### Setup Instructions

1. **Clone the repo**
    git clone https://github.com/yourusername/bookbyte.git
   cd bookbyte

3. Install backend dependencies
   -cd server
   - npm install

4. Install frontend dependencies
  cd ../src
  npm install

5. Create the environment variables file inside the /server folder, create a .env file.
  DATABASE_URL=your_db_connection_string
  JWT_SECRET=your_jwt_secret_key

6. Start the backend server from the /server folder
  node server.js

7. Start the frontend development server
  cd ../src
  npm run dev

8. Open the app in your browser






