"use server";

export default async function getData({
  topic,
  subtopics,
}: {
  topic: string;
  subtopics: string;
}) {
  const res = await fetch(
    `http://localhost:8000/${topic}/random?subtopic=${subtopics}`,
    { next: { revalidate: 0 } }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}
