"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_1 = require("../model/Product");
const router = (0, express_1.Router)();
router.get("/details", (req, res, next) => {
    const { book_id } = req.query;
    Product_1.Product.findByPk(book_id).then((product) => {
        const finalProduct = JSON.parse(JSON.stringify(product, null, 2));
        console.log(finalProduct);
        res.render("details", {
            product: finalProduct,
        });
    });
});
exports.default = router;
