// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const db = require('../db');

// router.post('/register', async (req, res) => {
//   const { username,email, password } = req.body;
//   const hashed = await bcrypt.hash(password, 10);
//   try {
//     await db.query('INSERT INTO users (username,email, password) VALUES ($1, $2,$3)', [username,email, hashed]);
//     res.status(201).json({ message: 'User registered' });
//   } catch {
//     res.status(400).json({ message: 'User exists' });
//   }
// });

// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
//   const user = result.rows[0];

//   if (!user || !(await bcrypt.compare(password, user.password)))
//     return res.status(401).json({ message: 'Invalid credentials' });

//   const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   res.json({ token });
// });

// module.exports = router;
