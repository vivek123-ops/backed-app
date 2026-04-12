const express = require("express");
const registerRouter = express.Router();

const usercontroller = require("../controller/userController");

const getregister = registerRouter.get("/register", usercontroller.getregister);

const postregister = registerRouter.post(
  "/register",
  usercontroller.postregister,
);

module.exports = {
  getregister,
  postregister,
};
