const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const productVariantSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    sku: {
      type: String,
    },
    barcode: {
      type: String,
    },

    minimumQuantity: {
      type: Number,
    },
    unit: {
      type: String,
    },
    displayOnHome: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    hasSizeVariant: { type: Boolean, default: false, enum: [false, true] },
    hasColourVariant: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    hasMaterialVariant: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    hasStyleVariant: { type: Boolean, default: false, enum: [false, true] },

    size: {
      type: String,
    },
    color: {
      type: String,
    },
    material: {
      type: String,
    },
    style: {
      type: String,
    },
    weightInKg: {
      type: Number,
    },
    imageCover: {
      type: String,
    },
    totalUnits: {
      type: Number,
      default: 0,

      required: [false, "A product must have quanyity"],
    },
    remainingUnits: {
      type: Number,
      default: 0,

      required: [false, "A product must have quanyity"],
    },

    images: [
      {
        type: String,
      },
    ],
    previousDayPricePerUnit: {
      type: Number,
    },
    currentPricePerUnit: {
      type: Number,
    },
    costPerUnit: {
      type: Number,
    },
    priceSensitivity: {
      type: String,
      enum: ["normal", "volatile"],
    },
    vendor: {
      type: mongoose.Schema.ObjectId,
      ref: "Vendor",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
productVariantSchema.pre(/^find/, function (next) {
  this.populate({
    path: "product",
  });
  next();
});

const ProductVariant = mongoose.model("ProductVariant", productVariantSchema);

module.exports = ProductVariant;
