const express = require('express');
const ratingsController = require('./ratings-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/ratings', route);
  route.post('/', ratingsController.createRating);
  route.get('/', ratingsController.getRatings);
  route.get('/:id', ratingsController.getRating);
  route.patch('/:id', ratingsController.updateRating);
  route.delete('/:id', ratingsController.deleteRating);
};
