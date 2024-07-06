const Coupon = require("./../models/couponModel");
const factory = require("./handlerFactory");

//get the handler to get all Coupons
exports.getAllCoupons = factory.getAll(Coupon);

//the handler to create Coupon
exports.createCoupon = factory.createOne(Coupon);

//the handler to get one Coupon
exports.getCoupon = factory.getOne(Coupon);

//the handler to update a Coupon
exports.updateCoupon = factory.updateOne(Coupon);

//the handler to delete one Coupon
exports.deleteCoupon = factory.deleteOne(Coupon);
