const express = require("express");

const targetContributionController = require("./../controllers/targetContributionsController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

router.use(authController.protect);

router
  .route("/")
  .get(targetContributionController.getAllTargetContributions)
  .post(
    //authController.restrictTo("admin"),

    targetContributionController.createTargetContribution
  );

router
  .route("/:id")
  .get(targetContributionController.getTargetContribution)
  .patch(targetContributionController.updateTargetContribution)
  .delete(
    //authController.restrictTo("admin","user"),
    targetContributionController.deleteTargetContribution
  );

module.exports = router;
