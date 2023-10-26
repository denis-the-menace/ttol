"use server";

export default async function postVote({
  topic,
  id,
  vote
}: {
  topic: string;
  id: number;
  vote: string;
}) {
  const res = await fetch(`http://localhost:8000/${topic}/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: vote,
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
}
