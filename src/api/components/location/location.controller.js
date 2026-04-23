const service = require('./locations-service');

function create(req, res) {
  const data = service.createLocation(req.body);
  res.status(201).json(data);
}

function getAll(req, res) {
  res.json(service.getLocations());
}

function getOne(req, res) {
  const data = service.getLocation(req.params.id);
  if (!data) return res.status(404).json({ message: 'Not found' });

  res.json(data);
}

function update(req, res) {
  const data = service.updateLocation(req.params.id, req.body);
  if (!data) return res.status(404).json({ message: 'Not found' });

  res.json(data);
}

function remove(req, res) {
  const success = service.deleteLocation(req.params.id);
  if (!success) return res.status(404).json({ message: 'Not found' });

  res.json({ message: 'Deleted' });
}

module.exports = {
  create,
  getAll,
  getOne,
  update,
  remove,
};
