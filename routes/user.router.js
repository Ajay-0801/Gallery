const express = require("express");
const upload = require("../config/cloud.js");
const {
  LoginHandler,
  SignupHandler,
} = require("../controllers/user.controller.js");
const HandleImageCreation = require("../controllers/Images.controller.js");

const userRouter = express.Router();

userRouter.post("/login", LoginHandler);
userRouter.post("/sign-up", SignupHandler);
userRouter.post("/image", upload.single("file"), HandleImageCreation);
module.exports = userRouter;
