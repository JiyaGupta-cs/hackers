const mongoose = require("mongoose");

const link = process.env.DB;

mongoose
  .connect(link, {})
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log("not connected", err);
  });
