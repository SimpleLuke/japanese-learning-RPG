const express = require("express");

const TokensController = require("./tokens.controller");

const tokensRouter = express.Router();

tokensRouter.post("/", TokensController.Create);

module.exports = tokensRouter;
