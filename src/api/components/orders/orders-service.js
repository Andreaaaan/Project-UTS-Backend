const repo = require('./orders-repository');

async function getAll() {
  return await repo.getAll();
}

async function getById(id) {
  return await repo.getById(id);
}

async function create(data) {
  return await repo.create({
    ...data,
    status: 'pending',
  });
}

async function updateStatus(id, status) {
  return await repo.updateStatus(id, status);
}

async function remove(id) {
  return await repo.remove(id);
}

module.exports = {
  getAll,
  getById,
  create,
  updateStatus,
  remove,
};
