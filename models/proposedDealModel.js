const mongoose = require("mongoose");
const validator = require("validator");

const proposedDealSchema = new mongoose.Schema(
  {
    proposedDealCode: {
      type: String,
    },

    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    productSku: {
      type: String,
    },
    productName: {
      type: String,
    },
    productMinimumOrderQuantity: {
      type: Number,
    },
    productSalesPreference: {
      type: String,
    },
    productConfiguration: {
      type: String,
    },
    productPriceLabel: {
      type: String,
    },
    productPricePerUnit: {
      type: Number,
    },
    productWeightPerUnit: {
      type: String,
    },
    productUnit: {
      type: String,
    },
    proposedQuantity: {
      type: Number,
    },
    proposedPricePerUnit: {
      type: Number,
    },

    customerName: {
      type: String,
    },
    customerPhoneNumber: {
      type: String,
    },
    customerEmailAddress: {
      type: String,
    },

    proposedDeliveryPreference: {
      type: String,
      default: "pickup",
      enum: ["pickup", "deliver"],
    },

    status: {
      type: String,
      default: "pending",
      enum: ["pending", "treated", "expired"],
    },

    dateProposed: {
      type: Date,
      default: Date.now,
    },
    proposedDayToDelivery: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
proposedDealSchema.pre(/^find/, function (next) {
  this.populate({
    path: "product",
  });

  next();
});

const ProposedDeal = mongoose.model("ProposedDeal", proposedDealSchema);

module.exports = ProposedDeal;
