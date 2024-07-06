const mongoose = require("mongoose");
const validator = require("validator");

const onboardProductSchema = new mongoose.Schema(
  {
    product: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
    ],
    batchNumber: {
      type: String,
    },
    totalQuantity: {
      type: Number,
    },

    hasVariant: {
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

    location: [
      {
        location: {
          type: mongoose.Schema.ObjectId,
          ref: "Location",
        },

        quantity: { type: Number },
        unit: { type: String },
        totalProductCost: { type: Number },
        totalLogisticsCost: { type: Number },
        //costPerItem: { type: Number },
        variant: {
          size: { type: String | null },
          colour: { type: String | null },
          material: { type: String | null },
          style: { type: String | null },
        },
      },
    ],

    dateOnBoarded: {
      type: Date,
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    createdBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObjects: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
onboardProductSchema.pre(/^find/, function (next) {
  this.populate({
    path: "product",
  });
  this.populate({
    path: "location",
  });
  next();
});

const OnboardProduct = mongoose.model("OnboardProduct", onboardProductSchema);
module.exports = OnboardProduct;
