// routes/test.js
const express = require('express');
const router = express.Router();

// Define a test route
router.get('/', (req, res) => res.send('API is working'));

module.exports = router;
