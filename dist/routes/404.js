"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use("/", (req, res, next) => {
    res.render("404");
});
exports.default = router;
