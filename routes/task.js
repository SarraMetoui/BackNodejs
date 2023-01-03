const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const Task = require('../models/task');

const taskController = require('../controllers/task');

router.post(
    '/post',
    [
      body('name').trim().not().isEmpty(),
      body('description').trim().not().isEmpty(),
      body('status').trim().not().isEmpty(),
      body('date').trim().not().isEmpty(),
      body('progress').trim().not().isEmpty(),
      body('priority').trim().not().isEmpty(),
    ],
    taskController.postTask
  );
router.get('/get', taskController.fetchAll);


router.delete('/delete/:id', taskController.deleteTask);

router.put('/update/:id', taskController.updateTask);

router.get('/find/:id', taskController.FindById);

router.get('/project/:id', taskController.getProjectTasks);

router.get('/task/:id', taskController.getTaskProject);


module.exports = router;