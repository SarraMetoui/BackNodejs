const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const Topic = require('../models/topic');

const topicController = require('../controllers/topic');

router.post(
    '/post/:id',
    [
      body('name').trim().not().isEmpty(),
      body('description').trim().not().isEmpty(),
      
    ],
    topicController.postTopic
  );
router.get('/get', topicController.fetchAll);


router.delete('/delete/:id', topicController.deleteTopic);

router.put('/update/:id', topicController.updateTopic);

router.get('/find/:id', topicController.FindById);

router.get('/project/:id', topicController.getProjectTopics);

// router.get('/task/:id', taskController.getTaskProject);


module.exports = router;