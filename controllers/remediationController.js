const Remediation = require("./../models/remediationModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

//the handler to get all Remediations
exports.getAllRemediations = factory.getAll(Remediation);

//the handler to create a Remediation
exports.createRemediation = factory.createOne(Remediation);

//the handler to get one Remediation
exports.getRemediation = factory.getOne(Remediation);

//the handler to update a Remediation
exports.updateRemediation = factory.updateOne(Remediation);

//the handler to delete a Remediation
exports.deleteRemediation = factory.deleteOne(Remediation);
