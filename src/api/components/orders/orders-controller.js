const ordersService = require('./orders-service');
const history = require('../history/history-controller');

function getOrders(req, res) {
  const data = ordersService.getOrders();
  res.json(data);
}

function getOrder(req, res) {
  const item = ordersService.getOrder(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });

  res.json(item);
}

function createOrder(req, res) {
  const newData = ordersService.createOrder({
    ...req.body,
    status: 'pending',
  });

  history.addHistory({
    action: 'ORDER_CREATED',
    description: `Order dari ${newData.pickup_location} ke ${newData.destination_location}`,
  });

  res.status(201).json(newData);
}

function updateOrder(req, res) {
  const validStatus = ['pending', 'completed', 'cancelled'];

  if (!validStatus.includes(req.body.status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  const item = ordersService.updateOrder(req.params.id, req.body.status);
  if (!item) return res.status(404).json({ message: 'Not found' });

  history.addHistory({
    action: 'ORDER_UPDATED',
    description: `Order ${item.id} jadi ${item.status}`,
  });

  res.json(item);
}

function deleteOrder(req, res) {
  const success = ordersService.deleteOrder(req.params.id);
  if (!success) return res.status(404).json({ message: 'Not found' });

  history.addHistory({
    action: 'ORDER_DELETED',
    description: `Order ${req.params.id} dihapus`,
  });

  res.json({ message: 'Deleted' });
}

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
