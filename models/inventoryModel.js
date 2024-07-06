const mongoose = require("mongoose");
const validator = require("validator");

const inventorySchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },

    location: {
      type: mongoose.Schema.ObjectId,
      ref: "Location",
    },

    batchNumber: {
      type: String,
    },
    supplier: {
      type: mongoose.Schema.ObjectId,
      ref: "Supplier",
    },
    quantity: {
      type: Number,
    },
    remainingQuantity: {
      type: Number,
    },
    unit: {
      type: String,
    },
    currentProductPricePerUnit: {
      type: Number,
    },

    thisPriceLabel: {
      type: String,
    },

    sku: {
      type: String,
    },
    barcode: {
      type: String,
    },
    slug: {
      type: String,
    },
    configuration: {
      type: String,
    },
    costPerUnit: {
      type: Number,
    },

    source: {
      type: mongoose.Schema.ObjectId,
      ref: "Location",
    },

    weightPerUnit: {
      type: Number,
    },

    dateWhenFirstItemWasOffBoarded: {
      type: Date,
    },
    dateWhenLastItemWasOffBoarded: {
      type: Date,
    },
    dateOnBoarded: {
      type: Date,
      default: Date.now,
    },
    onBoardedBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    batchStatus: {
      type: String,
      default: "in-stock",
      enum: ["empty", "in-stock"],
    },
    comment: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObjects: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
inventorySchema.pre(/^find/, function (next) {
  this.populate({
    path: "location",
  });

  this.populate({
    path: "product",
  });
  this.populate({
    path: "supplier",
  });
  this.populate({
    path: "source",
  });

  next();
});

const Inventory = mongoose.model("Inventory", inventorySchema);
module.exports = Inventory;
