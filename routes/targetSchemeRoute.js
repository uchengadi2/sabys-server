const express = require("express");

const targetSchemeController = require("./../controllers/targetSchemeController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

router.use(authController.protect);

router.route("/").get(targetSchemeController.getAllTargetSchemes).post(
  //authController.restrictTo("admin"),

  targetSchemeController.createTargetScheme
);

router
  .route("/:id")
  .get(targetSchemeController.getTargetScheme)
  .patch(targetSchemeController.updateTargetScheme)
  .delete(
    //authController.restrictTo("admin","user"),
    targetSchemeController.deleteTargetScheme
  );

module.exports = router;
