const repo = require('./history-repository');

async function getAll() {
  return await repo.findAll();
}

async function getOne(id) {
  return await repo.findById(id);
}

async function create(data) {
  return await repo.create(data);
}

async function remove(id) {
  return await repo.remove(id);
}

async function clear() {
  return await repo.clear();
}

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  clear,
};
