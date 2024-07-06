const Sensitivity = require("./../models/sensitivityModel");
const factory = require("./handlerFactory");

//get the handler to get all Sensitivities
exports.getAllSensitivities = factory.getAll(Sensitivity);

//the handler to create Sensitivity
exports.createSensitivity = factory.createOne(Sensitivity);

//the handler to get one Sensitivity
exports.getSensitivity = factory.getOne(Sensitivity);

//the handler to update a Sensitivity
exports.updateSensitivity = factory.updateOne(Sensitivity);

//the handler to delete one Sensitivity
exports.deleteSensitivity = factory.deleteOne(Sensitivity);
