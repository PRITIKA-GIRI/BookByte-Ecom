import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js'; 
import booksRoute from './routes/books.js';
import purchaseRoutes from './routes/purchase.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/purchase',purchaseRoutes);
app.use('/api/auth', authRoutes); 
app.use('/api/books',booksRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});