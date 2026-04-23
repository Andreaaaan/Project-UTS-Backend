const mongoose = require('mongoose');

const ratingsSchema = new mongoose.Schema(
  {
    _id: { type: String }, // Tetap gunakan String agar bisa manual/cantik
    orderId: { type: String, required: true },
    userId: { type: String, required: true }, // Penumpang
    driverId: { type: String, required: true }, // Driver
    stars: { type: Number, min: 1, max: 5, required: true },
    review: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports =
  mongoose.models.Rating || mongoose.model('Rating', ratingsSchema);
