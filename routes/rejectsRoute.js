const express = require("express");

const rejectsController = require("./../controllers/rejectsController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

// router.use(authController.protect);

// router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(rejectsController.getAllRejects)
  .post(rejectsController.createReject);

router
  .route("/:id")
  .get(rejectsController.getReject)
  .patch(rejectsController.updateReject)
  .delete(rejectsController.deleteReject);

module.exports = router;
