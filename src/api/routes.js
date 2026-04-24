const express = require('express');

const users = require('./components/users/users-route');
const orders = require('./components/orders/orders-route');
const history = require('./components/history/history-route');
const notifications = require('./components/Notifications/Notif-route');
const paymentsRoute = require('./components/payments/payments-route');
const ratingsRoute = require('./components/ratings/ratings-route');
const locationsRoute = require('./components/locations/locations-route');
const driverRoute = require('./components/driver/driver-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  orders(app);
  history(app);
  paymentsRoute(app);
  ratingsRoute(app);
  app.use(notifications);
  app.use('/locations', locationsRoute);
  app.use('/drivers', driverRoute);
  return app;
};
