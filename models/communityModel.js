const mongoose = require("mongoose");
const validator = require("validator");

const communitySchema = new mongoose.Schema(
  {
    communityCode: {
      type: String,
      required: [true, "Please provide the name of a vendor"],
    },
    name: {
      type: String,
      required: [false, "Please provide the name of a vendor"],
    },
    description: {
      type: String,
      trim: true,
    },
    communityType: {
      type: String,
      default: "enterprise",
      enum: ["enterprise", "non-enterprise"],
    },

    address: {
      type: String,
    },
    country: {
      type: mongoose.Schema.ObjectId,
      ref: "Country",
    },

    state: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },

    contactPerson: {
      type: String,
    },
    contactPhoneNumber: {
      type: String,
    },
    contactPersonEmail: {
      type: String,
    },
    allowCreditDeal: {
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
communitySchema.pre(/^find/, function (next) {
  this.populate({
    path: "country",
  });
  this.populate({
    path: "state",
  });

  next();
});

const Community = mongoose.model("Community", communitySchema);
module.exports = Community;
