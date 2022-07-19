import { Router } from "express";
import { Product } from "../model/Product";

const router = Router();

router.get("/add-product", (req, res, next) => {
  res.render("addToShop");
});

router.post("/add-product", (req, res, next) => {
  const product = new Product(req.body);
  Product.saveProduct(product);
  res.redirect("/");
});

export default router;
