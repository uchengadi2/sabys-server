const mongoose = require("mongoose");
const validator = require("validator");

const freezePriceSchema = new mongoose.Schema(
  {
    freezePriceNumber: {
      type: String,
    },

    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    customer: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    sku: {
      type: String,
    },
    productName: {
      type: String,
    },
    customerName: {
      type: String,
    },
    freezedQuantity: {
      type: Number,
    },
    freezedPrice: {
      type: Number,
    },
    drawdownBalance: {
      type: Number,
    },

    expiryDate: {
      type: Date,
    },

    status: {
      type: String,
      default: "active",
      enum: ["active", "expired"],
    },
    freezeableMinimumQuantity: {
      type: Number,
    },

    dateRequested: {
      type: Date,
      default: Date.now,
    },
    hasLowerPriceBound: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    freezedPriceLowBound: {
      type: Number,
    },
    serviceCharge: {
      type: Number,
    },
    freezeDuration: {
      type: Number,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const FreezePrice = mongoose.model("FreezePrice", freezePriceSchema);

module.exports = FreezePrice;
