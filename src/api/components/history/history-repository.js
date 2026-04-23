const History = require('../../../models/history-schema');

async function findAll() {
  return await History.find();
}

async function findById(id) {
  return await History.findById(id);
}

async function create(data) {
  return await History.create(data);
}

async function remove(id) {
  return await History.findByIdAndDelete(id);
}

async function clear() {
  return await History.deleteMany();
}

module.exports = {
  findAll,
  findById,
  create,
  remove,
  clear,
};
