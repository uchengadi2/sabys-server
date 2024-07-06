const mongoose = require("mongoose");

const remediationSchema = new mongoose.Schema(
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
    totalRemediationCost: {
      type: Number,
    },
    reason: {
      type: String,
      default: "faulty",
      enum: ["faulty", "about-to-expire", "damaged", "low-sale", "others"],
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
remediationSchema.pre(/^find/, function (next) {
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

const Remediation = mongoose.model("Remediation", remediationSchema);
module.exports = Remediation;
