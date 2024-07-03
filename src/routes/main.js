const express = require("express");

const routes = express.Router();

const Detail = require("../models/Detail");
const SliderModel = require("../models/SliderModel");
const Service = require("../models/ServiceModel");
const Contact = require("../models/ContactModal");

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "6683a665f78db6ea27960078" });
  const slides = await SliderModel.find();
  const service = await Service.find();
  // console.log(service);

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

routes.post("/contact-form", async (req, res) => {
  // console.log(req.body);

  try {
    const data = await Contact.create(req.body);
    console.log(data);
    res.redirect("/");
  } catch (error) {
    res.redirect("/");
  }
});

module.exports = routes;
