const express = require("express");

const bedroomController = require("./bedroom.controller");

const bedroomRouter = express.Router();

const tokenChecker = (req, res, next) => {
  let token;
  const authHeader = req.get("Authorization");

  if (authHeader) {
    token = authHeader.slice(7);
  }
  console.log(token)

  JWT.verify(token, 'SECRET', (err, token) => {
    if (err) {
      console.log(err);
      res.status(401).json({ message: "auth error" });
    } else {
      req.user_id = token.user_id;
      res.json({message: "Verification ok."})
      next();
    }
  });
};

bedroomRouter.get("/", tokenChecker, (req, res) => {
  res.json({message: "Token valid."})
});

module.exports = bedroomRouter;
