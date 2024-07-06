const multer = require("multer");
const sharp = require("sharp");
const Carrier = require("./../models/carrierModel");
const APIFeatures = require("./../utils/apiFeatures");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

const multerStorage = multer.memoryStorage();

//create a multer filter
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      new AppError("this file is not an image, Please upload only images", 404),
      false
    );
  }
};

//const upload = multer({ dest: "public/images/users" });

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

//when uploading a single file
exports.uploadVendorLogo = upload.single("logo");

exports.resizeVendorLogo = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  //1. start by processing the cover image
  req.body.logo = `carrier-${req.params.id}-${Date.now()}-logo.jpeg`;

  await sharp(req.file.buffer)
    .resize(2000, 1333)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/images/carriers/${req.body.logo}`);

  next();
});

//the handler to get all Carrier
exports.getAllCarriers = factory.getAll(Carrier);

//the handler to create a Carrier
exports.createCarrier = factory.createOne(Carrier);

//the handler to get one Carrier
exports.getCarrier = factory.getOne(Carrier);

//the handler to update a Carrier
exports.updateCarrier = factory.updateOne(Carrier);

//the handler to delete a Carrier
exports.deleteCarrier = factory.deleteOne(Carrier);
