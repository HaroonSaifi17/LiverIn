const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    gig: { type: mongoose.Schema.Types.ObjectId, ref: "Gig", required: true },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    requirements: { type: String },
    status: {
      type: String,
      enum: ["pending", "active", "delivered", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Order", orderSchema);
