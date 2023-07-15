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

//clienttan header ile sayiyi pass le
router.get("/random", async (req, res) => {
  try {
    const randomNumber = Math.floor(Math.random() * 2);
    const randomQuestion = await prisma.question.findUnique({
      where: {
        id: randomNumber,
      },
    });
    res.json(randomQuestion);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

export default router;
