"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_Controller_1 = require("../controllers/user.Controller");
const auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
const userRoute = (0, express_1.Router)();
userRoute.post('/', user_Controller_1.signup);
userRoute.post('/login', auth_middleware_1.default, user_Controller_1.login);
exports.default = userRoute;
