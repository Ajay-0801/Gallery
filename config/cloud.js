const express = require("express");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const app = express();

app.use(express.urlencoded({ extended: false }));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRATE,
});
///storage config
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "image-folder",
    format: async (req, file) => "png",
    public_id: (req, file) => file.fieldname + "_" + Date.now(),
    transformation: [
      {
        width: 500,
        height: 500,
        crop: "fill",
      },
    ],
  },
});

//multer config
const upload = multer({
  storage,
  limits: 1020 * 1024 * 5,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Not a Image Plz upload image", false));
    }
  },
});

module.exports = upload;
