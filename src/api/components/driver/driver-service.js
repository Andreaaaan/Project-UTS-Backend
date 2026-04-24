const repo = require('./driver-repository');

async function create(data) {
  if (!data.name) throw new Error('Nama driver wajib');
  return repo.create(data);
}

const getAll = () => repo.findAll();
const getById = (id) => repo.findById(id);
const update = (id, data) => repo.update(id, data);
const remove = (id) => repo.remove(id);

module.exports = { create, getAll, getById, update, remove };
