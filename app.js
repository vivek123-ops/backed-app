const express = require("express");
const home = require("./Routers/homeRouter");

// localmodeul
const { getregister, postregister } = require("./Routers/registerRouter");

const app = express();
app.set("view engine", "ejs");

app.use(home);
app.use(getregister);
app.use(postregister);

app.listen(3000, () => {
  console.log("server is starting your localhost");
});
