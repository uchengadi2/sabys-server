const express = require("express");

const ProposedDealController = require("./../controllers/proposedDealController");
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

    ProposedDealController.getAllProposedDeals
  )
  .post(ProposedDealController.createProposedDeal);

//router.use(authController.protect);

router
  .route("/:id")
  .get(
    //authController.restrictTo("admin", "staff"),
    ProposedDealController.getProposedDeal
  )
  .patch(
    //authController.restrictTo("admin", "staff"),
    // vendorController.uploadVendorLogo,
    // vendorController.resizeVendorLogo,
    ProposedDealController.updateProposedDeal
  )
  .delete(
    //authController.restrictTo("admin"),
    ProposedDealController.deleteProposedDeal
  );

module.exports = router;
