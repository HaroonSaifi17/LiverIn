const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profileImg: {
      type: String,
      default: "",
    },
    password: String,
    accountType: {
      type: String,
      enum: ["freelancer", "recruiter"],
      required: true,
    },
    gigs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Gig",
      },
    ],
    reviews:[{
      type:mongoose.Schema.Types.ObjectId,
      ref: "",
    }]
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);
module.exports = User;
