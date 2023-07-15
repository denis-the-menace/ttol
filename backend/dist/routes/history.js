"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = __importDefault(require("../client"));
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield client_1.default.question.findMany();
        res.json(questions);
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong",
        });
    }
}));
//clienttan header ile sayiyi pass le
router.get("/random", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const randomNumber = Math.floor(Math.random() * 2);
        const randomQuestion = yield client_1.default.question.findUnique({
            where: {
                id: randomNumber,
            },
        });
        res.json(randomQuestion);
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong",
        });
    }
}));
exports.default = router;
