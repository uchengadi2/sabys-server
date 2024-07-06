const express = require("express");

const transferController = require("./../controllers/transferController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

// router.use(authController.protect);

// router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(transferController.getAllTransfers)
  .post(transferController.createTransfer);

router
  .route("/:id")
  .get(transferController.getTransfer)
  .patch(transferController.updateTransfer)
  .delete(transferController.deleteTransfer);

module.exports = router;
