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
  GetUser: async (req, res) => {
    try {
      const email = req.query.email;
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json(user.firstName);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = UsersController;
