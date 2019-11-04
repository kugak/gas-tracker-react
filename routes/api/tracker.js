const express = require('express');
const router = express.Router();

// @route GET api/tracker
// @desc Get all values
// @access Public
router.get('/', (req, res) => res.send('Tracker Route'));

module.exports = router;
