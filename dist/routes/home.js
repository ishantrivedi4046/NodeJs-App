"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_1 = require("../model/Product");
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    (0, Product_1.getAllProducts)((products) => {
        res.render("home", { products: products });
    });
});
exports.default = router;
