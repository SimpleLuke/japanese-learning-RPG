const User = require("../../models/users.model");

const UsersController = {
  Create: async (req, res) => {
    const user = new User(req.body);
    try {
      await user.save();
      return res.status(201).json({ message: "OK" });
    } catch (err) {
      return res.status(400).json({ message: "Bad request" });
    }
  },
  GetUserData: async (req, res) => {
    try {
      const { email } = req.query;
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  UpdateOutfit: async (req, res) => {
    const { outfit, email } = req.body;
    const { body, hair, top, bottoms, shoes } = outfit;

    try {
      const user = await User.findOne({ email: email });
      user.character.currentOutfit.body = body;
      user.character.currentOutfit.hair = hair;
      user.character.currentOutfit.top = top;
      user.character.currentOutfit.bottoms = bottoms;
      user.character.currentOutfit.shoes = shoes;
      await user.save();
      return res.status(201).json({ message: "OK" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: "Bad request" });
    }
  },
  ChangeOutfit: async (req, res) => {
    const { outfit, email } = req.body;
    const { top } = outfit;
    try {
      const user = await User.findOne({ email: email });
      user.character.currentOutfit.top = top;
      await user.save();
      return res.status(201).json({ message: "OK" });
    } catch (err) {
      return res.status(400).json({ message: "Bad request" });
    }
  },
};

module.exports = UsersController;
