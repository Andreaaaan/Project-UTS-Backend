const driversService = require('./drivers-service');

async function getAll(req, res) {
    const drivers = await driversService.getAllDrivers();
    res.json(drivers);
}
async function create(req, res) {
    const driver = await driversService.registerDriver(req.body);
    res.status(201).json(driver);
}
async function get(req, res) {
    const driver = await driversService.getDetail(req.params.id);
    res.json(driver);
}
async function update(req, res) {
    const driver = await driversService.update(req.params.id, req.body);
    res.json(driver);
}
async function remove(req, res) {
    await driversService.remove(req.params.id);
    res.json({ message: 'Driver deleted' });
}

module.exports = { getAll, create, get, update, remove };
