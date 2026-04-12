const Post = require("../module/postmodule");

const gethome = (req, res) => {
  console.log("home page");
  res.render("home");
};

const getregister = (req, res) => {
  console.log("register page");
  res.render("register");
};

const postregister = (req, res) => {
  console.log("postregister");
  const data = ({ username, price, gender, image } = req.body);
  const newPost = new Post(data.username, data.price, data.gender, data.image);
  newPost.save();
  res.render("postregister", { postdetail: data });
};
module.exports = {
  gethome,
  getregister,
  postregister,
};
