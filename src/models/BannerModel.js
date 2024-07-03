const mongoose = require("mongoose");

const Banner = mongoose.Schema({
  title: String,
  description: String,
  bannerUrl: String,
});

module.exports = mongoose.model("banner", Banner);
