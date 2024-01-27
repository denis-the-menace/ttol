import express from "express";
import prisma from "../client";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const questions = await prisma.question.findMany();
    res.json(questions);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

function shuffleArray(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

router.get("/random", async (req, res) => {
  const subtopic = req.query.subtopic?.toString();
  console.log(subtopic);
  try {
    const randomNumber = Math.floor(Math.random() * 6);
    const randomQuestion = await prisma.question.findFirst({
      where: {
        subtopic: subtopic,
      },
      skip: randomNumber,
    });
    if (randomQuestion === null) {
      res.status(404).json({
        message: "Database error, question not found.",
      });
    } else {
      const answers = await prisma.answer.findMany({
        where: {
          question_id: randomQuestion.id,
        },
      });
      const shuffledAnswers = shuffleArray(answers);
      console.dir(randomQuestion);
      res.json({ question: randomQuestion, answers: shuffledAnswers });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

router.post("/:questionId", async (req, res) => {
  console.log(req.body);
  switch (req.body) {
    case "downvote":
      await prisma.question.update({
        where: { id: Number(req.params.questionId) },
        data: { votes: { decrement: 1 } },
      });
      break;
    case "upvote":
      await prisma.question.update({
        where: { id: Number(req.params.questionId) },
        data: { votes: { increment: 1 } },
      });
      break;
    default:
      break;
  }
  const question = await prisma.question.findFirst({
    where: { id: Number(req.params.questionId) },
  });
  res.send(question);
});

export default router;
