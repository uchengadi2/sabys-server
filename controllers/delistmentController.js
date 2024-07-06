const Delistment = require("./../models/delistmentModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

//the handler to get all Delistments
exports.getAllDelistments = factory.getAll(Delistment);

//the handler to create a Delistment
exports.createDelistment = factory.createOne(Delistment);

//the handler to get one Delistment
exports.getDelistment = factory.getOne(Delistment);

//the handler to update a Delistment
exports.updateDelistment = factory.updateOne(Delistment);

//the handler to delete a Delistment
exports.deleteDelistment = factory.deleteOne(Delistment);
