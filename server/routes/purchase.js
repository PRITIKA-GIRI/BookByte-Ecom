import express from 'express';
import pool from '../db.js';
import authenticate from '../middleware/authMiddleware.js';  

const router = express.Router();


router.post('/',authenticate, async (req, res) => {
  try {
    const userId = req.user.id; 
    const { bookId, orderId, amount } = req.body;

    if (!bookId || !orderId || !amount) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

   
    await pool.query('BEGIN');

    
    const updateBook = await pool.query(
      `UPDATE books
       SET quantity = quantity - 1
       WHERE id = $1 AND quantity > 0
       RETURNING *`,
      [bookId]
    );

    if (updateBook.rows.length === 0) {
      await pool.query('ROLLBACK');
      return res.status(400).json({ msg: "Book not available or out of stock" });
    }

    const insertPurchase = await pool.query(
      `INSERT INTO purchase (user_id, book_id, order_id, status, purchase_date)
   VALUES ($1, $2, $3, $4, NOW())
   RETURNING *`,
      [userId, bookId, orderId, 'Completed']
    );


 
    await pool.query('COMMIT');

    return res.status(201).json({ msg: "Purchase recorded", purchase: insertPurchase.rows[0] });

  } catch (err) {
    await pool.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
