"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const mysqlPool = mysql2_1.default.createPool({
    host: "localhost",
    user: "root",
    database: "node-complete",
    password: "Astrocoder8046@786",
});
const db = mysqlPool.promise();
exports.default = db;
