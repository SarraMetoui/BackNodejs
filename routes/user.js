const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const userController = require('../controllers/user');


router.get('/get', userController.fetchAll);


router.delete('/delete/:id', userController.deleteUser);

router.put('/update/:id', userController.updateUser);
router.get('/find/:id', userController.FindById);
router.get('/topic/:id', userController.getProjectTopics);


module.exports = router;