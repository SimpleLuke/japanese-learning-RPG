const express = require("express");

const usersRouter = require("./users/users.router");
const tokensRouter = require("./tokens/tokens.router");
const bedroomRouter = require("./bedroom/bedroom.router")

const api = express.Router();

api.use("/users", usersRouter);
api.use("/tokens", tokensRouter);
api.use("/bedroom", bedroomRouter)

module.exports = api;
