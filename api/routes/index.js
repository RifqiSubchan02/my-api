"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = exports.usersRoute = void 0;
var users_1 = require("./users");
Object.defineProperty(exports, "usersRoute", { enumerable: true, get: function () { return __importDefault(users_1).default; } });
var auth_1 = require("./auth");
Object.defineProperty(exports, "authRoute", { enumerable: true, get: function () { return __importDefault(auth_1).default; } });
