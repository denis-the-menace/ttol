"use client";
import { useState } from "react";
import TopicSelection from "./topic-selection";
import SubtopicSelection from "./subtopic-selection";

export default function Home() {
  const [topic, setTopic] = useState<string | null>(null);

  return (
    <main className="flex flex-col justify-center items-center p-24">
      {topic === null ? (
        <TopicSelection onChoose={(selectedTopic) => setTopic(selectedTopic)} />
      ) : (
        <SubtopicSelection topic={topic} />
      )}
    </main>
  );
}
