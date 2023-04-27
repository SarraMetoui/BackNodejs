const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const Issue = require('../models/issue');

const issueController = require('../controllers/issue');

router.post(
    '/post/:id',
    
    issueController.postIssue
  );
router.get('/get', issueController.fetchAll);


router.delete('/delete/:id', issueController.deleteIssue);

router.put('/update/:id', issueController.updateIssue);

router.get('/find/:id', issueController.FindById);

router.get('/project/:id', issueController.getProjectIssues);

router.put('/change/:id/status', issueController.updateStatus);




module.exports = router;