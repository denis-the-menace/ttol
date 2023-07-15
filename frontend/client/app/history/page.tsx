import Question from "@/components/question";

async function getData() {
  "use server";
  const res = await fetch("http://localhost:8000/history/random");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default async function History() {
  const question = await getData();
  return (
    <main>
      <Question
        id={question.id}
        topic={question.topic}
        subtopic={question.subtopic}
        truth1={question.truth1}
        truth2={question.truth2}
        lie={question.lie}
        votes={question.votes}
      />
    </main>
  );
}
