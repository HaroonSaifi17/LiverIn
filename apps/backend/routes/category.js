const express = require("express");
const asyncHandler = require("../setup/asyncHandler");
const router = express.Router();
const Category = require("../models/category");
const Gig = require("../models/gig");

router.get(
  "/category/:id",
  asyncHandler(async (req, res) => {
    const category = await Category.findOne({ _id: req.params.id });
    if (!category) return res.status(404).json({ error: "Category not found" });
    console.log(req.params.id)

    const gigs = await Gig.find({ category: req.params.id });
    console.log(gigs)
    return res.status(200).json({
      success:true,
      gigs
    });
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
