"use client";
import Game from "@/components/game";
import { useSearchParams } from "next/navigation";

export default function History() {
  // const subtopic = useSearchParams().get("subtopic") || "";
  // let [isPending, startTransition] = useTransition();

  return (
    <main>
      <Game topic="history" subtopics="roman" />
    </main>
  );
}
