const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the name of the state"],
    },
    code: {
      type: String,
      required: [false, "Please provide the state code"],
    },
    description: {
      type: String,
      trim: true,
    },
    locationType: {
      type: String,
      default: "own-shop",
      enum: [
        "own-shop",
        "own-warehouse",
        "affiliate-shop",
        "affiliate-warehouse",
      ],
    },

    country: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Country",
      },
    ],
    state: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "State",
      },
    ],
    city: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "City",
      },
    ],
    address: {
      type: String,
    },
    town: {
      type: String,
    },

    contactPerson: {
      type: String,
    },
    contactPersonEmail: {
      type: String,
    },
    contactPhoneNumber: {
      type: String,
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
    allowAffiliateSale: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
locationSchema.pre(/^find/, function (next) {
  //   this.populate({
  //     path: "country",
  //   });
  //   this.populate({
  //     path: "state",
  //   });
  this.populate({
    path: "city",
  });
  this.populate({
    path: "createdBy",
  });
  next();
});

const Location = mongoose.model("Location", locationSchema);
module.exports = Location;
