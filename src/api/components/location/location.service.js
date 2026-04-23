const repo = require('./locations-repository');

function createLocation(data) {
  return repo.create(data);
}

function getLocations() {
  return repo.getAll();
}

function getLocation(id) {
  return repo.getById(id);
}

function updateLocation(id, data) {
  return repo.update(id, data);
}

function deleteLocation(id) {
  return repo.remove(id);
}

module.exports = {
  createLocation,
  getLocations,
  getLocation,
  updateLocation,
  deleteLocation,
};
