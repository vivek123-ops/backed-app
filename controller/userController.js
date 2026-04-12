const gethome=(req, res) => {
  console.log("home page");
  res.render("home");
}

const getregister=(req, res) => {
  console.log("register page");
  res.render("register");
}

 const postregister=(req, res) => {
  console.log("postregister");
  res.render("postregister");
}

module.exports={
  gethome,
  getregister,
  postregister,
}