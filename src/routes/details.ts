import { Router } from "express";
import { Product } from "../model/Product";

const router = Router();

router.get("/details", (req, res, next) => {
  const { book_id } = req.query;
  Product.findByPk(book_id as any).then((product) => {
    const finalProduct = JSON.parse(JSON.stringify(product, null, 2));
    console.log(finalProduct);
    res.render("details", {
      product: finalProduct,
    });
  });
});

export default router;
