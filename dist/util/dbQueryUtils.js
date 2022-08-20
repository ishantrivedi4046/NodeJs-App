"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBQueries = void 0;
exports.DBQueries = {
    select: {
        all: () => "SELECT * FROM products",
    },
    insert: {
        singleProduct: () => "INSERT INTO products (title,price,description,imageUrl) VALUES (?,?,?,?)",
    },
};
