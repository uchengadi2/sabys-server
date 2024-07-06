const mongoose = require("mongoose");
const validator = require("validator");

const targetContributionSchema = new mongoose.Schema(
  {
    refNumber: {
      type: String,
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    target: {
      type: mongoose.Schema.ObjectId,
      ref: "TargetScheme",
    },

    contributedAmount: {
      type: Number,
      default: 0,
    },

    currency: {
      type: String,
    },

    targetHolder: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    dealCode: {
      type: String,
      default: null,
    },
    dealExpiryDate: {
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

    productType: {
      type: String,
      default: "single-product",
      enum: [
        "single-product",
        "multiple-but-same-product",
        "multiple-but-different-products",
      ],
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

    dealOwner: {
      type: mongoose.Schema.ObjectId,
      ref: "Community",
    },
    dealOwnerEntity: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },
    paymentStatus: {
      type: String,
      default: "unconfirmed",
      enum: ["unconfirmed", "confirmed", "rejected", "source-from-third-party"],
    },
    modeOfPayment: {
      type: String,
      default: "online",
      enum: ["online", "pos", "transfer", "cash", "to-be-determined"],
    },

    dateOfContribution: {
      type: Date,
      default: Date.now,
    },
    postedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },

    installementRound: {
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
    toObjects: { virtuals: true },
  }
);

const TargetContribution = mongoose.model(
  "TargetContribution",
  targetContributionSchema
);
module.exports = TargetContribution;
