const { PrismaClient } = require("@prisma/client");
// const prisma = require("../dist/client.js");
const { readFileSync } = require("fs");
const { resolve } = require("path");

const datasetPath = resolve(__dirname, "../../data/dataset.json");
const entries = JSON.parse(readFileSync(datasetPath).toString());

const prisma = new PrismaClient();

async function main() {
  for (const entry of entries) {
    const question = await prisma.question.create({
      data: {
        topic: "history",
        subtopic: entry.topic,
      },
    });

    const truth1 = await prisma.answer.create({
      data: {
        question: { connect: { id: question.id } },
        answer_text: entry.truth1,
      },
    });
    const truth2 = await prisma.answer.create({
      data: {
        question: { connect: { id: question.id } },
        answer_text: entry.truth2,
      },
    });
    const lie = await prisma.answer.create({
      data: {
        question: { connect: { id: question.id } },
        answer_text: entry.lie,
      },
    });

    await prisma.question.update({
      where: { id: question.id },
      data: { lie_id: lie.id },
    });

    console.log(question.topic + question.id + truth1 + truth2 + lie);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
