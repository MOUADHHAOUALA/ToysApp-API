const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Toys = require("./../models/toyModel");

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

const toys = JSON.parse(
  fs.readFileSync(`${__dirname}/toys-simple-data.json`, "utf-8")
);

//Import data into DATABASE
const importData = async () => {
  try {
    await Toys.create(toys);
    console.log("data successfully loaded!");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//DELETE ALL DATA FROM COLLECTION

const deleteData = async () => {
  try {
    await Toys.deleteMany();
    console.log("data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "import") {
  importData;
} else if (process.execArgv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);
