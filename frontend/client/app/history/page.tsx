import Question from "@/components/question";

async function getData() {
  "use server";
  const res = await fetch(
    "http://localhost:8000/history/random?subtopic=roman"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export default async function History() {
  const question = await getData();
  console.log(question);
  return (
    <div className="flex items-center justify-center">
      <Question
        facts={[
          {
            questionId: question[0].question_id,
            text: question[0].answer_text,
            isTruth: question[0].isTruth,
          },
          {
            questionId: question[1].question_id,
            text: question[1].answer_text,
            isTruth: question[1].isTruth,
          },
          {
            questionId: question[2].question_id,
            text: question[2].answer_text,
            isTruth: question[2].isTruth,
          },
        ]}
        topic="History"
        subtopic="query stringi"
      />
    </div>
  );
}
