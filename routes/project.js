const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const Project = require('../models/project');

const projectController = require('../controllers/project');

router.post(
    '/post',
    [
      body('name').trim().not().isEmpty(),
      body('description').trim().not().isEmpty(),
      body('status').trim().not().isEmpty(),
      body('date').trim().not().isEmpty(),
      body('deadline').trim().not().isEmpty(),
      body('department').trim().not().isEmpty(),
      body('phase').trim().not().isEmpty(),
      body('client').trim().not().isEmpty(),
      body('manager').trim().not().isEmpty(),
      body('progress').trim().not().isEmpty(),
      body('priority').trim().not().isEmpty(),
      body('version').trim().not().isEmpty(),
    ],
    projectController.postProject
  );
router.get('/get', projectController.fetchAll);


router.delete('/delete/:id', projectController.deleteProject);

router.put('/update/:id', projectController.updateProject);
router.get('/find/:id', projectController.FindById);
router.get('/total', projectController.gettotalProjects);
router.get('/completed', projectController.getCompleted);
router.get('/active', projectController.getActive);


module.exports = router;