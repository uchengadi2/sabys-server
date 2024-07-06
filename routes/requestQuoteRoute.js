const express = require("express");

const QuoteController = require("./../controllers/requestQuoteController");
const authController = require("./../controllers/authController");

const router = express.Router();

//provide protection with the protect middleware
//router.use(authController.protect);

//ensure appropriate authorization
//router.use(authController.restrictTo());

router
  .route("/")
  .get(
    //authController.protect,

    QuoteController.getAllQuotes
  )
  .post(QuoteController.createQuote);

//router.use(authController.protect);

router
  .route("/:id")
  .get(
    //authController.restrictTo("admin", "staff"),
    QuoteController.getQuote
  )
  .patch(
    //authController.restrictTo("admin", "staff"),
    // vendorController.uploadVendorLogo,
    // vendorController.resizeVendorLogo,
    QuoteController.updateQuote
  )
  .delete(
    //authController.restrictTo("admin"),
    QuoteController.deleteQuote
  );

module.exports = router;
