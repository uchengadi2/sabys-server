const mongoose = require("mongoose");
const validator = require("validator");

const sensitivitySchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "ProductVariant",
    },

    pricePerUnit: {
      type: Number,
    },
    unit: {
      type: String,
    },
    dateEntered: {
      type: Date,
      default: Date.now,
    },
    timeEntered: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Sensitivity = mongoose.model("Sensitivity", sensitivitySchema);

module.exports = Sensitivity;
