const express = require("express");
const usersRouter = require("./users/users.router");
const tokensRouter = require("./tokens/tokens.router");
const gameRouter = require("./game/game.router");
const api = express.Router();
require('./../util/tokenChecker.js')





api.use("/users", usersRouter);
api.use("/tokens", tokensRouter);
api.use("/game", tokenChecker, gameRouter);

module.exports = api;
