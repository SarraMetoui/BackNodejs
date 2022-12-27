const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
 
// const jwt = require('jsonwebtoken');

const Project = require('../models/project');

// console.log('hi1');

//// add a project
exports.postProject = async (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) return;
  
    const name = req.body.name;
    const description = req.body.description;
    const status = req.body.status;
    const date = req.body.date;
    const deadline = req.body.deadline;
    const department = req.body.department;
    const phase = req.body.phase;
    const client = req.body.client;
    const manager = req.body.manager;
    const progress = req.body.progress;
    const priority = req.body.priority;
    const version = req.body.version;
    try {
      const project = {
        name: name,
        description: description,
        status: status,
        date: date,
        deadline: deadline,
        department: department,
        phase: phase,
        client: client,
        manager: manager,
        progress: progress,
        priority: priority,
        version: version,
      };
      const result = await Project.save(project);
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
    const [allProjects] = await Project.fetchAll();
    res.status(200).json(allProjects);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

////Deleting a project
exports.deleteProject = async (req, res, next) => {
  try {
    const deleteResponse = await Project.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};


////Update a project
exports.updateProject = async (req, res, next) => {
  try {
    const updateResponse = await Project.update(req.params.id, req.body);
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
    const project = await Project.getById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


