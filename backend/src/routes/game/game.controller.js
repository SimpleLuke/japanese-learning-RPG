const User = require("../../models/users.model");


const GameController = {
  Update: async (req, res) => {
    const { email, wordsLearnt, character } = req.body;
    try {
      const user = await User.findOne({ email: email });
      user.wordsLearnt = wordsLearnt;
      user.character = character;
      await user.save();
      return res.status(201).json({ message: "OK" });
    } catch (err) {
      return res.status(400).json({ message: "Bad request" });
    }
  },
};

module.exports = GameController;
