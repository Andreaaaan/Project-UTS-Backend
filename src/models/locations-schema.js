const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  pickup_location: String,
  destination_location: String,
});

module.exports = mongoose.model('Location', schema);
