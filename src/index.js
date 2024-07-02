const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/main");
const Detail = require("./models/Detail");

const PORT = 8080;

// static url
app.use(express.static("public"));
app.use("/", routes);

// template engine configuration

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

// db connection

mongoose
  .connect("mongodb://localhost:27017/node_website")
  .then(() => {
    console.log("Connected to mongoDB");

    // Detail.create({
    //   brandName: "WEB SOLUTION",
    //   brandIconUrl: "/public/images/web.png",
    //   links: [
    //     {
    //       label: "Home",
    //       url: "/",
    //     },
    //     {
    //       label: "Services",
    //       url: "/services",
    //     },
    //     {
    //       label: "Gallery",
    //       url: "/gallery",
    //     },
    //     {
    //       label: "About",
    //       url: "/about",
    //     },
    //     {
    //       label: "Contact Us",
    //       url: "/contact-us",
    //     },
    //   ],
    // });
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

app.listen(PORT, () => {
  console.log("server started ");
});
