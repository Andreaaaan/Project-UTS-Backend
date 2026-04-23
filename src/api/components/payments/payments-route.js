const express = require('express');
const paymentsController = require('./payments-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/payments', route);

  route.post('/', paymentsController.createPayment);
  route.get('/', paymentsController.getPayments);
  route.get('/:id', paymentsController.getPayment);
  route.patch('/:id', paymentsController.updatePayment);
  route.delete('/:id', paymentsController.deletePayment);
};
