const ratingsRepository = require('./ratings-repository');

async function createRating(data) {
  return await ratingsRepository.createRating(data);
}
async function getRatings() {
  return await ratingsRepository.getRatings();
}
async function getRating(id) {
  return await ratingsRepository.getRating(id);
}
async function updateRating(id, data) {
  return await ratingsRepository.updateRating(id, data);
}
async function deleteRating(id) {
  return await ratingsRepository.deleteRating(id);
}

module.exports = {
  createRating,
  getRatings,
  getRating,
  updateRating,
  deleteRating,
};
