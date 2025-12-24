// src/routes/user.routes.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'User API working!' });
});

module.exports = router;
