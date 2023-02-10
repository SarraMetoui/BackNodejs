const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const Document = require('../models/document');

const documentController = require('../controllers/document');

router.post(
    '/post',
    [
      body('name').trim().not().isEmpty(),
      body('date').trim().not().isEmpty(),
      body('type').trim().not().isEmpty(),
      body('state').trim().not().isEmpty(),
      
    ],
    documentController.postDocument
  );
router.get('/get', documentController.fetchAll);


router.delete('/delete/:id', documentController.deleteDocument);

router.put('/update/:id', documentController.updateDocument);

router.get('/find/:id', documentController.FindById);

router.get('/image', documentController.getImg);

router.get('/video', documentController.getVideo);

router.get('/pdf', documentController.getPdf);

router.get('/audio', documentController.getAudio);

// router.get('/project/:id', topicController.getProjectTasks);

// router.get('/task/:id', taskController.getTaskProject);


module.exports = router;