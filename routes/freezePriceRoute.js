const express = require("express");

const FreezePriceController = require("./../controllers/freezePriceController");
const authController = require("./../controllers/authController");

const router = express.Router();

//provide protection with the protect middleware
//router.use(authController.protect);

//ensure appropriate authorization
//router.use(authController.restrictTo());

router
  .route("/")
  .get(
    //authController.protect,

    FreezePriceController.getAllFreezePrices
  )
  .post(FreezePriceController.createFreezePrice);

//router.use(authController.protect);

router
  .route("/:id")
  .get(
    //authController.restrictTo("admin", "staff"),
    FreezePriceController.getFreezePrice
  )
  .patch(
    //authController.restrictTo("admin", "staff"),
    // vendorController.uploadVendorLogo,
    // vendorController.resizeVendorLogo,
    FreezePriceController.updateFreezePrice
  )
  .delete(
    //authController.restrictTo("admin"),
    FreezePriceController.deleteFreezePrice
  );

module.exports = router;
