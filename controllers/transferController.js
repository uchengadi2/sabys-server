const Transfer = require("./../models/transferModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

//the handler to get all Transfer
exports.getAllTransfers = factory.getAll(Transfer);

//the handler to create a Transfer
exports.createTransfer = factory.createOne(Transfer);

//the handler to get one Transfer
exports.getTransfer = factory.getOne(Transfer);

//the handler to update a Transfer
exports.updateTransfer = factory.updateOne(Transfer);

//the handler to delete a Transfer
exports.deleteTransfer = factory.deleteOne(Transfer);
