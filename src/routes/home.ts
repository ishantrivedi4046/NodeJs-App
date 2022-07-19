import { Router } from "express";
import { getAllProducts } from "../model/Product";

const router = Router();

router.get("/", (req, res, next) => {
  getAllProducts((products) => {
    res.render("home", { products: products });
  });
});

export default router;
