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

router.get(
  "/gigs/user",
  passport.authenticate("jwt", { session: false }),
  asyncHandler(async (req, res) => {
    const gigs = await Gig.find({ createdBy: req.user._id }).populate(
      "createdBy category",
    );
    res.status(200).json(gigs);
  }),
);

router.delete(
  "/gigs/:id",
  passport.authenticate("jwt", { session: false }),
  asyncHandler(async (req, res) => {
    const gig = await Gig.findById(req.params.id);
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }
    if (gig.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    await gig.remove();
    res.status(200).json({ message: "Gig deleted successfully" });
  }),
);

router.patch(
  "/gigs/:id",
  passport.authenticate("jwt", { session: false }),
  asyncHandler(async (req, res) => {
    const gig = await Gig.findById(req.params.id);
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }
    if (gig.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    gig.isActive = req.body.isActive;
    await gig.save();
    res.status(200).json(gig);
  }),
);

module.exports = router;
