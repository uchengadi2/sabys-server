const express = require("express");

const couponController = require("./../controllers/couponController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect this route with both authentication and authorization middleware
// router.use(authController.protect);
// router.use(authController.restrictTo("admin"));

router
  .route("/")
  .get(couponController.getAllCoupons)
  .post(couponController.createCoupon);

router
  .route("/:id")
  .get(couponController.getCoupon)
  .patch(couponController.updateCoupon)
  .delete(couponController.deleteCoupon);

module.exports = router;
