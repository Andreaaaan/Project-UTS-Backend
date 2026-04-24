const service = require('./locations-service');

exports.create = async (req, res) => {
  try {
    const data = await service.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.getAll = async (req, res) => {
  const data = await service.getAll();
  res.json(data);
};

exports.getById = async (req, res) => {
  try {
    const data = await service.getById(req.params.id);
    res.json(data);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

exports.update = async (req, res) => {
  const data = await service.update(req.params.id, req.body);
  res.json(data);
};

exports.remove = async (req, res) => {
  await service.remove(req.params.id);
  res.json({ message: 'Deleted' });
};
