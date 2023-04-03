const express = require("express");

const usersRouter = require("./users/users.router");
const tokensRouter = require("./tokens/tokens.router");
const gameRouter = require("./game/game.router");
const shopRouter = require("./shop/shop.router");

const api = express.Router();

api.use("/users", usersRouter);
api.use("/tokens", tokensRouter);
api.use("/game", gameRouter);
api.use("/shop", shopRouter);

module.exports = api;
