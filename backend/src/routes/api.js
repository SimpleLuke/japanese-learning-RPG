const express = require("express");

const usersRouter = require("./users/users.router");

const api = express.Router();

api.use("/users", usersRouter);

module.exports = api;
