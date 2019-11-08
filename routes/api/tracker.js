const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Tracker = require('../../models/Tracker');

// @route GET api/tracker
// @desc Get all values
// @access Public
router.get('/', async (req, res) => {
  try {
    const tracker = await Tracker.find();
    res.json(tracker);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

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
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { amount, litres, endkm, date } = req.body;

    try {
      console.log(req.body);
      res.send('Added');

      // create tracker instance
      tracker = new Tracker({
        amount,
        litres,
        endkm,
        date
      });

      // save to db
      await tracker.save();
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
