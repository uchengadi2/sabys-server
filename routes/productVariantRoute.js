const express = require("express");

const productVariantController = require("./../controllers/productVariantController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

//router.use(authController.protect);

router.route("/").get(productVariantController.getAllProductVariants).post(
  //authController.restrictTo("admin"),
  productVariantController.uploadProductCoverImage,

  productVariantController.createProductVariant
);

router
  .route("/:id")
  .get(productVariantController.getProductVariant)
  .patch(
    productVariantController.uploadProductCoverImage,
    productVariantController.resizeProductCoverImage,

    productVariantController.updateProductVariant
  )
  .delete(
    //authController.restrictTo("admin","user"),
    productVariantController.deleteProductVariant
  );

module.exports = router;
