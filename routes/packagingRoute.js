const express = require("express");

const packagingController = require("./../controllers/packagingController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

// router.use(authController.protect);

// router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(packagingController.getAllPackagings)
  .post(packagingController.createPackaging);

router
  .route("/:id")
  .get(packagingController.getPackaging)
  .patch(packagingController.updatePackaging)
  .delete(packagingController.deletePackaging);

module.exports = router;
