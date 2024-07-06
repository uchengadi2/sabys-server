const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const CookieParser = require("cookie-parser");
const compression = require("compression");
const bodyParser = require("body-parser");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoute");
const categoryRouter = require("./routes/categoryRoute");
const productRouter = require("./routes/productRoute");
const cityRouter = require("./routes/cityRoute");
const vendorRouter = require("./routes/vendorRoute");
const orderRouter = require("./routes/orderRoute");
const policyRouter = require("./routes/policyRoute");
const paymentRouter = require("./routes/paymentRoute");
const countryRouter = require("./routes/countryRoute");
const stateRouter = require("./routes/stateRoute");
const currencyRouter = require("./routes/currencyRoute");
const clusterRouter = require("./routes/clusterRoute");
const remittanceRouter = require("./routes/remittanceRoute");
const holidayRouter = require("./routes/holidayRoute");
const exchangerateRouter = require("./routes/exchangerateRoute");
const orderAssignmentRouter = require("./routes/orderAssignmentRoute");
const orderDeliveryRouter = require("./routes/orderDeliveryRoute");
const orderOnTransitRouter = require("./routes/orderOnTransitRoute");
const orderOnCompletionRouter = require("./routes/orderOnCompletionRoute");
const cartRoute = require("./routes/cartRoute");
const rateRoute = require("./routes/rateRoute");
const relatedProductRoute = require("./routes/relatedProductRoute");
const productsOnSaleRoute = require("./routes/productsOnSaleRoute");
const deliveryRoute = require("./routes/deliveryRoute");
const transactionRoute = require("./routes/transactionRoute");
const courseRoute = require("./routes/courseRoute");
const channelRoute = require("./routes/channelRoute");
const programmeRoute = require("./routes/programmeRoute");
const locationRoute = require("./routes/locationRoute");
const supplierRoute = require("./routes/supplierRoute");
const affiliateRoute = require("./routes/affiliateRoute");
const onboardProductRoute = require("./routes/onboardProductRoute");
const inventoryRoute = require("./routes/inventoryRoute");
const transferRoute = require("./routes/transferRoute");
const remediationRoute = require("./routes/remediationRoute");
const delistmentRoute = require("./routes/delistmentRoute");
const returnsRoute = require("./routes/returnsRoute");
const productVariantRoute = require("./routes/productVariantRoute");
const sensitivityRoute = require("./routes/sensitivityRoute");
const couponRoute = require("./routes/couponRoute");
const carrierRoute = require("./routes/carrierRoute");
const quoteRoute = require("./routes/requestQuoteRoute");
const freezePriceRoute = require("./routes/freezePriceRoute");
const rejectsRoute = require("./routes/rejectsRoute");
const packagingRoute = require("./routes/packagingRoute");
const communitySalesRoute = require("./routes/communitySalesRoute");
const proposedDealRoute = require("./routes/proposedDealRoute");
const communityRoute = require("./routes/communityRoute");
const targetSchemeRoute = require("./routes/targetSchemeRoute");
const targetContributionRoute = require("./routes/targetContributionsRoute");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Cross Origin middleware
app.use(cors());
//app.use(cors({ origin: true, credentials: true }));

//GLOBAL MIDDLEWARES

//SET SECURITY HTTP HEADERS
app.use(helmet());

//DEVELOPMENT LOGIN;
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  max: 15000,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP, Please try again in an hour",
});

//LIMIT REQUEST FROM SAME DOMAIN
app.use("/api", limiter);

//ABOUT THE BODY PARSER. READING DATA INTO req.body

app.use(express.json({ limit: "10kb" })); //This is a middleware
app.use(CookieParser());

//DATA SANITIZATION AGAINST NOSQL QUERY INJECTION
app.use(mongoSanitize());

//DATA SANITIZATION AGAINST XSS
app.use(xss());

//PREVENT PARAMETER POLLUTION
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsAverage",
      "ratingsAverage",
      "macGroupSize",
      "difficulty",
      "price",
    ],
  })
);

//SERVING STATIC FILES
app.use(express.static(`${__dirname}/public`)); // accessing static files

app.use(compression());

//Test Middlwware
app.use((req, res, next) => {
  //define  property on the request object
  req.requestTime = new Date().toISOString();
  // console.log(req.cookies);
  next();
});

//ROUTES

app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/cities", cityRouter);
app.use("/api/v1/vendors", vendorRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/policies", policyRouter);
app.use("/api/v1/payments", paymentRouter);
app.use("/api/v1/countries", countryRouter);
app.use("/api/v1/states", stateRouter);
app.use("/api/v1/currencies", currencyRouter);
app.use("/api/v1/clusters", clusterRouter);
app.use("/api/v1/remittances", remittanceRouter);
app.use("/api/v1/holidays", holidayRouter);
app.use("/api/v1/exchangerates", exchangerateRouter);
app.use("/api/v1/orderassignments", orderAssignmentRouter);
app.use("/api/v1/orderdeliveries", orderDeliveryRouter);
app.use("/api/v1/orderontransits", orderOnTransitRouter);
app.use("/api/v1/orderoncompletions", orderOnCompletionRouter);
app.use("/api/v1/carts", cartRoute);
app.use("/api/v1/rates", rateRoute);
app.use("/api/v1/relatedproducts", relatedProductRoute);
app.use("/api/v1/productsonsale", productsOnSaleRoute);
app.use("/api/v1/deliveries", deliveryRoute);
app.use("/api/v1/transactions", transactionRoute);
app.use("/api/v1/courses", courseRoute);
app.use("/api/v1/channels", channelRoute);
app.use("/api/v1/programmes", programmeRoute);
app.use("/api/v1/locations", locationRoute);
app.use("/api/v1/suppliers", supplierRoute);
app.use("/api/v1/affiliates", affiliateRoute);
app.use("/api/v1/onboards", onboardProductRoute);
app.use("/api/v1/inventories", inventoryRoute);
app.use("/api/v1/transfers", transferRoute);
app.use("/api/v1/remediations", remediationRoute);
app.use("/api/v1/delistments", delistmentRoute);
app.use("/api/v1/returns", returnsRoute);
app.use("/api/v1/variants", productVariantRoute);
app.use("/api/v1/sensitivities", sensitivityRoute);
app.use("/api/v1/coupons", couponRoute);
app.use("/api/v1/carriers", carrierRoute);
app.use("/api/v1/quotes", quoteRoute);
app.use("/api/v1/freezes", freezePriceRoute);
app.use("/api/v1/rejects", rejectsRoute);
app.use("/api/v1/packagings", packagingRoute);
app.use("/api/v1/communitySales", communitySalesRoute);
app.use("/api/v1/deals", proposedDealRoute);
app.use("/api/v1/communities", communityRoute);
app.use("/api/v1/targets", targetSchemeRoute);
app.use("/api/v1/contributions", targetContributionRoute);

//tackling unhandled routes
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);
//SERVER

module.exports = app;
