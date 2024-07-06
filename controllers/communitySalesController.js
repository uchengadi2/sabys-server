const multer = require("multer");
const sharp = require("sharp");
const CommunitySales = require("./../models/communitySalesModel");
const APIFeatures = require("./../utils/apiFeatures");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

const multerStorage = multer.memoryStorage();

//the handler to get all CommunitySales
exports.getAllCommunitySales = factory.getAll(CommunitySales);

//the handler to create a CommunitySales
exports.createCommunitySale = factory.createOne(CommunitySales);

//the handler to get one CommunitySales
exports.getCommunitySale = factory.getOne(CommunitySales);

//the handler to update a CommunitySales
exports.updateCommunitySale = factory.updateOne(CommunitySales);

//the handler to delete a CommunitySales
exports.deleteCommunitySale = factory.deleteOne(CommunitySales);
