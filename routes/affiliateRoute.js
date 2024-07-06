const express = require("express");

const affiliateController = require("./../controllers/affiliateController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

// router.use(authController.protect);

// router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(affiliateController.getAllAffiliates)
  .post(affiliateController.createAffiliate);

router
  .route("/:id")
  .get(affiliateController.getAffiliate)
  .patch(affiliateController.updateAffiliate)
  .delete(affiliateController.deleteAffiliate);

module.exports = router;
