const { Order } = require('../../../models');

async function getAll() {
  return await Order.find();
}

async function getById(id) {
  return await Order.findById(id);
}

async function create(data) {
  return await Order.create(data);
}

async function updateStatus(id, status) {
  const order = await Order.findById(id);
  if (!order) return null;

  order.status = status;
  await order.save();
  return order;
}

async function remove(id) {
  const result = await Order.findByIdAndDelete(id);
  return !!result;
}

module.exports = {
  getAll,
  getById,
  create,
  updateStatus,
  remove,
};
