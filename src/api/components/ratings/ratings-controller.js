const ratingsService = require('./ratings-service');

async function createRating(req, res) {
  try {
    const result = await ratingsService.createRating(req.body);
    res
      .status(201)
      .json({ success: true, message: 'Rating submitted!', data: result });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}

async function getRatings(req, res) {
  try {
    const result = await ratingsService.getRatings();
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function getRating(req, res) {
  try {
    const result = await ratingsService.getRating(req.params.id);
    if (!result)
      return res
        .status(404)
        .json({ success: false, message: 'Rating not found' });
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

async function updateRating(req, res) {
  try {
    const result = await ratingsService.updateRating(req.params.id, req.body);
    res
      .status(200)
      .json({ success: true, message: 'Rating updated', data: result });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
}

async function deleteRating(req, res) {
  try {
    await ratingsService.deleteRating(req.params.id);
    res.status(200).json({ success: true, message: 'Rating deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

module.exports = {
  createRating,
  getRatings,
  getRating,
  updateRating,
  deleteRating,
};
