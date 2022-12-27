"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const createDetails_1 = require("./app/useCases/Details/createDetails");
const listDetails_1 = require("./app/useCases/Details/listDetails");
const changeRecords_1 = require("./app/useCases/Records/changeRecords");
const createRecords_1 = require("./app/useCases/Records/createRecords");
const deleteRecords_1 = require("./app/useCases/Records/deleteRecords");
const listRecords_1 = require("./app/useCases/Records/listRecords");
exports.router = (0, express_1.Router)();
// List Records
exports.router.get('/records', listRecords_1.listRecords);
// Create Records
exports.router.post('/records', createRecords_1.createRecords);
// Change Records
exports.router.patch('/records/:recordsId', changeRecords_1.changeRecords);
//Delete Records
exports.router.delete('/records/:recordsId', deleteRecords_1.deleteRecords);
// Create Details
exports.router.post('/details', createDetails_1.createDetails);
// List Details
exports.router.get('/details', listDetails_1.listDetails);
