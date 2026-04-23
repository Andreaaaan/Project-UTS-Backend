const ordersService = require('./orders-service');

async function getOrders(req, res) {
  const data = await ordersService.getAll();
  res.json(data);
}

async function getOrder(req, res) {
  const item = await ordersService.getById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });

  res.json(item);
}

async function createOrder(req, res) {
  const { product_name, quantity, price, pickupLocation, destinationLocation } =
    req.body;

  if (!product_name || !quantity || !price) {
    return res.status(400).json({
      message: 'product_name, quantity, dan price wajib diisi',
    });
  }

  if (!pickupLocation || !destinationLocation) {
    return res.status(400).json({
      message: 'pickupLocation dan destinationLocation wajib diisi',
    });
  }

  const newData = await ordersService.create({
    product_name,
    quantity,
    price,
    pickupLocation,
    destinationLocation,
  });

  res.status(201).json(newData);
}

async function updateOrder(req, res) {
  const validStatus = ['pending', 'completed', 'cancelled'];

  if (!validStatus.includes(req.body.status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  const item = await ordersService.updateStatus(req.params.id, req.body.status);

  if (!item) return res.status(404).json({ message: 'Not found' });

  res.json(item);
}

async function deleteOrder(req, res) {
  const success = await ordersService.remove(req.params.id);

  if (!success) return res.status(404).json({ message: 'Not found' });

  res.json({ message: 'Deleted' });
}

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
