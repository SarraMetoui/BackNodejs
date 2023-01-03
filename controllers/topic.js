const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
 
// const jwt = require('jsonwebtoken');

const Topic = require('../models/topic');

// console.log('hi1');

//// add a project
exports.postTopic = async (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) return;
  
    const name = req.body.name;
    const description = req.body.description;
   
    
    try {
      const topic = {
        name: name,
        description: description,
    
      };
      const result = await Topic.save(topic);
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
    const [allProjects] = await Topic.fetchAll();
    res.status(200).json(allProjects);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

////Deleting a project
exports.deleteTopic = async (req, res, next) => {
  try {
    const deleteResponse = await Topic.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};


////Update a project
exports.updateTopic = async (req, res, next) => {
  try {
    const updateResponse = await Topic.update(req.params.id, req.body);
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
    const project = await Topic.getById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

//// Get project's tasks

// exports.getProjectTasks = async (req, res, next) => {
//   try {
//     const project = await Task.getProjectTasks(req.params.id);
//     res.status(200).json(project);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

// //// Get task's project name

// exports.getTaskProject = async (req, res, next) => {
//   try {
//     const project = await Task.getTaskProject(req.params.id);
//     res.status(200).json(project);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };
