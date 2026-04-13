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

  console.log(req.body); // debug

  const newPost = new Post(username, price, gender, image, place);

  newPost
    .save()
    .then(() => {
      res.render("postregister");
    })
    .catch((err) => {
      console.log("ERROR:", err);
    });
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

// delete post;
const deletepage = (req, res) => {
  const id = req.params.id;

  Post.deletePost(id)
    .then(() => {
      console.log("Data deleted successfully");
      res.redirect("/"); // ya jaha redirect karna hai
    })
    .catch((err) => {
      console.log("Error deleting data:", err);
      res.status(500).send("Delete failed");
    });
};

module.exports = {
  gethome,
  getregister,
  postregister,
  detailPage,
  deletepage,
};
