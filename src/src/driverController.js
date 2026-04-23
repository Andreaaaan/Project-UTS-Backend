const Driver = require('./models/Driver');

// POST /drivers -> create driver
exports.create = async (req, res) => {
  try {
    const newDriver = new Driver(req.body);
    await newDriver.save();
    res.status(201).json({ message: "Driver dibuat", data: newDriver });
  } catch (err) { res.status(400).json({ error: err.message }); }
};

// GET /drivers -> get all drivers
exports.getAll = async (req, res) => {
  const drivers = await Driver.find();
  res.json(drivers);
};

// GET /drivers/:id -> get detail driver
exports.getById = async (req, res) => {
  const driver = await Driver.findById(req.params.id);
  res.json(driver);
};

// PATCH /drivers/:id -> update status driver
exports.updateStatus = async (req, res) => {
  const updated = await Driver.findByIdAndUpdate(
    req.params.id, 
    { status: req.body.status }, 
    { new: true }
  );
  res.json({ message: "Status driver diupdate", data: updated });
};

// DELETE /drivers/:id -> delete driver
exports.remove = async (req, res) => {
  await Driver.findByIdAndDelete(req.params.id);
  res.json({ message: "Driver dihapus" });
};
