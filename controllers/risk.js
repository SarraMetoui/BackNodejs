const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
 
// const jwt = require('jsonwebtoken');

const Risk = require('../models/risk');

// console.log('hi1');

//// add a project
exports.post = async (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) return;
  
    const name = req.body.name;
    const description = req.body.description;
    const team = req.body.team; 
    const phase = req.body.phase; 
    const priority = req.body.priority; 
    const score = req.body.score;
    const impact = req.body.impact; 
    const date = req.body.impact;

    
    try {
      const risk = {
        name: name,
        description: description,
        team: team,
        phase: phase, 
        priority: priority, 
        score: score,
        impact: impact,
        date:date,
    
      };
      const result = await Risk.save(risk);
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
    const [allProjects] = await Risk.fetchAll();
    res.status(200).json(allProjects);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.fetchDesgin = async (req, res, next) => {
    try {
      const [allProjects] = await Risk.fetchDesgin();
      res.status(200).json(allProjects);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  exports.fetchFront = async (req, res, next) => {
    try {
      const [allProjects] = await Risk.fetchFront();
      res.status(200).json(allProjects);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };exports.fetchBack = async (req, res, next) => {
    try {
      const [allProjects] = await Risk.fetchBack();
      res.status(200).json(allProjects);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };exports.fetchTest = async (req, res, next) => {
    try {
      const [allProjects] = await Risk.fetchTest();
      res.status(200).json(allProjects);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  exports.fetchConception = async (req, res, next) => {
    try {
      const [allProjects] = await Risk.fetchConception();
      res.status(200).json(allProjects);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };

////Deleting a project
exports.delete = async (req, res, next) => {
  try {
    const deleteResponse = await Risk.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};


////Update a project
exports.update = async (req, res, next) => {
  try {
    const updateResponse = await Risk.update(req.params.id, req.body);
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
    const project = await Risk.getById(req.params.id);
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
