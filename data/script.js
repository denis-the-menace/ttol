import { writeFile } from "fs";
import dataset from "./dataset.json" assert { type: "json" };
import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function createDataset(element) {
  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Give me two facts which doesn't consist of a birthdate or a birthplace and a lie about ${element.title} which are a sentence each and make sure the lie is close to the truth and is the third sentence and don't write that it is a lie.`,
      },
    ],
  });
  const message = res.data.choices[0].message.content.split("\n");
  element.truth1 = message[0].replace("1. ", "");
  element.truth2 = message[1].replace("2. ", "");
  element.lie = message[2].replace("3. ", "");
  console.log(element);
}

async function writeDataset() {
  for (const element of dataset) {
    await new Promise((resolve) =>
      setTimeout(() => resolve(createDataset(element)), 2000)
    );
  }
  writeFile("dataset.json", JSON.stringify(dataset), (err) => {
    if (err) return console.log(err);
    console.log("Task has been added successfully.");
  });
}

writeDataset();
