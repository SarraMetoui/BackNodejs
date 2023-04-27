const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
 
// const jwt = require('jsonwebtoken');

const Meeting = require('../models/meeting');

// console.log('hi1');

//// add a project
exports.postMeeting= async (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) return;
  
    const name = req.body.name;
    const description = req.body.description;
    const start = req.body.start;
    const end = req.body.end;
    const date= req.body.date;   
    const place= req.body.place; 
    const projectid = req.body.projectid; 
    try {
      const meeting = {
        name: name,
        description: description,
        start:start,
        end:end,
        date:date,
        place:place,
        projectid: projectid,
      };
      const result = await Meeting.save(meeting, projectid);
      res.status(201).json({ message: 'Posted!' });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

////Fetching a project
exports.fetchAll = async (req, res, next) => {
  try {
    const [allProjects] = await Meeting.fetchAll();
    res.status(200).json(allProjects);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

////Deleting a project
exports.deleteMeeting = async (req, res, next) => {
  try {
    const deleteResponse = await Meeting.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};


////Update a project
exports.updateMeeting= async (req, res, next) => {
  try {
    const updateResponse = await Meeting.update(req.params.id, req.body);
    res.status(200).json(updateResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

//////Get user By Id

exports.FindById = async (req, res, next) => {
  try {
    const issue = await Meeting.getById(req.params.id);
    res.status(200).json(issue);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Get project's tasks

exports.getProjectMeetings = async (req, res, next) => {
  try {
    const issue = await Meeting.getProjectMeetigs(req.params.id);
    res.status(200).json(issue);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

////Update a status
// exports.updateStatus = async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const status = req.body.status;
//       const updateResponse = await Issue.getStatus(id, status);
//       res.status(200).json(updateResponse);
//     } catch (err) {
//       if (!err.statusCode) {
//         err.statusCode = 500;
//       }
//       next(err);
//     }
//   };

exports.find = async (req, res, next) => {
    try {
        const date = req.body.date;
      const [allProjects] = await Meeting.find(date);
      res.status(200).json(allProjects);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
