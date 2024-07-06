const express = require("express");

const carrierController = require("./../controllers/carrierController");
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

    carrierController.getAllCarriers
  )
  .post(carrierController.createCarrier);

//router.use(authController.protect);

router
  .route("/:id")
  .get(
    //authController.restrictTo("admin", "staff"),
    carrierController.getCarrier
  )
  .patch(
    //authController.restrictTo("admin", "staff"),
    // vendorController.uploadVendorLogo,
    // vendorController.resizeVendorLogo,
    carrierController.updateCarrier
  )
  .delete(
    //authController.restrictTo("admin"),
    carrierController.deleteCarrier
  );

module.exports = router;
