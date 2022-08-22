"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_1 = require("../model/Product");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    Product_1.Product.findAll({
        order: ["createdAt"],
    }).then((products) => {
        let allProducts = [];
        if (products.length) {
            allProducts = JSON.parse(JSON.stringify(products, null, 2));
        }
        res.render("home", { products: allProducts });
    });
});
exports.default = router;
