import Link from "next/link";
import { useState } from "react";

const historySubtopics = ["roman", "mesopotamia", "ancient-egypt"];

export default function SubtopicSelection({ topic }: { topic: string }) {
  const [selectedSubtopics, setSelectedSubtopics] = useState<string[]>([]);

  let subtopics: string[] = [];
  if (topic === "history") subtopics = historySubtopics;

  const toggleSubtopic = (subtopic: string) => {
    if (selectedSubtopics.includes(subtopic)) {
      setSelectedSubtopics(
        selectedSubtopics.filter((item) => item !== subtopic)
      );
    } else {
      setSelectedSubtopics([...selectedSubtopics, subtopic]);
    }
  };

  return (
    <div>
      <h1>Which subtopics interest you?</h1>
      <ul id="subtopics-list">
        {subtopics.map((subtopic) => (
          <li key={subtopic}>
            <input
              type="checkbox"
              name={subtopic}
              checked={selectedSubtopics.includes(subtopic)}
              onChange={() => toggleSubtopic(subtopic)}
            />
            {subtopic}
          </li>
        ))}
      </ul>
      <Link href={`/${topic}?subtopics=${selectedSubtopics.join(",")}`}>
        <button>Start</button>
      </Link>
    </div>
  );
}
