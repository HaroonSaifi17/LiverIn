const express = require("express");
const asyncHandler = require("../setup/asyncHandler");
const router = express.Router();
const Category = require("../models/category");
const Gig = require("../models/gig");

router.get(
  "/category/name/:name",
  asyncHandler(async (req, res) => {
    const category = await Category.findOne({ name: req.params.name });
    if (!category) return res.status(404).json({ error: "Category not found" });

    const gigs = await Gig.find({ category: category._id }).populate(
      "createdBy category",
    );
    res.status(200).json(gigs);
  }),
);

router.get(
  "/categories",
  asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.status(200).json(categories);
  }),
);

module.exports = router;
