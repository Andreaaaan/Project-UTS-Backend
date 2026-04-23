const Notification = require('../../../models/Notifications-schema');

exports.create = (data) => Notification.create(data);

exports.findAll = () => Notification.find();

exports.findById = (id) => Notification.findById(id);

exports.update = (id, data) =>
  Notification.findByIdAndUpdate(id, data, { new: true });

exports.delete = (id) => Notification.findByIdAndDelete(id);
