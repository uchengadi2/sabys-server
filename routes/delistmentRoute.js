const express = require("express");

const delistmentController = require("./../controllers/delistmentController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

// router.use(authController.protect);

// router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(delistmentController.getAllDelistments)
  .post(delistmentController.createDelistment);

router
  .route("/:id")
  .get(delistmentController.getDelistment)
  .patch(delistmentController.updateDelistment)
  .delete(delistmentController.deleteDelistment);

module.exports = router;
