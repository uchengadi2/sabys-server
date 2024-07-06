const express = require("express");

const supplierController = require("./../controllers/supplierController");
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
    //authController.restrictTo("admin"),
    supplierController.getAllSuppliers
  )
  .post(supplierController.createSupplier);

//router.use(authController.protect);

router
  .route("/:id")
  .get(
    //authController.restrictTo("admin", "staff"),
    supplierController.getSupplier
  )
  .patch(
    //authController.restrictTo("admin", "staff"),
    // vendorController.uploadVendorLogo,
    // vendorController.resizeVendorLogo,
    supplierController.updateSupplier
  )
  .delete(
    //authController.restrictTo("admin"),
    supplierController.deleteSupplier
  );

module.exports = router;
