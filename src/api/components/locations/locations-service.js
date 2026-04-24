const repo = require('./locations-repository');

async function create(data) {
  if (!data.pickup_location || !data.destination_location) {
    throw new Error('Pickup & destination wajib');
  }
  return repo.create(data);
}

const getAll = () => repo.findAll();

async function getById(id) {
  const data = await repo.findById(id);
  if (!data) throw new Error('Not found');
  return data;
}

const update = (id, data) => repo.update(id, data);
const remove = (id) => repo.remove(id);

module.exports = { create, getAll, getById, update, remove };
