"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3001;
app.use(index_1.default);
app.use('/', (req, res) => {
    res.send("Hola Mundo");
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});