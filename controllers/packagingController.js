const Packaging = require("./../models/packagingModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

//the handler to get all Packaging
exports.getAllPackagings = factory.getAll(Packaging);

//the handler to create  Packaging
exports.createPackaging = factory.createOne(Packaging);

//the handler to get one Packaging
exports.getPackaging = factory.getOne(Packaging);

//the handler to update a Packaging
exports.updatePackaging = factory.updateOne(Packaging);

//the handler to delete a Packaging
exports.deletePackaging = factory.deleteOne(Packaging);
