"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// app.use(express.json());
app.use(express_1.default.text());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
const History_1 = __importDefault(require("./routes/History"));
app.use('/history', History_1.default);
const server = app.listen(8000, () => console.log("listening to port 8000"));
