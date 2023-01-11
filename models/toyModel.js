const mongoose = require("mongoose");
const toySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Toy need a name"],
    unique: true,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  price: {
    type: Number,
    required: [true, "the Toy must have a price"],
  },

  imagecover: {
    type: String,
    required: [true, "The toy needs image"],
  },

  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },

  startDtaes: [Date],
});

const Toy = mongoose.model("toy", toySchema);

module.exports = Toy;
