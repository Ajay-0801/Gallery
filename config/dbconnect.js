const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = async function (req, res) {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log(`mongodb is connected.....`);
  } catch (err) {
    console.log("mongo error", err);
  }
};
module.exports = dbconnect;
