const express = require("express");

const UsersController = require("./users.controller");

const usersRouter = express.Router();

usersRouter.post("/", UsersController.Create);
usersRouter.get("/", UsersController.GetUserData);
usersRouter.post("/achievements", UsersController.PostAchiements)
usersRouter.post("/outfit", UsersController.UpdateOutfit);

module.exports = usersRouter;
