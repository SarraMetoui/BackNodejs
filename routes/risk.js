const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const Risk = require('../models/risk');

const riskController = require('../controllers/risk');

router.post(
    '/post',
    [
      body('name').trim().not().isEmpty(),
      body('description').trim().not().isEmpty(),
      body('team').trim().not().isEmpty(),
      body('phase').trim().not().isEmpty(),
      body('priority').trim().not().isEmpty(),
      body('score').trim().not().isEmpty(),
      body('impact').trim().not().isEmpty(),
      body('date').trim().not().isEmpty(),
    ],
    riskController.post
  );
router.get('/get', riskController.fetchAll);


router.delete('/delete/:id', riskController.delete);

router.put('/update/:id', riskController.update);

router.get('/find/:id', riskController.FindById);

router.get('/design', riskController.fetchDesgin);
router.get('/front', riskController.fetchFront);
router.get('/back', riskController.fetchBack);
router.get('/test', riskController.fetchTest);
router.get('/conception', riskController.fetchConception);



// router.get('/project/:id', topicController.getProjectTasks);

// router.get('/task/:id', taskController.getTaskProject);


module.exports = router;