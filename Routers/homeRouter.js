const express = require("express");
const homeRouter = express.Router();

const usercontroller = require("../controller/userController");

const home = homeRouter.get("/", usercontroller.gethome);

const detailPage = homeRouter.get("/register/:id",usercontroller.detailPage );

module.exports = {
  home,
  detailPage,
};
