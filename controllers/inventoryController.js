const Inventory = require("./../models/inventoryModel");
const APIFeatures = require("./../utils/apiFeatures");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

//the handler to get all Inventory
exports.getAllInventories = factory.getAll(Inventory);

//the handler to create a Inventory
exports.createInventory = factory.createOne(Inventory);

//the handler to get one Inventory
exports.getInventory = factory.getOne(Inventory);

//the handler to update a Inventory
exports.updateInventory = factory.updateOne(Inventory);

//the handler to delete a Inventory
exports.deleteInventory = factory.deleteOne(Inventory);
