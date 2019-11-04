const mongoose = require('mongoose');

// Create Schema
const TrackerSchema = new mongoose.Schema({
  litres: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  endkm: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Tracker = mongoose.model('tracker', TrackerSchema);
