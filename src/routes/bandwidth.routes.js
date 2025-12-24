// src/routes/bandwidth.routes.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'Bandwidth API working!' });
});

module.exports = router;
