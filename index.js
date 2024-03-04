require("dotenv").config();
const express = require("express");
const staticRoute = require("./routes/static.routes.js");
const userRoute = require("./routes/user.router.js");
const dbconnect = require("./config/dbconnect.js");
const cookieparser = require("cookie-parser");
const path = require("path");
const upload = require("./config/cloud.js");
const HandleImageCreation = require("./controllers/Images.controller.js");
const app = express();
dbconnect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//useers Routes
app.use("/users", userRoute);
app.use("/", staticRoute);

app.post("/images", upload.single("file"), HandleImageCreation);

app.listen(`${process.env.PORT}`, () => {
  console.log(`srever is running on ${process.env.PORT}`);
});
