const Location = require('../../../models/locations-schema');

const create = (data) => Location.create(data);
const findAll = () => Location.find();
const findById = (id) => Location.findById(id);
const update = (id, data) =>
  Location.findByIdAndUpdate(id, data, { new: true });
const remove = (id) => Location.findByIdAndDelete(id);

module.exports = { create, findAll, findById, update, remove };
