const multer = require("multer");
const sharp = require("sharp");
const ProposedDeal = require("./../models/proposedDealModel");
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
//exports.uploadEventThumbnailImage = upload.single("thumbnail");

//for multiple images in a field that is an array, use the following
//exports.uploadImages = upload.array('images',3)

//for more than one file(multiple files)
exports.uploadProductImages = upload.fields([
  { name: "imageCover", maxCount: 1 },
  { name: "images", maxCount: 12 },
]);

exports.resizeProductImages = catchAsync(async (req, res, next) => {
  //if (!req.files.thumbnail || !req.files.images) return next();
  //if (!req.files.thumbnail) return next();

  //processing the thumbnail

  if (req.files.imageCover) {
    req.body.imageCover = `products-${
      req.body.createdBy
    }-${Date.now()}-imageCover.jpeg`;

    await sharp(req.files.imageCover[0].buffer)
      .resize(500, 500)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(`public/images/products/${req.body.imageCover}`);
  }

  if (req.files.images) {
    //processing other images
    req.body.images = [];
    await Promise.all(
      req.files.images.map(async (file, index) => {
        const filename = `products-${req.body.createdBy}-${Date.now()}-${
          index + 1
        }.jpeg`;

        await sharp(file.buffer)
          // .resize(2000, 1333)
          .resize(500, 500)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(`public/images/products/${filename}`);
        req.body.images.push(filename);
      })
    );
  }

  next();
});

//the handler to get all ProposedDeal
exports.getAllProposedDeals = factory.getAll(ProposedDeal);

//the handler to create a ProposedDeal
exports.createProposedDeal = factory.createOne(ProposedDeal);

//the handler to get one ProposedDeal
exports.getProposedDeal = factory.getOne(ProposedDeal);

//the handler to update a ProposedDeal
exports.updateProposedDeal = factory.updateOne(ProposedDeal);

//the handler to delete a ProposedDeal
exports.deleteProposedDeal = factory.deleteOne(ProposedDeal);
