const mongoose = require("mongoose");
const validator = require("validator");

const logisticsPartnerSchema = new mongoose.Schema(
  {
    carrierNumber: {
      type: String,
      required: [true, "Please provide the name of a carrier"],
    },
    name: {
      type: String,
      required: [false, "Please provide the name of a carrier"],
    },
    description: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
    },
    type: {
      type: String,
      default: "individual",
      enum: ["corporate", "individual"],
    },
    logo: {
      type: String,
      required: [false, "Please provide the logo of this vendor"],
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

    contactPerson: {
      type: String,
    },
    contactPhoneNumber: {
      type: String,
    },
    contactPersonEmail: {
      type: String,
    },

    bankDetails: [
      {
        bankName: {
          type: String,
          required: [false, "Please provide your bank's name"],
        },
        bankAccountNumber: {
          type: String,
          required: [false, "Please provide your bank's account number"],
        },
        bankAccountType: {
          type: String,
          default: "current",
          enum: ["savings", "current", "domicilary"],
        },
        bankAccountName: {
          type: String,
          required: [false, "Please provide the bank's account name"],
        },
        country: [
          {
            type: mongoose.Schema.ObjectId,
            ref: "Country",
          },
        ],
        bankAccountSwiftCode: {
          type: String,
          required: [false, "Please provide the bank's swift code"],
        },
        bankAccountIBAN: {
          type: String,
          required: [false, "Please provide the bank's IBAN number"],
        },
      },
    ],
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
logisticsPartnerSchema.pre(/^find/, function (next) {
  this.populate({
    path: "city",
  });
  this.populate({
    path: "createdBy",
  });
  next();
});

const LogisticsPartner = mongoose.model(
  "LogisticsPartner",
  logisticsPartnerSchema
);
module.exports = LogisticsPartner;
