const User = require("../../models/users.model");
const TokenGenerator = require("../../models/token_generator.model.js");

const SessionsController = {
  Create: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email }).then(async (user) => {
      if (!user) {
        console.log("auth error: user not found");
        res.status(401).json({ message: "auth error" });
      } else if (user.password !== password) {
        console.log("auth error: passwords do not match");
        res.status(401).json({ message: "auth error" });
      } else {
        const token = await TokenGenerator.jsonwebtoken(user.id);
        const { email, _id } = user;
        const userObj = { email, _id };
        res
          .status(201)
          .json({ token: token, message: "OK", userData: userObj });
      }
    });
  },
};

module.exports = SessionsController;
