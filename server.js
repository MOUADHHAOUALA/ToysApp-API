const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successfull");
  });

/*
app.get("/", (req, res) => {
  res.status(200).send("hello toys app");
});
*/

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is fully running on ${port}`);
});
