const { Post } = require("../module/postmodule");

const { registerData } = require("../module/postmodule");

const gethome = (req, res) => {
  console.log("home page");
  console.log(registerData);
  res.render("home", { registerData });
};

const getregister = (req, res) => {
  console.log("register page");
  res.render("register");
};

const postregister = (req, res) => {
  console.log("postregister");
  const data = ({ username, price, gender, image, place } = req.body);
  const newPost = new Post(
    data.username,
    data.price,
    data.gender,
    data.image,
    data.place,
  );
  newPost.save();
  res.render("postregister", { postdetail: data });
};

const detailPage = (req, res) => {
  const post = Post.findid(req.params.id);
  console.log(post);
  res.render("detailPage",{post});
};

module.exports = {
  gethome,
  getregister,
  postregister,
  detailPage,
};
