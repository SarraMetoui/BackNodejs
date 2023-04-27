const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const Meeting = require('../models/meeting');

const meetingsController = require('../controllers/meeting');

router.post(
    '/post/:id',
    
    meetingsController.postMeeting
  );
router.get('/get', meetingsController.fetchAll);


router.delete('/delete/:id', meetingsController.deleteMeeting);

router.put('/update/:id', meetingsController.updateMeeting);

router.get('/find/:id', meetingsController.FindById);

router.get('/project/:id', meetingsController.getProjectMeetings);

router.get('/getdate', meetingsController.find);





module.exports = router;