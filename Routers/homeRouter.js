const express=require('express');
const homeRouter=express.Router();

const home=homeRouter.get("/", (req, res) => {
  console.log("home page");
  res.render("home");
});

module.exports=home;