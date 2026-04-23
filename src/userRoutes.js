const express = require('express');
const router = express.Router();
const controller = require('./userController');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.delete('/:id', controller.remove);

module.exports = router;
