const Driver = require('../../../models/drivers-schema');

async function getDrivers() { return Driver.find({}); }
async function getDriver(id) { return Driver.findById(id); }
async function createDriver(data) { return Driver.create(data); }
async function updateDriver(id, data) { return Driver.findByIdAndUpdate(id, data, { new: true }); }
async function deleteDriver(id) { return Driver.findByIdAndDelete(id); }

module.exports = { getDrivers, getDriver, createDriver, updateDriver, deleteDriver };
