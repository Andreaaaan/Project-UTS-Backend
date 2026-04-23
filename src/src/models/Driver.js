const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  nomorTelepon: String,
  status: { type: String, default: 'available' } // status: available atau busy
});

module.exports = mongoose.model('Driver', driverSchema);
