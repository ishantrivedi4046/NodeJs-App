"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_1 = require("../model/Product");
const router = (0, express_1.Router)();
router.get("/add-product", (req, res, next) => {
    res.render("addToShop");
});
router.post("/add-product", (req, res, next) => {
    Product_1.Product.create({
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
exports.default = router;
