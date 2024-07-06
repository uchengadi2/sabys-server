const mongoose = require("mongoose");

const policySchema = new mongoose.Schema(
  {
    country: {
      type: mongoose.Schema.ObjectId,
      ref: "Country",
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },

    vat: {
      type: Number,
    },
    implementVatCollection: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },

    status: {
      type: String,
      default: "inactive",
      enum: ["inactive", "active"],
    },
    // onlineShoppingLocation: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "Location",
    // },

    allowCentralCommission: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    commissionRate: {
      type: Number,
    },
    allowOriginSalesTax: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    implementSalesTaxCollection: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Policy = mongoose.model("Policy", policySchema);

module.exports = Policy;
