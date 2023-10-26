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
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
//daha duzgunlestir if else i kaldirmaya en azindan else i kaldirmaya calis
router.get("/random", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const subtopic = (_a = req.query.subtopic) === null || _a === void 0 ? void 0 : _a.toString();
    console.log(subtopic);
    try {
        const randomNumber = Math.floor(Math.random() * 6);
        const randomQuestion = yield client_1.default.question.findFirst({
            where: {
                subtopic: subtopic,
            },
            skip: randomNumber,
        });
        if (randomQuestion === null) {
            res.status(404).json({
                message: "Database error, question not found.",
            });
        }
        else {
            const answers = yield client_1.default.answer.findMany({
                where: {
                    question_id: randomQuestion.id,
                },
            });
            const shuffledAnswers = shuffleArray(answers);
            console.dir(randomQuestion);
            res.json({ question: randomQuestion, answers: shuffledAnswers });
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Something went wrong",
        });
    }
}));
router.post("/:questionId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    switch (req.body) {
        case "downvote":
            yield client_1.default.question.update({
                where: { id: Number(req.params.questionId) },
                data: { votes: { decrement: 1 } },
            });
            break;
        case "upvote":
            yield client_1.default.question.update({
                where: { id: Number(req.params.questionId) },
                data: { votes: { increment: 1 } },
            });
            break;
        default:
            break;
    }
    const question = yield client_1.default.question.findFirst({
        where: { id: Number(req.params.questionId) },
    });
    res.send(question);
}));
exports.default = router;
