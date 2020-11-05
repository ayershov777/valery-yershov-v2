const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  alt: {
    type: String,
    required: true,
  },
  main_url: {
    type: String,
    required: true,
  },
  blur_url: {
    type: String,
  },
  qual_url: {
    type: String,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  backgroundColor: {
    type: String,
  },
});

model.exports = mongoose.model('Photo', photoSchema);
