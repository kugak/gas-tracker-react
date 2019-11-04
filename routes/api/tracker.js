const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route GET api/tracker
// @desc Get all values
// @access Public
router.get('/', (req, res) => res.send('Tracker Route'));

// @route POST api/tracker
// @desc Add value to tracker
// @access Public
router.post(
  '/',
  [
    check('amount', 'Amount is required')
      .not()
      .isEmpty(),
    check('litres', 'Litres is required')
      .not()
      .isEmpty(),
    check('endkm', 'Ending KM is required')
      .not()
      .isEmpty(),
    check('date', 'Date KM is required')
      .not()
      .isEmpty()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    res.send('Tracker Route');
  }
);

module.exports = router;
