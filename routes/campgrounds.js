const express = require("express");
const router = express.Router();
const {
  isLoggedIn,
  isAuthor,
  validateCampground,
} = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });

const campgrounds = require("../controllers/campgrounds.js");
const catchAsync = require("../utils/catchAsync");
const campground = require("../models/campground.js");

router
  .route("/")
  .get(catchAsync(campgrounds.index))
  .post(
    isLoggedIn,
    upload.array("image"),
    validateCampground,
    catchAsync(campgrounds.newCampgroundPost)
  );

router.get("/new", isLoggedIn, campgrounds.newCampgroundForm);

router
  .route("/:id")
  .get(catchAsync(campgrounds.showCampgrounds))
  .put(
    isLoggedIn,
    isAuthor,
    upload.array("image"),
    validateCampground,
    catchAsync(campgrounds.updateCampground),
    (req, res) => {
      console.log(campground);
    }
  );

router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(campgrounds.editCampgroundForm)
);

router;

router.delete("/:id", isLoggedIn, catchAsync(campgrounds.deleteCampground));

module.exports = router;
