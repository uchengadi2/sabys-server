const mongoose = require("mongoose");
const validator = require("validator");

const transactionSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      required: true,
    },

    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },

    totalDeliveryCost: {
      type: Number,
    },
    totalProductCost: {
      type: Number,
    },

    transactionDate: {
      type: Date,
      default: Date.now,
    },
    orderedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    paymentStatus: {
      type: String,
      default: "not-processed",
      enum: [
        "not-processed",
        "collect-payment-on-delivery",
        "paid",
        "to-be-confirmed",
      ],
    },
    paymentMethod: {
      type: String,
      default: "card",
      enum: [
        "card",
        "payOnDelivery",
        "cash",
        "bank-transfer",
        "on-credit",
        "pos",
        "wallet",
        "ussd",
      ],
    },
    status: {
      type: String,
      default: "unprocessed",
      enum: [
        "unprocessed",
        "ready-for-delivery",
        "rejected",
        "assigned-for-delivery",
        "returned",
        "fullfilled",
      ],
    },
    rejectionReason: {
      type: String,
      trim: true,
    },
    customerName: {
      type: String,
    },
    customerPhoneNumber: {
      type: String,
    },
    customerEmailAddress: {
      type: String,
    },
    customerEmailAddress: {
      type: String,
    },
    recipientName: {
      type: String,
    },

    recipientPhoneNumber: {
      type: String,
    },
    recipientEmailAddress: {
      type: String,
    },
    recipientAddress: {
      type: String,
    },
    nearestBusstop: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    recipientCountry: {
      type: mongoose.Schema.ObjectId,
      ref: "Country",
    },
    recipientState: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },
    recipientCity: {
      type: mongoose.Schema.ObjectId,
      ref: "City",
    },

    vatRate: {
      type: Number,
    },
    vat: {
      type: Number,
    },
    totalWeight: {
      type: Number,
    },
    payOnDeliveryMaxWeightInKg: {
      type: Number,
    },
    implementVatCollection: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    salesTax: {
      type: Number,
    },
    revenue: {
      type: Number,
    },
    origin: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },
    allowOriginSalesTax: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    implementSalesTaxCollection: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    deliveryStatus: {
      type: String,
      default: "pending",
      enum: ["pending", "ready-for-delivery", "ready-for-picked-up"],
    },
    deliveryMode: {
      type: String,
      default: "standard",
      enum: ["standard", "priority", "sameday", "pickup"],
    },
    daysToDelivery: {
      type: String,
    },
    recipientCountryName: {
      type: String,
    },
    recipientStateName: {
      type: String,
    },
    recipientCityName: {
      type: String,
    },
    shopType: {
      type: String,
      default: "online",
      enum: ["online", "pos", "affiliate"],
    },

    reasonForRejection: {
      type: String,
    },

    dateRejected: {
      type: Date,
      default: Date.now,
    },
    rejectedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    dealCode: {
      type: String,
      default: null,
    },

    dealType: {
      type: String,
      default: "public",
      enum: ["public", "private"],
    },

    dealStatus: {
      type: String,
      default: "inactive",
      enum: ["inactive", "active"],
    },

    dealDeliveryMode: {
      type: String,
      default: "centralized-at-no-cost",
      enum: [
        "centralized-at-no-cost",
        "centralized-at-agreed-cost",
        "decentralized-at-no-cost",
        "decentralized-at-agreed-cost",
        "managed-by-each-beneficiary",
      ],
    },
    dealCentralizedDeliveryLocation: {
      type: String,
      default: null,
    },
    dealCentralizedAgreedDeliveryCost: {
      type: Number,
      default: 0,
    },
    dealDecentralizedDeliveryLocation: {
      type: String,
      default: null,
    },
    dealDecentralizedAgreedDeliveryCost: {
      type: Number,
      default: 0,
    },
    showDealDeliveryCost: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },

    salesPreference: {
      type: String,
      default: "retail",
      enum: ["retail", "wholesale", "derica", "paint", "community", "deal"],
    },
    dealPaymentPreference: {
      type: String,
      default: "each-beneficiary-make-own-payment",
      enum: [
        "each-beneficiary-make-own-payment",
        "beneficiaries-make-collective-payment",
        "payment-settled-by-an-entity",
        "no-payment-is-required",
      ],
    },
    showDealPaymentDetails: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },

    dealRedemptionCode: {
      type: String,
    },
    requestDealRedemptionCode: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    isAContributoryDeal: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    dealOwner: {
      type: mongoose.Schema.ObjectId,
      ref: "Community",
    },
    dealOwnerEntity: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },
    dealInitialPercentageContribution: {
      type: Number,
      default: 0,
    },
    dealMaximumInstallmentAllowed: {
      type: Number,
      default: 1,
    },
    includeGatewayChargesInPrice: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    gatewayFixedCharge: {
      type: Number,
    },
    gatewayRateCharge: {
      type: Number,
    },
    isACreditDeal: {
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
transactionSchema.pre(/^find/, function (next) {
  this.populate({
    path: "currency",
  });
  this.populate({
    path: "orderedBy",
  });
  this.populate({
    path: "recipientCountry",
  });
  this.populate({
    path: "recipientState",
  });
  this.populate({
    path: "recipientCity",
  });
  this.populate({
    path: "origin",
  });

  next();
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
