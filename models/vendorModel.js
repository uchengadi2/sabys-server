const mongoose = require("mongoose");
const validator = require("validator");

const vendorSchema = new mongoose.Schema(
  {
    vendorNumber: {
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
    type: {
      type: String,
      default: "local",
      enum: ["local", "abroad"],
    },
    logo: {
      type: String,
      required: [false, "Please provide the logo of this vendor"],
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

    contactPerson: {
      type: String,
    },
    contactPhoneNumber: {
      type: String,
    },
    contactPersonEmail: {
      type: String,
    },

    bankDetails: {
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
      bankCountry: [
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
    product: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
    ],
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
vendorSchema.pre(/^find/, function (next) {
  this.populate({
    path: "country",
  });
  this.populate({
    path: "product",
  });

  next();
});

const Vendor = mongoose.model("Vendor", vendorSchema);
module.exports = Vendor;
