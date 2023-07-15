// const { PrismaClient } = require("@prisma/client");
const prisma = require("../prisma/client.ts");
const { readFileSync } = require("fs");
const { resolve } = require("path");

const datasetPath = resolve(__dirname, "../../data/dataset.json");
const questions = JSON.parse(readFileSync(datasetPath).toString());

// const prisma = new PrismaClient();

async function main() {
  for (const question of questions) {
    const entry = await prisma.question.create({
      data: {
        topic: "History",
        subtopic: question.topic,
        truth1: question.truth1,
        truth2: question.truth2,
        lie: question.lie,
      },
    });
    console.log(entry);
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
