"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const _404_1 = __importDefault(require("./routes/404"));
const addToShop_1 = __importDefault(require("./routes/addToShop"));
const home_1 = __importDefault(require("./routes/home"));
const details_1 = __importDefault(require("./routes/details"));
const path_1 = __importDefault(require("path"));
const database_1 = require("./util/database");
const app = (0, express_1.default)();
app.set("view engine", "pug");
app.set("views", path_1.default.join(__dirname, "..", "src", "html"));
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(addToShop_1.default);
app.use(details_1.default);
app.use(home_1.default);
app.use(_404_1.default);
database_1.sequelize
    .sync()
    .then((r) => {
    app.listen(5000);
    console.log("Successfully Started the app!");
})
    .catch((e) => {
    console.log(e);
});
