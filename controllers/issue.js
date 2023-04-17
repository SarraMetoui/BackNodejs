const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
 
// const jwt = require('jsonwebtoken');

const Issue = require('../models/issue');

// console.log('hi1');

//// add a project
exports.postIssue= async (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) return;
  
    const name = req.body.name;
    const description = req.body.description;
    const status = req.body.status;
    const date= req.body.date;   
    const projectid = req.body.projectid; 
    try {
      const issue = {
        name: name,
        description: description,
        status:status,
        date:date,
        projectid: projectid,
      };
      const result = await Issue.save(issue, projectid);
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
    const [allProjects] = await Issue.fetchAll();
    res.status(200).json(allProjects);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

////Deleting a project
exports.deleteIssue = async (req, res, next) => {
  try {
    const deleteResponse = await Issue.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};


////Update a project
exports.updateIssue = async (req, res, next) => {
  try {
    const updateResponse = await Issue.update(req.params.id, req.body);
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
    const issue = await Issue.getById(req.params.id);
    res.status(200).json(issue);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

// Get project's tasks

exports.getProjectIssues = async (req, res, next) => {
  try {
    const issue = await Issue.getProjectIssuess(req.params.id);
    res.status(200).json(issue);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

////Update a status
exports.updateStatus = async (req, res, next) => {
    try {
        const id = req.params.id;
        const status = req.body.status;
      const updateResponse = await Issue.getStatus(id, status);
      res.status(200).json(updateResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
