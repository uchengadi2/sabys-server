const express = require("express");

const productController = require("./../controllers/productController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

router.route("/").get(productController.getAllProducts).post(
  //authController.restrictTo("admin", "set-admin"),
  productController.uploadProductImages,
  productController.resizeProductImages,
  productController.createProduct
);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(
    //authController.restrictTo("admin", "set-admin"),
    productController.uploadProductImages,
    productController.resizeProductImages,

    productController.updateProduct
  )
  .delete(productController.deleteProduct);

module.exports = router;
