const express = require("express");

const usersRouter = require("./users/users.router");
const tokensRouter = require("./tokens/tokens.router");

const api = express.Router();

api.use("/users", usersRouter);
api.use("/tokens", tokensRouter);

module.exports = api;
