const mongoose = require("mongoose");

const delistmentSchema = new mongoose.Schema(
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

    location: [
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
    totalDelistmentCost: {
      type: Number,
    },
    reason: {
      type: String,
      default: "purchased",
      enum: [
        "purchased",
        "faulty",
        "expired",
        "damaged",
        "low-sale",
        "fake",
        "inferior-quality",
        "regulatory",
        "others",
      ],
    },
    remark: {
      type: String,
    },

    sku: {
      type: String,
    },
    barcode: {
      type: String,
    },

    addedBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    dateAdded: {
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
delistmentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "inventory",
  });
  this.populate({
    path: "location",
  });
  this.populate({
    path: "product",
  });
  next();
});

const Delistment = mongoose.model("Delistment", delistmentSchema);
module.exports = Delistment;
