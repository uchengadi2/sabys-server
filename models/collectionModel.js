const mongoose = require("mongoose");
const validator = require("validator");

const collectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [false, "Please provide the category name"],
    },
    description: {
      type: String,
      trim: true,
    },

    image: {
      type: String,
      required: [false, "Please provide the image cover"],
    },
    createdBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    slug: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObjects: { virtuals: true },
  }
);

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;
