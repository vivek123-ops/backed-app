const express = require("express");
const homeRouter = express.Router();

const usercontroller = require("../controller/userController");

const home = homeRouter.get("/", usercontroller.gethome);

module.exports = home;
