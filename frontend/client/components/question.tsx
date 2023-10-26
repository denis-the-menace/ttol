import Fact from "./fact";

export type QuestionType = {
  id: number;
  topic: string;
  subtopic: string;
  votes: number;
  lie_id: number;
};

export type FactType = {
  id: number;
  question_id: number;
  answer_text: string;
};

export default function Question({
  question,
  facts,
  onShow,
}: {
  question: QuestionType;
  facts: FactType[];
  onShow: (state: boolean) => void;
}) {
  const checkAnswer = (fact: FactType) => {
    if (question.lie_id === fact.id) {
      onShow(true);
      return;
    }
    onShow(false);
    return;
  };

  return (
    <div>
      <h1 className="text-4xl">{question.topic}</h1>
      <h2 className="text-2xl mb-2">{"Roman"}</h2>
      <ul>
        {facts.map((fact: FactType) => (
          <Fact
            key={fact.id}
            text={fact.answer_text}
            onChoose={() => checkAnswer(fact)}
          />
        ))}
      </ul>
    </div>
  );
}
