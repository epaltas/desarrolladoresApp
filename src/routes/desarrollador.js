const express = require('express');
const router = require('express').Router();

const desarrolladorController = require('../controllers/desarrolladorController');

router.get('/', desarrolladorController.list);
router.get('/developers', desarrolladorController.new);
router.post('/developers', desarrolladorController.save);
router.get('/developers/:id', desarrolladorController.edit);
router.post('/developers/:id', desarrolladorController.update);
router.get('/developers/:id', desarrolladorController.delete);

module.exports = router;