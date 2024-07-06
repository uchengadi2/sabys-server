const express = require("express");

const inventoryController = require("./../controllers/inventoryController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

// router.use(authController.protect);

// router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(inventoryController.getAllInventories)
  .post(inventoryController.createInventory);

router
  .route("/:id")
  .get(inventoryController.getInventory)
  .patch(inventoryController.updateInventory)
  .delete(inventoryController.deleteInventory);

module.exports = router;
