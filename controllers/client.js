const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
 
// const jwt = require('jsonwebtoken');

const Client = require('../models/client');

// console.log('hi1');

//// add a project
exports.postClient = async (req, res, next) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) return;
  
    const name = req.body.name;
    const manager = req.body.manager;
    const email = req.body.email; 
    const number = req.body.number; 
    const address = req.body.address; 
    
   
    try {
      const client = {
        name: name,
        manager: manager,
        email: email, 
        number: number,
        address: address,
    
      };
      const result = await Client.save(client);
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
    const [allProjects] = await Client.fetchAll();
    res.status(200).json(allProjects);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

////Deleting a project
exports.deleteClient = async (req, res, next) => {
  try {
    const deleteResponse = await Client.delete(req.params.id);
    res.status(200).json(deleteResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }

};


////Update a project
exports.updateClient = async (req, res, next) => {
  try {
    const updateResponse = await Client.update(req.params.id, req.body);
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
    const project = await Client.getById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


