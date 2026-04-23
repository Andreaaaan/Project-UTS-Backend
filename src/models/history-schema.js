const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  action: { type: String, required: true },
  description: { type: String },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('History', schema);
