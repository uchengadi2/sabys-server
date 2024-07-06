const express = require("express");

const communityController = require("./../controllers/communityController");
const authController = require("./../controllers/authController");

const router = express.Router();

//protect all the routes below

// router.use(authController.protect);

// router.use(authController.restrictTo("admin", "user"));

router
  .route("/")
  .get(communityController.getAllCommunities)
  .post(communityController.createCommunity);

router
  .route("/:id")
  .get(communityController.getCommunity)
  .patch(communityController.updateCommunity)
  .delete(communityController.deleteCommunity);

module.exports = router;
