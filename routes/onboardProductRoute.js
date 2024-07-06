const express = require("express");

const onBoardProductController = require("./../controllers/onboardProductController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

// router.use(authController.protect);

// router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(onBoardProductController.getAllOnBoardedProducts)
  .post(onBoardProductController.createOnBoardedProduct);

router
  .route("/:id")
  .get(onBoardProductController.getOnBoardedProduct)
  .patch(onBoardProductController.updateOnBoardedProduct)
  .delete(onBoardProductController.deleteOnBoardedProduct);

module.exports = router;
