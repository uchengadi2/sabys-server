const express = require("express");

const returnsController = require("./../controllers/returnsController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

// router.use(authController.protect);

// router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(returnsController.getAllReturns)
  .post(returnsController.createReturn);

router
  .route("/:id")
  .get(returnsController.getReturn)
  .patch(returnsController.updateReturn)
  .delete(returnsController.deleteReturn);

module.exports = router;
