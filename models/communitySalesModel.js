const mongoose = require("mongoose");
const validator = require("validator");

const communitySalesSchema = new mongoose.Schema(
  {
    communityCode: {
      type: String,
    },

    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },

    sku: {
      type: String,
    },
    productName: {
      type: String,
    },
    requiredMaximumNumberOfCommunityMembers: {
      type: Number,
    },
    communityTotalPurchaseableUnit: {
      type: Number,
    },
    communityPricePerUnit: {
      type: Number,
    },
    communityDeliveryPeriod: {
      type: String,
    },
    communityDeliveryType: {
      type: String,
      default: "same-location",
      enum: ["same-locatiion", "diverse-location", "hybrid"],
    },
    communityInstruction: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const CommunitySales = mongoose.model("CommunitySales", communitySalesSchema);

module.exports = CommunitySales;
