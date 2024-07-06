const express = require("express");

const sensitivityController = require("./../controllers/sensitivityController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect this route with both authentication and authorization middleware
// router.use(authController.protect);
// router.use(authController.restrictTo("admin"));

router
  .route("/")
  .get(sensitivityController.getAllSensitivities)
  .post(sensitivityController.createSensitivity);

router
  .route("/:id")
  .get(sensitivityController.getSensitivity)
  .patch(sensitivityController.updateSensitivity)
  .delete(sensitivityController.deleteSensitivity);

module.exports = router;
