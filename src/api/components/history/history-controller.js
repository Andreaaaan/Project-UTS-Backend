const service = require('./history-service');

async function getAll(req, res) {
  const data = await service.getAll();
  res.json(data);
}

async function getOne(req, res) {
  const item = await service.getOne(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });

  res.json(item);
}

async function create(req, res) {
  const data = await service.create(req.body);
  res.status(201).json(data);
}

async function remove(req, res) {
  const deleted = await service.remove(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Not found' });

  res.json({ message: 'Deleted' });
}

async function clear(req, res) {
  await service.clear();
  res.json({ message: 'All history cleared' });
}

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  clear,
};
