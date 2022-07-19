"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.getAllProducts = void 0;
const lodash_1 = require("lodash");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const initialState = {
    title: "",
    imageUrl: "",
    price: "",
    description: "",
};
const p = path_1.default.join(__dirname, "..", "data", "products.json");
const getAllProducts = (cb) => {
    fs_1.default.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        else {
            cb(JSON.parse(fileContent));
        }
    });
};
exports.getAllProducts = getAllProducts;
class Product {
    constructor(productDetails = initialState) {
        this._id = "";
        this._title = "";
        this._description = "";
        this._price = "";
        this._imageUrl = "";
        this._id = (0, lodash_1.uniqueId)();
        this._title = productDetails === null || productDetails === void 0 ? void 0 : productDetails.title;
        this._description = productDetails === null || productDetails === void 0 ? void 0 : productDetails.description;
        this._imageUrl = productDetails === null || productDetails === void 0 ? void 0 : productDetails.imageUrl;
        this._price = productDetails === null || productDetails === void 0 ? void 0 : productDetails.price;
    }
    get id() {
        return this._id;
    }
    get price() {
        return this._price;
    }
    get title() {
        return this._title;
    }
    get description() {
        return this._description;
    }
    get url() {
        return this._imageUrl;
    }
    static saveProduct(product) {
        (0, exports.getAllProducts)((products = []) => {
            products === null || products === void 0 ? void 0 : products.push(product === null || product === void 0 ? void 0 : product.json());
            fs_1.default.writeFile(p, JSON.stringify(products), (err) => console.log(err));
        });
    }
    json() {
        return {
            title: this.title,
            description: this.description,
            price: this.price,
            imageUrl: this.url,
        };
    }
}
exports.Product = Product;
