const mongoose = require("mongoose");
const validator = require("validator");

const returnsSchema = new mongoose.Schema(
  {
    refNumber: {
      type: String,
      //required: true,
      //unique: true,
    },
    location: {
      type: mongoose.Schema.ObjectId,
      ref: "Location",
    },

    orderNumber: {
      type: String,
      //required: true,
    },
    transaction: {
      type: mongoose.Schema.ObjectId,
      ref: "Transaction",
    },

    dateOrdered: {
      type: Date,
    },

    dateReturned: {
      type: Date,
    },
    customerEmail: {
      type: String,
    },
    customerPhoneNumber: {
      type: String,
    },

    recipientName: {
      type: String,
    },
    recipientPhoneNumber: {
      type: String,
    },
    recipientAddress: {
      type: String,
    },
    destinationState: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },
    destinationCountry: {
      type: mongoose.Schema.ObjectId,
      ref: "Country",
    },

    customer: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      default: "out-of-inventory",
      enum: [
        "out-of-inventory",
        "return-to-inventory",
        "sent-for-delistment",
        "sent-to-remediation",
      ],
    },
    returnReason: {
      type: String,
      trim: true,
    },
    logisticsPartner: {
      type: mongoose.Schema.ObjectId,
      ref: "LogisticsPartner",
    },

    deliveryReturnedDate: {
      type: Date,
    },
    shopType: {
      type: String,
      default: "online",
      enum: ["online", "pos", "affiliate"],
    },
    deliveryMode: {
      type: String,
      default: "standard",
      enum: ["standard", "priority", "sameday"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
returnsSchema.pre(/^find/, function (next) {
  this.populate({
    path: "location",
  });
  this.populate({
    path: "logisticsPartner",
  });
  this.populate({
    path: "customer",
  });
  this.populate({
    path: "transaction",
  });
  this.populate({
    path: "destinationState",
  });
  this.populate({
    path: "destinationCountry",
  });

  next();
});

const Returns = mongoose.model("Returns", returnsSchema);

module.exports = Returns;
