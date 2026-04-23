module.exports = (mongoose) => {
  const schema = new mongoose.Schema({
    product_name: String,
    pickup_location: String,
    destination_location: String,
    quantity: Number,
    price: Number,
    status: {
      type: String,
      enum: ['pending', 'completed', 'cancelled'],
      default: 'pending',
    },
  });

  return mongoose.models.Order || mongoose.model('Order', schema);
};
