"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/auth', routes_1.authRoute);
app.use('/users', routes_1.usersRoute);
app.get('/', (req, res) => res.send('Welcome to My API'));
app.use((req, res, next) => {
    next((0, http_errors_1.default)(404));
});
app.listen(process.env.PORT, () => console.log(`⚡️ Server is running at https://localhost:${process.env.PORT}`));
