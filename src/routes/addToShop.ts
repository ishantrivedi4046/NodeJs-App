import { Router } from "express";
import { Product } from "../model/Product";

const router = Router();

router.get("/add-product", (req, res, next) => {
  res.render("addToShop");
});

router.post("/add-product", (req, res, next) => {
  Product.create({
    title: req.body.title,
    description: req.body.description,
    price: parseFloat(req.body.price),
    imageUrl: req.body.imageUrl,
  })
    .then((r) => {
      res.redirect("/");
      console.log("Successfully Inserted An Product!");
    })
    .catch((e) => {
      console.log("Failed To Inserted An Product!");
    });
});

export default router;
