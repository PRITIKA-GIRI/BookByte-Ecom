import express from 'express';
import pool from '../db.js';  // your pg pool setup
import authenticate from '../middleware/authMiddleware.js';  // your auth middleware

const router = express.Router();

// POST /api/purchase
// Records a purchase, marks book purchased, reduces quantity
router.post('/', async (req, res) => {
  try {
    const userId = req.user.id; // from authenticate middleware
    const { bookId, orderId, amount } = req.body;

    if (!bookId || !orderId || !amount) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

    // Begin transaction
    await pool.query('BEGIN');

    // Update books table: decrease quantity by 1 and mark purchased (optional)
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

    // Insert purchase record
    const insertPurchase = await pool.query(
      `INSERT INTO purchase (user_id, book_id, order_id, amount, status)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [userId, bookId, orderId, amount, 'Completed']
    );

    // Commit transaction
    await pool.query('COMMIT');

    return res.status(201).json({ msg: "Purchase recorded", purchase: insertPurchase.rows[0] });

  } catch (err) {
    await pool.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

export default router;
