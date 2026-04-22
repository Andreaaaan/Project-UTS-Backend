const express = require('express');

const router = express.Router();
const controller = require('./Notif-controller');

router.post('/notifications', controller.create);
router.get('/notifications', controller.getAll);
router.get('/notifications/:id', controller.getById);
router.patch('/notifications/:id', controller.markRead);
router.delete('/notifications/:id', controller.remove);

module.exports = router;
