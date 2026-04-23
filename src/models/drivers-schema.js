const mongoose = require('mongoose');

const driversSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  vehicleNumber: { type: String, required: true }, // Plat Nomor
  status: { type: String, default: 'available' }, // available atau busy
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Drivers', driversSchema);
