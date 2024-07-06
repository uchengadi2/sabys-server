const mongoose = require("mongoose");
const validator = require("validator");

const cartSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },

    quantity: {
      type: Number,
    },
    minQuantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    currency: {
      type: String,
    },
    refNumber: {
      type: String,
    },
    cartHolder: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    dateAddedToCart: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      default: "unmarked-for-checkout",
      enum: [
        "unmarked-for-checkout",
        "marked-for-checkout",
        "checkedout",
        "contibutory",
      ],
    },
    preferredStartDate: {
      type: Date,
    },

    weightInKg: {
      type: Number,
    },
    weightPerUnit: {
      type: Number,
    },
    unit: {
      type: String,
      default: "kg",
      enum: ["kg", "g", "ibs", "tonnes"],
    },
    isVatable: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    revenueMargin: {
      type: Number,
    },
    revenueMarginShouldPrevail: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },

    payOnDeliveryMaxWeightInKg: {
      type: Number,
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
    showDealPricePerUnit: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    allowDealQuantityChange: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    dealStatus: {
      type: String,
      default: "inactive",
      enum: ["inactive", "active"],
    },
    dealComment: {
      type: String,
      default: null,
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

    dealDecentralizedDeliveryLocation: [
      {
        type: String,
        default: null,
      },
    ],

    dealDecentralizedAgreedDeliveryCost: {
      type: Number,
      default: 0,
    },
    showDealDeliveryCost: {
      type: Boolean,
      default: false,
      enum: [false, true],
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
    showDealPaymentDetails: {
      type: Boolean,
      default: false,
      enum: [false, true],
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
  },

  {
    toJSON: { virtuals: true },
    toObjects: { virtuals: true },
  }
);

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
