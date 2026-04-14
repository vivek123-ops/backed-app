const express = require("express");
const registerRouter = express.Router();

const usercontroller = require("../controller/userController");

const getregister = registerRouter.get("/register", usercontroller.getregister);

const postregister = registerRouter.post(
  "/register",
  usercontroller.postregister,
);

const deletepage = registerRouter.get(
  "/register/delete/:id",
  usercontroller.deletepage,
);

const addfavourite = registerRouter.get(
  "/postfavourite/:id",
  usercontroller.addfavourite,
);

module.exports = {
  getregister,
  postregister,
  deletepage,
  addfavourite,
};
