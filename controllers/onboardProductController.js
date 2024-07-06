const OnboardProduct = require("./../models/onboardProductModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

//the handler to get all onboarded products
exports.getAllOnBoardedProducts = factory.getAll(OnboardProduct);

//the handler to create an onboarded product
exports.createOnBoardedProduct = factory.createOne(OnboardProduct);

//the handler to get one onboarded product
exports.getOnBoardedProduct = factory.getOne(OnboardProduct);

//the handler to update a onboarded product
exports.updateOnBoardedProduct = factory.updateOne(OnboardProduct);

//the handler to delete an onboarded product
exports.deleteOnBoardedProduct = factory.deleteOne(OnboardProduct);
