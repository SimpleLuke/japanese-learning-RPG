const express = require("express");

const ShopController = require("./shop.controller");

const shopRouter = express.Router();

shopRouter.post("/purchase", ShopController.Purchase);

module.exports = shopRouter;
