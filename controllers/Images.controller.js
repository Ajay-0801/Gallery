require("dotenv").config();
const Image = require("../models/Images.js");
const jwt = require("jsonwebtoken");
const user = require("../models/User.js");

const HandleImageCreation = async (req, res) => {
  // console.log(req.file.path);
  const cookie = req.cookies?.uid;
  const id = jwt.verify(cookie, process.env.JWT_SECREAT_KEY);
  const userid = id.id;
  if (!req.file) return res.send("Plz upload file");
  const path = req.file.path;
  const description = req.body.description;
  const image = await Image.create({
    url: path,
    createdBy: userid,
    description: description,
  });
  const found = await user.findById(userid);
  const find = await Image.find({});
  found.posts.push(image._id);
  await found.save();
  return res.render("Home", { images: find });
};
module.exports = HandleImageCreation;
