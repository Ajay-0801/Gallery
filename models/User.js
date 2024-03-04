const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "images" }],
});
const user = mongoose.model("user", UserSchema);
module.exports = user;
