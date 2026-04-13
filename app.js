const express = require("express");
const { home, detailPage } = require("./Routers/homeRouter");

// localmodeul
const { getregister, postregister } = require("./Routers/registerRouter");

const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(home);
app.use(getregister);
app.use(postregister);
app.use(detailPage);

app.listen(3000, () => {
  console.log("server is starting your localhost");
});
