const mongoose = require("mongoose");

const transferSchema = new mongoose.Schema(
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
    inventory: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Inventory",
      },
    ],

    source: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Location",
      },
    ],
    destination: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Location",
      },
    ],

    quantity: {
      type: Number,
    },
    unit: {
      type: String,
    },
    totalProductCost: {
      type: Number,
    },
    totalTrasferCost: {
      type: Number,
    },
    sku: {
      type: String,
    },
    barcode: {
      type: String,
    },

    transferredBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    dateTransferred: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
transferSchema.pre(/^find/, function (next) {
  this.populate({
    path: "inventory",
  });
  this.populate({
    path: "destination",
  });
  this.populate({
    path: "source",
  });
  this.populate({
    path: "product",
  });
  next();
});

const Transfer = mongoose.model("Transfer", transferSchema);
module.exports = Transfer;
