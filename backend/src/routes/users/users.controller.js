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
    // await user.save((err) => {
    //   if (err) {
    //     res.status(400).json({ message: "Bad request" });
    //   } else {
    //     res.status(201).json({ message: "OK" });
    //   }
    // });
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
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },
  UpdateOutfit: async (req, res) => {
    const { outfit,email } = req.body;
    const { body,hair,top,bottoms,shoes } = outfit;
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
      return res.status(400).json({ message: "Bad request" });
    }
  },
  PostAchievements: async (req,res) => {
    const { acheivements,email } = req.body;
    try {
      const user = await User.findOne({ email: email });
      user.character.achievements = acheivements
    } catch (err) {
      return res.status(400).json({ message: "Bad request" });
    }
  },
};

module.exports = UsersController;
