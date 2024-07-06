const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [false, "Every product must have a name"],
    },
    shortDescription: {
      type: String,
      trim: true,
    },
    fullDescription: {
      type: String,
      trim: true,
    },

    // refNumber: {
    //   type: String,
    // },
    imageCover: {
      type: String,
      required: [false, "Please provide the image cover"],
    },

    images: [
      {
        type: String,
      },
    ],

    category: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
      },
    ],

    currency: {
      type: mongoose.Schema.ObjectId,
      ref: "Currency",
    },

    minimumQuantity: {
      type: Number,
    },
    unit: {
      type: String,
      default: "kg",
      enum: ["kg", "g", "ibs", "tonnes"],
    },

    keyword1: {
      type: String,
    },
    keyword2: {
      type: String,
    },
    keyword3: {
      type: String,
    },
    pricePerUnit: {
      type: Number,
    },
    priceLabel: {
      type: String,
    },
    weightPerUnit: {
      type: Number,
    },
    // unit: {
    //   type: String,
    // },

    createdAt: {
      type: Date,
      default: Date.now,
      //select: false,
    },
    createdBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],

    isFeaturedProduct: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },

    configuration: {
      type: String,
    },
    displayOnStore: {
      type: String,
      default: "yes",
      enum: ["yes", "no"],
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
    stockStatus: {
      type: String,
      default: "in-stock",
      enum: ["in-stock", "out-of-stock", "sold-out"],
    },

    countryOfOrigin: {
      type: String,
    },
    features: {
      type: String,
    },
    benefits: {
      type: String,
    },

    yearManufactured: {
      type: String,
    },
    brand: {
      type: String,
    },

    source: {
      type: String,
    },
    salesPreference: {
      type: String,
      default: "retail",
      enum: ["retail", "wholesale", "derica", "paint", "community", "deal"],
    },

    allowSubscription: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },

    slug: {
      type: String,
    },
    marketPricingCondition: {
      type: String,
    },

    pricingMechanism: {
      type: String,
      default: "pricing",
      enum: ["pricing", "request-quote", "bidding"],
    },

    isVatable: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },

    minimumDaysToEffectiveReview: {
      type: Number,
      default: 0,
    },
    hasVariant: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },

    sku: {
      type: String,
    },
    barcode: {
      type: String,
    },
    deliverability: {
      type: String,
    },
    pickupInfo: {
      type: String,
    },

    allowPriceFreezing: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    allowFreezedPriceLowBound: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    freezedPriceLowBound: {
      type: Number,
      default: 0,
    },
    chargesPerWeekOnFreezedPriceServiceWithoutPriceLowBound: {
      type: Number,
      default: 0,
    },
    chargesPerWeekOnFreezedPriceServiceWithPriceLowBound: {
      type: Number,
      default: 0,
    },
    freezedPriceMaximumDurationInWeeks: {
      type: Number,
      default: 0,
    },
    minimumFreezableQuantity: {
      type: Number,
    },
    datePriceWasSet: {
      type: Date,
    },
    requiredMaximumNumberOfCommunityMembers: {
      type: Number,
      default: 0,
    },
    communityTotalPurchaseableUnit: {
      type: Number,
      default: 0,
    },

    communityDeliveryPeriod: {
      type: String,
    },
    communityDeliveryType: {
      type: String,
      default: "same-location",
      enum: ["same-locatiion", "diverse-location", "hybrid"],
    },
    communityInstruction: {
      type: String,
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

    dealOwnerEntity: {
      type: mongoose.Schema.ObjectId,
      ref: "State",
    },

    dealOwner: {
      type: mongoose.Schema.ObjectId,
      ref: "Community",
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
      default: 0,
    },
    gatewayRateCharge: {
      type: Number,
      default: 0,
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
productSchema.pre(/^find/, function (next) {
  this.populate({
    path: "category",
  });

  next();
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
