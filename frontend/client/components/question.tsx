"use client";

import { useState, useEffect } from "react";

type QuestionType = {
  id: number;
  topic: string;
  subtopic: string;
  truth1: string;
  truth2: string;
  lie: string;
  votes: number;
};

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Question({
  id,
  topic,
  subtopic,
  truth1,
  truth2,
  lie,
  votes,
}: QuestionType) {
  const [answers, setAnswers] = useState([truth1, truth2, lie]);

  useEffect(() => {
    const shuffledAnswers = shuffleArray([truth1, truth2, lie]);
    setAnswers(shuffledAnswers);
    console.log("render");
  }, []);

  return (
    <div>
      <h1>{topic}</h1>
      <h2>{subtopic}</h2>
      <ul>
        {answers.map((item, index) => (
          <li key={index}>
            <input type="radio" name="answer" value={index + 1} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
