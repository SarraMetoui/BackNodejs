const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
 
// const jwt = require('jsonwebtoken');

const Document = require('../models/document');

// console.log('hi1');

//// add a project
exports.postDocument = async (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) return;
  
    const name = req.body.name;
    const date = req.body.date;
    const type = req.body.type;
    const state = req.body.state; 
    
    try {
      const document = {
        name: name,
        date: date,
        type: type, 
        state: state,
    
      };
      const result = await Document.save(document);
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
    const [allProjects] = await Document.fetchAll();
    res.status(200).json(allProjects);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

////Deleting a project
exports.deleteDocument = async (req, res, next) => {
  try {
    const deleteResponse = await Document.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};


////Update a project
exports.updateDocument = async (req, res, next) => {
  try {
    const updateResponse = await Document.update(req.params.id, req.body);
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
    const project = await Document.getById(req.params.id);
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
////Total of images 
exports.getImg = async (req, res, next) => {
  try {
    const nb = await Document.getImg();
    res.status(200).json(nb);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
}
////Total of videos 
exports.getVideo = async (req, res, next) => {
    try {
      const nb = await Document.getVideo();
      res.status(200).json(nb);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
  ////Total of pdfs 
exports.getPdf = async (req, res, next) => {
    try {
      const nb = await Document.getPdf();
      res.status(200).json(nb);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
  ////Total of audios 
exports.getAudio = async (req, res, next) => {
    try {
      const nb = await Document.getAudio();
      res.status(200).json(nb);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }

