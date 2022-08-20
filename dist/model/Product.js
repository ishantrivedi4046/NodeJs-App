"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.getAllProducts = void 0;
const lodash_1 = require("lodash");
const database_1 = __importDefault(require("../util/database"));
const dbQueryUtils_1 = require("../util/dbQueryUtils");
const initialState = {
    title: "",
    imageUrl: "",
    price: "",
    description: "",
};
const getAllProducts = (cb) => {
    database_1.default.execute(dbQueryUtils_1.DBQueries.select.all()).then((result) => {
        var _a;
        if (result === null || result === void 0 ? void 0 : result.length) {
            const products = ((_a = result[0]) !== null && _a !== void 0 ? _a : []).map((value) => new Product(value));
            cb(products);
        }
        else {
            cb([]);
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
    static saveProduct(product, cbOnProductSave) {
        database_1.default.execute(dbQueryUtils_1.DBQueries.insert.singleProduct(), [
            product.title,
            parseFloat(product.price),
            product.description,
            product.url,
        ])
            .then((result) => {
            cbOnProductSave();
        })
            .catch((e) => console.log(e));
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
