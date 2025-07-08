import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js'; // ✅ Only needed import
import booksRoute from './routes/books.js';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); 
app.use('/api/books',booksRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});