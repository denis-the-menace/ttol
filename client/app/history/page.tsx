"use client";
import Game from "@/components/game";
import { useSearchParams } from "next/navigation";

export default function History() {
  const subtopics = useSearchParams().get("subtopics") || "";

  return (
    <main>
      <Game topic="history" subtopics={subtopics} />
    </main>
  );
}
