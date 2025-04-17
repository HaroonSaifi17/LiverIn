const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_CONNECTION_URL)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });
