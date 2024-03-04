const express = require("express");
const images = require("../models/Images");
const CheckLogin = require("../loginAuth");
// const Image = require("../models/Images");
const user = require("../models/User");

const staticRoute = express.Router();

///signup Route
staticRoute.get("/signup", (req, res) => {
  return res.render("signup");
});
//Login Route
staticRoute.get("/login", (req, res) => {
  return res.render("login");
});
///Home Route
staticRoute.get("/Home", async (req, res) => {
  const find = await images.find({});
  return res.render("Home", { images: find });
});

//upload Route
staticRoute.get("/upload", CheckLogin, (req, res) => {
  return res.render("upload");
});

module.exports = staticRoute;
