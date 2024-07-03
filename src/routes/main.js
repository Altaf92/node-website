const express = require("express");

const routes = express.Router();

const Detail = require("../models/Detail");
const SliderModel = require("../models/SliderModel");
const Service = require("../models/ServiceModel");

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "6683a665f78db6ea27960078" });
  const slides = await SliderModel.find();
  const service = await Service.find();
  console.log(service);

  res.render("index", {
    details: details,
    slides: slides,
    services: service,
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
