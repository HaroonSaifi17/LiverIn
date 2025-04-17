const express = require("express");
const router = express.Router();
const Gig = require("../models/gig");
const asyncHandler = require("../setup/asyncHandler");
const passport = require("passport");

router.get(
  "/gigs/:categoryId",
  asyncHandler(async (req, res) => {
    const gigs = await Gig.find({ category: req.params.categoryId }).populate(
      "createdBy category",
    );
    res.status(200).json(gigs);
  }),
);

router.post(
  "/gigs",
  passport.authenticate("jwt", { session: false }),
  asyncHandler(async (req, res) => {
    const newGig = new Gig({
      ...req.body,
      createdBy: req.user?._id || "6630f...dummyUserId", // You should handle auth properly
    });
    await newGig.save();
    res.status(201).json(newGig);
  }),
);

module.exports = router;
