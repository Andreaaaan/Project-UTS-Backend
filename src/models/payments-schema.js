const mongoose = require('mongoose');

const paymentsSchema = new mongoose.Schema(
  {
    _id: { type: String },
    orderId: { type: String, required: true },
    amount: { type: Number, required: true },
    method: { type: String, enum: ['OVO', 'GOPAY', 'CASH'], required: true },
    status: { type: String, default: 'pending' },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports =
  mongoose.models.Payment || mongoose.model('Payment', paymentsSchema);
