const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      required: true,
    },
    cartId: {
      type: mongoose.Schema.ObjectId,
      ref: "Cart",
    },
    transactionId: {
      type: mongoose.Schema.ObjectId,
      ref: "Transaction",
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
    },
    productCategory: {
      type: mongoose.Schema.ObjectId,
      ref: "Category",
    },
    productVendor: {
      type: mongoose.Schema.ObjectId,
      ref: "Vendor",
    },
    quantityAdddedToCart: {
      type: Number,
    },
    orderedQuantity: {
      type: Number,
    },
    orderedPrice: {
      type: Number,
    },
    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
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

    dateAddedToCart: {
      type: Date,
    },

    dateOrdered: {
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

    salesTax: {
      type: Number,
    },
    revenue: {
      type: Number,
    },
    vatRate: {
      type: Number,
    },
    vat: {
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
    isVatable: {
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
      enum: ["online", "onsite"],
    },

    stockAvailabilityStatus: {
      type: String,
      default: "not-processed",
      enum: ["not-processed", "in-stock", "out-of-stock", "incomplete-stock"],
    },
    availabilityComment: {
      type: String,
    },
    packagingReadinessStatus: {
      type: String,
      default: "pending",
      enum: ["pending", "ready", "not-ready"],
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
orderSchema.pre(/^find/, function (next) {
  this.populate({
    path: "product",
  });
  this.populate({
    path: "transactionId",
  });
  this.populate({
    path: "currency",
  });

  next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
