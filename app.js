const express = require("express");

// localmodeul
const {
  getregister,
  postregister,
  deletepage,
  addfavourite,
} = require("./Routers/registerRouter");

const { home, detailPage } = require("./Routers/homeRouter");

const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(home);
app.use(getregister);
app.use(postregister);
app.use(detailPage);
app.use(deletepage);
app.use(addfavourite);

app.listen(3000, () => {
  console.log("server is starting your localhost");
});
