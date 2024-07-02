const express = require("express");

const routes = express.Router();

const Detail = require("../models/Detail");
const SliderModel = require("../models/SliderModel");

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "6683a665f78db6ea27960078" });
  const slides = await SliderModel.find();
  // console.log(slides);

  res.render("index", {
    details: details,
    slides: slides,
  });
});

routes.get("/gallery", async (req, res) => {
  const details = await Detail.findOne({ _id: "6683a665f78db6ea27960078" });
  // console.log(details);

  res.render("gallery", {
    details: details,
  });
});

module.exports = routes;
