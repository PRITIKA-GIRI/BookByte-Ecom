import express from 'express';
import pool from '../db.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    let userId = null;

    if (authHeader) {
      const token = authHeader.split(" ")[1];
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.id;
      } catch (err) {
        console.warn("Invalid token");
      }
    }

    let result;

    if (userId) {
      result = await pool.query(`
        SELECT b.*, 
          CASE 
            WHEN EXISTS (
              SELECT 1 FROM purchase p
              WHERE p.book_id = b.id AND p.user_id = $1 AND p.status = 'Completed'
            ) THEN TRUE ELSE FALSE 
          END as is_purchased
        FROM books b
        ORDER BY b.quantity ASC, b.id DESC
      `, [userId]);
    } else {
      result = await pool.query(`
        SELECT *, FALSE as is_purchased 
        FROM books 
        ORDER BY quantity ASC, id DESC
      `);
    }

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
