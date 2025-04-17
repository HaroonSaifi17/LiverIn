const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
require("dotenv").config();
const asyncHandler = require("./setup/asyncHandler");

const app = express();
const port = process.env.PORT;
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// require("./setup/mongoose");
// require("./setup/passport");

const errorMiddleware = (err, _req, res, _next) => {
  console.error("Error:", err.message);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

app.use(errorMiddleware);

app.listen(process.env.PORT || port, () => {
  console.log(`Server is listening at http://localhost:${port} `);
});
