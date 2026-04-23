let users = [];

// GET ALL USERS
exports.getAll = (req, res) => {
  res.json(users);
};

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
};
