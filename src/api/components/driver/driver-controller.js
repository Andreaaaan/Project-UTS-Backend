const service = require('./driver-service');

exports.create = async (req, res) => {
  try {
    const data = await service.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await service.getAll());
};

exports.getById = async (req, res) => {
  res.json(await service.getById(req.params.id));
};

exports.update = async (req, res) => {
  res.json(await service.update(req.params.id, req.body));
};

exports.remove = async (req, res) => {
  await service.remove(req.params.id);
  res.json({ message: 'Deleted' });
};
