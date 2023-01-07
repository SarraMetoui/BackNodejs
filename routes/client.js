const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const Client = require('../models/client');

const clientController = require('../controllers/client');

router.post(
    '/post',
    [
      body('name').trim().not().isEmpty(),
      body('manager').trim().not().isEmpty(),
      body('email').trim().not().isEmpty(),
      body('number').trim().not().isEmpty(),
      body('address').trim().not().isEmpty(),
      
    ],
    clientController.postClient
  );
router.get('/get', clientController.fetchAll);


router.delete('/delete/:id', clientController.deleteClient);

router.put('/update/:id', clientController.updateClient);

router.get('/find/:id', clientController.FindById);

// router.get('/project/:id', topicController.getProjectTasks);

// router.get('/task/:id', taskController.getTaskProject);


module.exports = router;