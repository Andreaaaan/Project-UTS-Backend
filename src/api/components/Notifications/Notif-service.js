const repo = require('./notif-repository');

exports.createNotification = async (payload) => await repo.create(payload);

exports.getAllNotifications = async () => await repo.findAll();

exports.getNotificationById = async (id) => await repo.findById(id);

exports.markAsRead = async (id) => await repo.update(id, { isRead: true });

exports.deleteNotification = async (id) => await repo.delete(id);
