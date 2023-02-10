const express = require('express');

const { body } = require('express-validator');

const router = express.Router();


const uploadcontroller = require('../controllers/file.controller');


router.post('/upload', uploadcontroller.upload);
router.get('/files', uploadcontroller.getListFiles); 
router.get('/files/:name', uploadcontroller.download)






module.exports = router;