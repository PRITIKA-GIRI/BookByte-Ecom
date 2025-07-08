import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Fetch all books
router.get('/', async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM books ORDER BY quantity ASC, id DESC");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

export default router;
