const express = require ('express');
const user = require ('./components/users/users-route');
const orders = require ('./components/orders/orders-route');
const history = require ('./components/history/history-route');
const notification = require ('./components/notificstion/notif-route');
const location = require ('./components/locations/locations-route');

module.esports = () => {
  const app = espress.router();

  users (app);
  orders(app);
  history(app);
  app.use(notification);
  location(app);
  return app;
}
