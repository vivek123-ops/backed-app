const Post = require("../module/postmodule");

// HOME
const gethome = async (req, res) => {
  try {
    const [rows] = await Post.fetchAll();
    res.render("home", { registerData: rows });
  } catch (err) {
    console.log("Error in gethome:", err);
    res.status(500).send("Server Error");
  }
};

// REGISTER PAGE
const getregister = (req, res) => {
  res.render("register");
};

// SAVE DATA
const postregister = async (req, res) => {
  try {
    const { username, price, gender, image, place } = req.body;

    console.log(req.body);

    const newPost = new Post(username, price, gender, image, place);

    await newPost.save();

    res.render("postregister");
  } catch (err) {
    console.log("Error in postregister:", err);
    res.status(500).send("Data not saved");
  }
};

// DETAIL PAGE
const detailPage = async (req, res) => {
  try {
    const id = req.params.id;

    const [rows] = await Post.findid(id);

    res.render("detailPage", { post: rows[0] });
  } catch (err) {
    console.log("Error in detailPage:", err);
    res.status(500).send("Error loading detail page");
  }
};

// DELETE POST
const deletepage = async (req, res) => {
  try {
    const id = req.params.id;

    await Post.deletePost(id);

    console.log("Data deleted successfully");
    res.redirect("/");
  } catch (err) {
    console.log("Error deleting data:", err);
    res.status(500).send("Delete failed");
  }
};

// ADD FAVOURITE
const addfavourite = async (req, res) => {
  try {
    const id = req.params.id;

    // check already exist
    const [rows] = await Post.checkfavourite(id);

    if (rows.length > 0) {
      return res.send("Data already exists ❌");
    }

    // insert
    await Post.addfavourite(id);

    res.send("Data added successfully ✅");
  } catch (err) {
    console.log("Error in addfavourite:", err);
    res.status(500).send("Error while adding data ❌");
  }
};

module.exports = {
  gethome,
  getregister,
  postregister,
  detailPage,
  deletepage,
  addfavourite,
};