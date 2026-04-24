const Driver = require('../../../models/driver-schema');

const create = (data) => Driver.create(data);
const findAll = () => Driver.find();
const findById = (id) => Driver.findById(id);
const update = (id, data) => Driver.findByIdAndUpdate(id, data, { new: true });
const remove = (id) => Driver.findByIdAndDelete(id);

module.exports = { create, findAll, findById, update, remove };
