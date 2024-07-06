const mongoose = require("mongoose");
const validator = require("validator");

const affiliateSchema = new mongoose.Schema(
  {
    affiliateNumber: {
      type: String,
      required: [true, "Please provide the name of a affiliate"],
    },

    name: {
      type: String,
      required: [false, "Please provide the name of a affiliate"],
    },
    description: {
      type: String,
      trim: true,
    },
    affiliateType: {
      type: String,
      default: "local",
      enum: ["local", "foreign"],
    },

    address: {
      type: String,
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

    contactPerson: {
      type: String,
    },
    contactPhoneNumbers: {
      type: String,
    },
    contactPersonEmail: {
      type: String,
    },
    natureOfBusiness: {
      type: String,
    },
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
affiliateSchema.pre(/^find/, function (next) {
  this.populate({
    path: "state",
  });
  //   this.populate({
  //     path: "product",
  //   });

  next();
});

const Affiliate = mongoose.model("Affiliate", affiliateSchema);
module.exports = Affiliate;
