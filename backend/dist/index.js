"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const history_1 = __importDefault(require("./routes/history"));
app.use('/history', history_1.default);
const server = app.listen(8000, () => console.log("listening to port 8000"));
