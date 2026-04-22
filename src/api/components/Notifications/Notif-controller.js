const service = require('./notif-service');

exports.create = async (req, res) => {
  try {
    const data = await service.createNotification(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  const data = await service.getAllNotifications();
  res.json(data);
};

exports.getById = async (req, res) => {
  const data = await service.getNotificationById(req.params.id);
  res.json(data);
};

exports.markRead = async (req, res) => {
  const data = await service.markAsRead(req.params.id);
  res.json(data);
};

exports.remove = async (req, res) => {
  await service.deleteNotification(req.params.id);
  res.json({ message: 'Deleted successfully' });
};
