const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const couponSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    coupon: {
      type: String,
    },

    rate: {
      type: Number,
    },
    startDate: {
      type: Date,
    },

    endDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["inactive", "active", "expired"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
