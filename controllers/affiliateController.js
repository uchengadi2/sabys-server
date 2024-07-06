const Affiliate = require("./../models/affiliateModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

//the handler to get all Affiliate
exports.getAllAffiliates = factory.getAll(Affiliate);

//the handler to create a Affiliate
exports.createAffiliate = factory.createOne(Affiliate);

//the handler to get one Affiliate
exports.getAffiliate = factory.getOne(Affiliate);

//the handler to update a Affiliate
exports.updateAffiliate = factory.updateOne(Affiliate);

//the handler to delete a Affiliate
exports.deleteAffiliate = factory.deleteOne(Affiliate);
