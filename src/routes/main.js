const express = require("express");

const routes = express.Router();

const Detail = require("../models/Detail");

routes.get("/", async (req, res) => {
  const details = await Detail.findOne({ _id: "6683a665f78db6ea27960078" });
  console.log(details);

  res.render("index", {
    details: details,
  });
});

routes.get("/gallery", async (req, res) => {
  const details = await Detail.findOne({ _id: "6683a665f78db6ea27960078" });
  console.log(details);

  res.render("gallery", {
    details: details,
  });
});

module.exports = routes;
