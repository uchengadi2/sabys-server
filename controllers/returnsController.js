const Returns = require("./../models/returnsModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

//the handler to get all Returns
exports.getAllReturns = factory.getAll(Returns);

//the handler to create a Return
exports.createReturn = factory.createOne(Returns);

//the handler to get one Return
exports.getReturn = factory.getOne(Returns);

//the handler to update a Return
exports.updateReturn = factory.updateOne(Returns);

//the handler to delete a Return
exports.deleteReturn = factory.deleteOne(Returns);
