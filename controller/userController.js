const Post = require("../module/postmodule"); 

// HOME
const gethome = (req, res) => {
  Post.fetchAll()
    .then(([rows]) => {
      res.render("home", { registerData: rows });
    })
    .catch((err) => console.log(err));
};

// REGISTER PAGE
const getregister = (req, res) => {
  res.render("register");
};

// SAVE DATA
const postregister = (req, res) => {
  const { username, price, gender, image, place } = req.body;

  const newPost = new Post(username, price, gender, image, place);

  newPost
    .save()
    .then(() => res.render("postregister", { postdetail: req.body }))
    .catch(() => console.log("data is not added"));
};

// DETAIL PAGE
const detailPage = (req, res) => {
  const id = req.params.id;

  Post.findid(id)
    .then(([rows]) => {
      res.render("detailPage", { post: rows[0] });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  gethome,
  getregister,
  postregister,
  detailPage,
};