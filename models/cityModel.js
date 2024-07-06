const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the name of the city"],
    },
    code: {
      type: String,
      required: [false],
    },
    description: {
      type: String,
      trim: true,
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

    createdBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    dateCreated: {
      type: Date,
      default: Date.now,
    },

    baseDeliveryWeight: {
      type: Number,
    },
    daysToStandardDelivery: {
      type: String,
    },
    daysToPriorityDelivery: {
      type: String,
    },
    daysToSameDayDelivery: {
      type: String,
    },

    baseDeliveryStandardRate: {
      type: Number,
    },
    baseDeliveryPriorityRate: {
      type: Number,
    },
    baseDeliverySameDayRate: {
      type: Number,
    },
    extraKgDeliveryStandardRate: {
      type: Number,
    },
    extraKgDeliveryPriorityRate: {
      type: Number,
    },
    extraKgDeliverySameDayRate: {
      type: Number,
    },
    allowPayOnDelivery: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    payOnDeliveryMaxWeightInKg: {
      type: Number,
    },

    allowSameDayDelivery: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    allowStandardDelivery: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    allowPriorityDelivery: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    allowPickUpDelivery: {
      type: Boolean,
      default: false,
      enum: [false, true],
    },
    placeType: {
      type: String,
      default: "conventional",
      enum: ["conventional", "organizational"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//QUERY MIDDLEWARE
citySchema.pre(/^find/, function (next) {
  this.populate({
    path: "country",
  });
  this.populate({
    path: "state",
  });
  next();
});

const City = mongoose.model("City", citySchema);
module.exports = City;
