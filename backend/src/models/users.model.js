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
      coins: Number,
    },
    inventory: [String],
    currentOutfit: {
      body: String,
      hair: String,
      top: String,
      bottoms: String,
      shoes: String,
    },
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
