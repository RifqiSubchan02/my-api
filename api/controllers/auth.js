"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const { successResponse } = utils_1.myResponse;
function signUp(req, res) {
    // const { email, password } = req.body
    successResponse({ req, res, message: 'Success sign up', status: 200 });
}
exports.default = { signUp };
