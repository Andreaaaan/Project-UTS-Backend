const Rating = require('../../../models/ratings-schema');

async function createRating(data) {
  return await Rating.create(data);
}
async function getRatings() {
  return await Rating.find();
}
async function getRating(id) {
  return await Rating.findById(id);
}
async function updateRating(id, data) {
  return await Rating.findByIdAndUpdate(id, data, { new: true });
}
async function deleteRating(id) {
  return await Rating.findByIdAndDelete(id);
}

module.exports = {
  createRating,
  getRatings,
  getRating,
  updateRating,
  deleteRating,
};
