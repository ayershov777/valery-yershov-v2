const mongoose = require('mongoose');

const workSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  photos: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Photo',
  }],
});

module.exports = mongoose.model('Work', workSchema);
