module.exports = (mongoose) => {
  const schema = new mongoose.Schema({
    pickup_location: {
      type: String,
      required: true,
    },
    destination_location: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  });

  return mongoose.model('Location', schema);
};
