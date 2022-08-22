"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const database_1 = require("../util/database");
exports.Product = database_1.sequelize.define("products", {
    id: {
        type: sequelize_1.default.UUID,
        defaultValue: sequelize_1.default.UUIDV1,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.default.STRING,
        allowNull: false,
        defaultValue: "No Description Exists!",
    },
    price: {
        type: sequelize_1.default.DOUBLE,
        allowNull: false,
        defaultValue: 0.0,
    },
    imageUrl: {
        type: sequelize_1.default.STRING,
        allowNull: false,
        defaultValue: "No Image Exists!",
    },
});
