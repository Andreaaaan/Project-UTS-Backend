const Payment = require('../../../models');

async function createPayment(data) {
  return await Payment.create(data);
}
async function getPayments() {
  return await Payment.find();
}

async function getPayment(id) {
  return await Payment.findById(id);
}

async function updatePayment(id, data) {
  return await Payment.findByIdAndUpdate(id, data, { new: true });
}

async function deletePayment(id) {
  return await Payment.findByIdAndDelete(id);
}

module.exports = {
  createPayment,
  getPayments,
  getPayment,
  updatePayment,
  deletePayment,
};
