import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.js';          // your auth routes (register/login)
import productRoutes from './routes/products.js';   // optional
import downloadRoutes from './routes/download.js';  // optional
import esewaRoutes from './routes/esewa.js';        // optional

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON bodies

// API routes
app.use('/api/auth', authRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
