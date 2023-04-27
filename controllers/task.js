const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
 
// const jwt = require('jsonwebtoken');

const Task = require('../models/task');
const Project = require('../models/project');
const projectController = require('../controllers/project');



// console.log('hi1');

//// add a project
exports.postTask = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  const name = req.body.name;
  const description = req.body.description;
  const status = req.body.status;
  const date = req.body.date;
  const progress = req.body.progress;
  const priority = req.body.priority;
  const time = req.body.time;
  const duration = req.body.duration;
  const topicid = req.body.topicid;
  const uid = req.body.uid;


  try {
    
    const task = {
      name: name,
      description: description,
      status: status,
      date: date,
      progress: progress,
      priority: priority,
      time: time,
      duration: duration,
      topicid:topicid,
      uid:uid,
    };
    const result = await Task.save(task,topicid,uid);
    res.status(201).json({ message: 'Posted!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.postUser = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;

  const name = req.body.name;
  const description = req.body.description;
  const status = req.body.status;
  const date = req.body.date;
  const progress = req.body.progress;
  const priority = req.body.priority;
  const time = req.body.time;
  const duration = req.body.duration;
 
  const uid = req.body.uid;


  try {
    
    const task = {
      name: name,
      description: description,
      status: status,
      date: date,
      progress: progress,
      priority: priority,
      time: time,
      duration: duration,
      uid:uid,
    };
    const result = await Task.saveuser(task,uid);
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
    const [allProjects] = await Task.fetchAll();
    res.status(200).json(allProjects);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

////Deleting a project
exports.deleteTask = async (req, res, next) => {
  try {
    const deleteResponse = await Task.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};


////Update a project
exports.updateTask = async (req, res, next) => {
  try {
    const updateResponse = await Task.update(req.params.id, req.body);
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
    const project = await Task.getById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

//// Get project's tasks

exports.getProjectTasks = async (req, res, next) => {
  try {
    const project = await Task.getProjectTasks(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

//// Get task's project name

exports.getTaskProject = async (req, res, next) => {
  try {
    const project = await Task.getTaskProject(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
