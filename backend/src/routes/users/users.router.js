const express = require("express");

const UsersController = require("./users.controller");

const usersRouter = express.Router();

usersRouter.post("/", UsersController.Create);
usersRouter.get("/", UsersController.GetUser);

module.exports = usersRouter;
