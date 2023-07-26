"use client";

import { useState, useEffect } from "react";

type Fact = {
  questionId: number;
  text: string;
  isTruth: boolean;
};

export default function Question({
  facts,
  topic,
  subtopic,
}: {
  facts: Fact[];
  topic: string;
  subtopic: string;
}) {
  const [clicked, setClicked] = useState(null);

  return (
    <div>
      <h1 className="text-2xl">{topic}</h1>
      <h2 className="text-xl">{subtopic}</h2>
      <ul>
        <li>
          <input type="radio" name="answer" value="1" />
          {facts[0].text}
        </li>
        <li>
          <input type="radio" name="answer" value="2" />
          {facts[1].text}
        </li>
        <li>
          <input type="radio" name="answer" value="3" />
          {facts[2].text}
        </li>
      </ul>
    </div>
  );
}
