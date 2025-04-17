const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const asyncHandler = require("../setup/asyncHandler");
const User = require("../models/user");

const router = express.Router();

router.post(
  "/users/register",
  asyncHandler(async (req, res) => {
    const { name, email, password, accountType } = req.body;
    console.log("Received registration data:", name, email, password);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
      accountType,
    });
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    await user.save();
    res.status(201).json({ message: "User created successfully", token });
  }),
);

// Login user
router.post(
  "/users/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.status(200).json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  }),
);

// Example of a protected route
router.get(
  "/users/me",
  passport.authenticate("jwt", { session: false }),
  asyncHandler(async (req, res) => {
    res.json({ user: req.user });
  }),
);

module.exports = router;
