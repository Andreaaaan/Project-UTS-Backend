const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    vehicle: String,
    status: {
      type: String,
      enum: ['available', 'busy'],
      default: 'available',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Driver', schema);
