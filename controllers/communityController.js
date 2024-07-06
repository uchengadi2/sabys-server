const Community = require("./../models/communityModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

//the handler to get all Communities
exports.getAllCommunities = factory.getAll(Community);

//the handler to create a Community
exports.createCommunity = factory.createOne(Community);

//the handler to get one Community
exports.getCommunity = factory.getOne(Community);

//the handler to update a Community
exports.updateCommunity = factory.updateOne(Community);

//the handler to delete a Community
exports.deleteCommunity = factory.deleteOne(Community);
