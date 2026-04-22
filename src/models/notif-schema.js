const mongoose = require('mongoose');

const notifSchema = new mongoose.Schema(
  {
    userId: String,
    message: String,
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Notification || mongoose.model('Notification', notifSchema);
