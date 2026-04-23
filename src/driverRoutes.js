const express = require('express');
const router = express.Router();
const controller = require('./driverController');

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.patch('/:id', controller.updateStatus);
router.delete('/:id', controller.remove);

module.exports = router;
