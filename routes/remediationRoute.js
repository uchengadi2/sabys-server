const express = require("express");

const remediationController = require("./../controllers/remediationController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

// router.use(authController.protect);

// router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(remediationController.getAllRemediations)
  .post(remediationController.createRemediation);

router
  .route("/:id")
  .get(remediationController.getRemediation)
  .patch(remediationController.updateRemediation)
  .delete(remediationController.deleteRemediation);

module.exports = router;
