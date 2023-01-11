const { json } = require("express");
const Toy = require("./../models/toyModel");

exports.getAllToys = async (req, res) => {
  try {
    const toys = await Toy.find();

    res.status(200).json({
      status: "success",
      results: toys.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getToy = async (req, res) => {
  try {
    const toy = await Toy.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        toy,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createToy = async (req, res) => {
  try {
    const newToy = await Toy.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        toy: newToy,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateToy = async (req, res) => {
  try {
    const toy = await Toy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        toy,
      },
    });
  } catch (err) {
    res.status(400);
    json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }
};

exports.deleteToy = async (req, res) => {
  try {
    await Toy.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400);
    json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }
};
