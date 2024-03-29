"use client";
import { useState, useEffect } from "react";
import getData from "./get-data";
import Question from "./question";
import { QuestionType, FactType } from "./question";
import postVote from "./post-vote";
import { motion, AnimatePresence } from "framer-motion";

interface QuestionData {
  question: QuestionType;
  answers: FactType[];
}

export default function Game({
  topic,
  subtopics,
}: {
  topic: string;
  subtopics: string;
}) {
  const [data, setData] = useState<QuestionData | null>(null);
  const [onNext, setOnNext] = useState(false);
  const [isVoted, setIsVoted] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  const nextQuestion = () => {
    setIsRendered(false);
    getData({ topic, subtopics }).then((data) => {
      setData(data);
      setIsVoted(false);
    });
    setTimeout(() => {
      setIsRendered(true);
    }, 1000);

    // Uncheck fact.
    // const radioButtons = document.querySelectorAll("input[type='radio']");
    // radioButtons.forEach(
    //   (radioButton) => ((radioButton as HTMLInputElement).checked = false),
    // );

    setOnNext(false);
  };

  // Disble the buttons when voted.
  const handleClick = (vote: string) => {
    if (data && vote !== "indifferent") {
      postVote({
        topic: data.question.topic,
        id: data.question.id,
        vote: vote,
      });
      // setIsVoted(true);
    }
  };

  //bu kod niye var???
  //////////////////////////// lower case kodunu cikar
  useEffect(() => {
    getData({ topic, subtopics }).then((data) => {
      setData(data);
    });
  }, [topic, subtopics]);

  return (
    <div>
      <div className="flex-row items-center justify-center p-2 border-solid border-2 rounded-md border-black">
        <AnimatePresence>
          {isRendered && data ? (
            <motion.div
              key={data.question.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Question
                question={{
                  id: data.question.id,
                  topic: data.question.topic,
                  subtopic: data.question.subtopic,
                  votes: data.question.votes,
                  lie_id: data.question.lie_id,
                }}
                facts={[
                  {
                    id: data.answers[0].id,
                    question_id: data.answers[0].question_id,
                    answer_text: data.answers[0].answer_text,
                  },
                  {
                    id: data.answers[1].id,
                    question_id: data.answers[1].question_id,
                    answer_text: data.answers[1].answer_text,
                  },
                  {
                    id: data.answers[2].id,
                    question_id: data.answers[2].question_id,
                    answer_text: data.answers[2].answer_text,
                  },
                ]}
                onShow={(isAnswerCorrect) => {
                  // if (isAnswerCorrect) alert("is correct");
                  // else alert("is incorrect");
                  setOnNext(true);
                }}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      <div className="text-lg">
        <div
          className={`flex flex-col p-2 ${
            onNext ? "animate-fade-in-top-to-bottom" : "invisible"
          }`}
        >
          <div className="flex flex-row">
            <div>How would you rate this question?</div>
            <div className="ml-auto">
              <button
                className="mr-1"
                disabled={isVoted}
                onClick={() => handleClick("downvote")}
              >
                bad
              </button>
              <button
                className="mr-1"
                disabled={isVoted}
                onClick={() => handleClick("indifferent")}
              >
                ok
              </button>
              <button
                className="mr-1"
                disabled={isVoted}
                onClick={() => handleClick("upvote")}
              >
                good
              </button>
            </div>
          </div>
          <button
            className="ml-auto"
            onClick={() => {
              nextQuestion();
            }}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}
