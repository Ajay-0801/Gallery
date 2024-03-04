require("dotenv").config();
const JWt = require("jsonwebtoken");
const user = require("../models/User.js");
const Image = require("../models/Images.js");

const LoginHandler = async function (req, res) {
  const { email, password } = req.body;
  const finduser = await user.findOne({ email, password });
  if (!finduser) {
    return res.render("signup");
  }
  const data = {
    id: finduser._id,
  };
  const allImages = await Image.find({});
  const sessionid = JWt.sign(data, process.env.JWT_SECREAT_KEY);
  console.log(sessionid);
  res.cookie("uid", sessionid);
  console.log(allImages.length);
  return res.render("Home", { images: allImages });
};

const SignupHandler = async function (req, res) {
  const { name, email, password } = req.body;
  if (!name || !password || !email) return res.send("Plx Provide all fields");
  const userFound = await user.findOne({ email: email });
  if (userFound) return res.redirect("/signup");
  const cre = await user.create({
    name,
    email,
    password,
  });
  console.log(cre);
  return res.redirect("/login");
};
module.exports = { SignupHandler, LoginHandler };
