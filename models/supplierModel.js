const mongoose = require("mongoose");
const validator = require("validator");

const supplierSchema = new mongoose.Schema(
  {
    supplierNumber: {
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
    supplierType: {
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
    products: {
      type: String,
    },
    bankDetails: {
      type: String,
    },

    // bankDetails: [
    //   {
    //     bankName: {
    //       type: String,
    //       required: [false, "Please provide your bank's name"],
    //     },
    //     bankAccountNumber: {
    //       type: String,
    //       required: [false, "Please provide your bank's account number"],
    //     },
    //     bankAccountType: {
    //       type: String,
    //       default: "current",
    //       enum: ["savings", "current", "domicilary"],
    //     },
    //     bankAccountName: {
    //       type: String,
    //       required: [false, "Please provide the bank's account name"],
    //     },
    //     country: [
    //       {
    //         type: mongoose.Schema.ObjectId,
    //         ref: "Country",
    //       },
    //     ],
    //     bankAccountSwiftCode: {
    //       type: String,
    //       required: [false, "Please provide the bank's swift code"],
    //     },
    //     bankAccountIBAN: {
    //       type: String,
    //       required: [false, "Please provide the bank's IBAN number"],
    //     },
    //   },
    // ],
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
supplierSchema.pre(/^find/, function (next) {
  this.populate({
    path: "country",
  });
  this.populate({
    path: "product",
  });

  next();
});

const Supplier = mongoose.model("Supplier", supplierSchema);
module.exports = Supplier;
