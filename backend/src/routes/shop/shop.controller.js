const User = require("../../models/users.model");

const ShopController = {
  Purchase: async (req, res) => {
    const { email, item, cost } = req.body;
    try {
      const user = await User.findOne({ email: email });
      user.character.inventory.push(item);
      user.character.attributes.coins -= cost;
      await user.save();
      return res.status(201).json({ message: "OK" });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: "Bad request", error: err });
    }
  },
};

module.exports = ShopController;
