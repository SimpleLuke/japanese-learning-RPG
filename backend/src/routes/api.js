const express = require("express");


const usersRouter = require("./users/users.router");
const tokensRouter = require("./tokens/tokens.router");
const gameRouter = require("./game/game.router");

const api = express.Router();

const tokenChecker = (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (authHeader) {
    token = authHeader.slice(7);
  }

  if (token) {
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
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};




api.use("/users", usersRouter);
api.use("/tokens", tokensRouter);
api.use("/game", tokenChecker, gameRouter);

module.exports = api;
