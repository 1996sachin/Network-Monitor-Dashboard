// src/routes/alert.routes.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'Alert API working!' });
});

module.exports = router;
