const mongoose = require("mongoose");
const validator = require("validator");

const requestQuoteSchema = new mongoose.Schema(
  {
    quoteRequestNumber: {
      type: String,
    },
    customerName: {
      type: String,
    },

    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    sku: {
      type: String,
    },
    productName: {
      type: String,
    },
    quantityRequested: {
      type: Number,
    },
    minimumOrderQuantity: {
      type: Number,
    },
    whatsappNumber: {
      type: String,
    },
    customerEmail: {
      type: String,
    },

    deliveryPreference: {
      type: String,
      default: "pickup",
      enum: ["pickup", "deliver"],
    },
    country: {
      type: mongoose.Schema.ObjectId,
      ref: "Country",
    },
    state: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },
    city: {
      type: mongoose.Schema.ObjectId,
      ref: "City",
    },

    address: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "treated", "expired"],
    },
    timeToLiveInHours: {
      type: String,
    },
    addToWhatsappGroup: {
      type: Boolean,
      default: "no",
      enum: ["yes", "no"],
    },
    addToEmailList: {
      type: Boolean,
      default: "no",
      enum: ["yes", "no"],
    },

    dateRequested: {
      type: Date,
      default: Date.now,
    },
    comment: {
      type: String,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
requestQuoteSchema.pre(/^find/, function (next) {
  this.populate({
    path: "country",
  });
  this.populate({
    path: "state",
  });
  this.populate({
    path: "city",
  });
  this.populate({
    path: "product",
  });

  next();
});

const RequestQuote = mongoose.model("RequestQuote", requestQuoteSchema);

module.exports = RequestQuote;
