const express = require("express");
const registerRouter = express.Router();

const getregister = registerRouter.get("/register", (req, res) => {
  console.log("register page");
  res.render("register");
});

const postregister = registerRouter.post("/register", (req, res) => {
  console.log("postregister");
  res.render("postregister");
});

module.exports = {
  getregister,
  postregister,
};
