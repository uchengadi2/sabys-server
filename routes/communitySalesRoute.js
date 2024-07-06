const express = require("express");

const CommunitySalesController = require("./../controllers/communitySalesController");
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

    CommunitySalesController.getAllCommunitySales
  )
  .post(CommunitySalesController.createCommunitySale);

//router.use(authController.protect);

router
  .route("/:id")
  .get(
    //authController.restrictTo("admin", "staff"),
    CommunitySalesController.getCommunitySale
  )
  .patch(
    //authController.restrictTo("admin", "staff"),
    // vendorController.uploadVendorLogo,
    // vendorController.resizeVendorLogo,
    CommunitySalesController.updateCommunitySale
  )
  .delete(
    //authController.restrictTo("admin"),
    CommunitySalesController.deleteCommunitySale
  );

module.exports = router;
