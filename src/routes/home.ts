import { Router } from "express";
import { Product } from "../model/Product";

const router = Router();

router.get("/", (req, res, next) => {
  Product.findAll({
    order: ["createdAt"],
  }).then((products) => {
    let allProducts: any = [];
    if (products.length) {
      allProducts = JSON.parse(JSON.stringify(products, null, 2));
    }
    res.render("home", { products: allProducts });
  });
});

export default router;
