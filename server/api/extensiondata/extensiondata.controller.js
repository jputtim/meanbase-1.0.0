'use strict';

var _ = require('lodash');
var Extensiondata = require('./extensiondata.model');
var CRUD = require('../../components/CRUD');
var collection = new CRUD(Extensiondata);

collection.modifyBody = function(body) {
  return body;
};

collection.modifyIdentifier = function(identifier) {
  if(identifier.query) {
    identifier = identifier.query;
  }

  return identifier;
};

// Get list of pages
exports.findAll = function(req, res) {
  collection.findAll(req, res);
};

// Get some pages
exports.find = function(req, res) {
  collection.find(req, res);
};

// Creates a new pages in the DB.
exports.create = function(req, res) {
  collection.create(req, res);
};

// Updates pages in the database
exports.update = function(req, res) {
  collection.upsert(req, res);
};

// Deletes a pages from the DB.
exports.delete = function(req, res) {
  collection.delete(req, res);
};

// Get a single pages
exports.findById = function(req, res) {
  collection.findById(req, res);
};

// Updates an existing page in the DB.
exports.updateById = function(req, res) {
  collection.updateById(req, res);
};

// Deletes a pages from the DB.
exports.deleteById = function(req, res) {
  collection.deleteById(req, res);
};