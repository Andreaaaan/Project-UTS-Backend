const driversRepository = require('./drivers-repository');

async function getAllDrivers() { return driversRepository.getDrivers(); }
async function getDetail(id) { return driversRepository.getDriver(id); }
async function registerDriver(data) { return driversRepository.createDriver(data); }
async function update(id, data) { return driversRepository.updateDriver(id, data); }
async function remove(id) { return driversRepository.deleteDriver(id); }

module.exports = { getAllDrivers, getDetail, registerDriver, update, remove };
