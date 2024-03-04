const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  url: {
    type: String,
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  description: {
    type: String,
  },
});
const Image = mongoose.model("Image", ImageSchema);
module.exports = Image;
