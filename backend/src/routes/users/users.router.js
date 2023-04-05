const express = require("express");

const UsersController = require("./users.controller");

const usersRouter = express.Router();

usersRouter.post("/", UsersController.Create);
usersRouter.get("/", UsersController.GetUserData);
usersRouter.post("/outfit", UsersController.UpdateOutfit);
usersRouter.post("/outfit/change", UsersController.ChangeOutfit);

module.exports = usersRouter;
