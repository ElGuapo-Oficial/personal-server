"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInfo = void 0;
const index_1 = __importDefault(require("../models/index"));
const getInfo = (req, res) => {
    const data = (0, index_1.default)();
    res.send(data);
};
exports.getInfo = getInfo;
