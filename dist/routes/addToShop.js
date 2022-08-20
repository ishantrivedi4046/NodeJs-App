"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_1 = require("../model/Product");
const router = (0, express_1.Router)();
router.get("/add-product", (req, res, next) => {
    res.render("addToShop");
});
router.post("/add-product", (req, res, next) => {
    const product = new Product_1.Product(req.body);
    Product_1.Product.saveProduct(product, () => {
        res.redirect("/");
    });
});
exports.default = router;
