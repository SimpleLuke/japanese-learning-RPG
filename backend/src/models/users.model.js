const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  wordsLearnt: [String],
  character: {
    attributes: {
      xp: Number,
      level: Number,
      wordsKnown: Number,
    },
    inventory: [String],
    equipped: {
      head: String,
      outfit: String,
      trousers: String,
    },
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
