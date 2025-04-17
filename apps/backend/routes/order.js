const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const Gig = require("../models/gig");
const asyncHandler = require("../setup/asyncHandler");
const passport = require("passport");

router.post(
  "/orders",
  asyncHandler(async (req, res) => {
    const { gigId, buyerId, requirements } = req.body;

    const gig = await Gig.findById(gigId);
    if (!gig) {
      return res.status(404).json({ message: "Gig not found" });
    }

    const newOrder = await Order.create({
      gig: gigId,
      seller: gig.createdBy,
      buyer: buyerId,
      requirements,
      status: "pending", // or "active" if you prefer
    });

    res.status(201).json(newOrder);
  }),
);

router.get(
  "/orders/buyer/:buyerId",
  asyncHandler(async (req, res) => {
    const orders = await Order.find({ buyer: req.params.buyerId }).populate(
      "gig seller buyer",
    );
    res.status(200).json(orders);
  }),
);

router.get(
  "/orders/seller/:sellerId",
  asyncHandler(async (req, res) => {
    const orders = await Order.find({ seller: req.params.sellerId }).populate(
      "gig seller buyer",
    );
    res.status(200).json(orders);
  }),
);

router.get(
  "/orders",
  passport.authenticate("jwt", { session: false }),
  asyncHandler(async (req, res) => {
    const orders = await Order.find({
      $or: [{ buyer: req.user._id }, { seller: req.user._id }],
    }).populate("gig seller buyer");
    res.status(200).json(orders);
  }),
);

module.exports = router;
