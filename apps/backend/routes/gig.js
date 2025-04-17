const express = require("express");
const router = express.Router();
const Gig = require("../models/gig");
const asyncHandler = require("../setup/asyncHandler");

router.get(
  "/gigs/:categoryId",
  asyncHandler(async (req, res) => {
    const gigs = await Gig.find({ category: req.params.categoryId }).populate(
      "createdBy category",
    );
    res.status(200).json(gigs);
  }),
);

module.exports = router;
