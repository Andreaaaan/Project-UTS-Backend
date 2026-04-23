const User = require('./models/User');

// POST /users -> register user
exports.create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: "Register berhasil", data: newUser });
  } catch (err) { res.status(400).json({ error: err.message }); }
};

// GET /users -> get all users
exports.getAll = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

<<<<<<< HEAD
// CREATE USER
exports.create = (req, res) => {
  const user = {
    id: users.length + 1,
    ...req.body,
  };
  users.push(user);
  res.json(user);
};

// GET USER BY ID
exports.getById = (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  res.json(user);
};

// DELETE USER
exports.remove = (req, res) => {
  users = users.filter((u) => u.id != req.params.id);
  res.json({ message: 'User deleted' });
=======
// GET /users/:id -> get detail user
exports.getById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User tidak ditemukan" });
  res.json(user);
};

// PUT /users/:id -> update user
exports.update = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "User diupdate", data: updated });
};

// DELETE /users/:id -> delete user
exports.remove = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User dihapus" });
>>>>>>> 0882f7d9e44b7cf1fd079b5a692fecf2ebb385b5
};
