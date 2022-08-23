import express from "express";
import bodyParser from "body-parser";
import notFoundRoute from "./routes/404";
import addToShopRoute from "./routes/addToShop";
import homeRoute from "./routes/home";
import detailsRoute from "./routes/details";

import path from "path";
import { sequelize } from "./util/database";
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "..", "src", "html"));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(addToShopRoute);
app.use(detailsRoute);
app.use(homeRoute);
app.use(notFoundRoute);

sequelize
  .sync()
  .then((r) => {
    app.listen(5000);
    console.log("Successfully Started the app!");
  })
  .catch((e) => {
    console.log(e);
  });
