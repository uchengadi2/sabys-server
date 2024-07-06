const Rejects = require("./../models/rejectsModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

//the handler to get all Rejects
exports.getAllRejects = factory.getAll(Rejects);

//the handler to create a Rejects
exports.createReject = factory.createOne(Rejects);

//the handler to get one Rejects
exports.getReject = factory.getOne(Rejects);

//the handler to update a Rejects
exports.updateReject = factory.updateOne(Rejects);

//the handler to delete a Rejects
exports.deleteReject = factory.deleteOne(Rejects);
