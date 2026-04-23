const paymentsRepository = require('./payments-repository');

async function createPayment(data) {
  return await paymentsRepository.createPayment(data);
}
async function getPayments() {
  return await paymentsRepository.getPayments();
}
async function getPayment(id) {
  return await paymentsRepository.getPayment(id);
}
async function updatePayment(id, data) {
  return await paymentsRepository.updatePayment(id, data);
}
async function deletePayment(id) {
  return await paymentsRepository.deletePayment(id);
}

module.exports = {
  createPayment,
  getPayments,
  getPayment,
  updatePayment,
  deletePayment,
};
