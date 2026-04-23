const locations = [];
let id = 1;

function create(data) {
  const newData = { id: id++, ...data };
  locations.push(newData);
  return newData;
}

function getAll() {
  return locations;
}

function getById(idParam) {
  return locations.find((l) => l.id == idParam);
}

function update(idParam, data) {
  const item = getById(idParam);
  if (!item) return null;

  Object.assign(item, data);
  return item;
}

function remove(idParam) {
  const index = locations.findIndex((l) => l.id == idParam);
  if (index === -1) return false;

  locations.splice(index, 1);
  return true;
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
