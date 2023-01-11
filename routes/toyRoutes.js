const express = require("express");
const morgan = require("morgan");
const toy = require("./../controller/toy");

const router = express.Router();

router.route("/").get(toy.getAllToys).post(toy.createToy);
router.route("/:id").get(toy.getToy).patch(toy.updateToy).delete(toy.deleteToy);

module.exports = router;
