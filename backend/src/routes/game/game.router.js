const express = require("express");

const GameController = require("./game.controller");

const gameRouter = express.Router();

gameRouter.post("/update", GameController.Update);

module.exports = gameRouter;
