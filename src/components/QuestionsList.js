import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import QuestionCard from "./QuestionCard";

const QuestionsList = ({ questionIds }) => {
  const state = useSelector(state => state);
  const { authedUser, users, questions } = state;

  // console.log(questions[questionIds], "pam pam pam");
  // console.log(questionIds, "pam pam pam");

  const mapIdToQ = () => {
    const quest = questionIds.map((q, idx) => questions[q]);
    return quest;
  };

  useEffect(() => {
    // mapIdToQ();
  });

  return (
    <div>
      <ul>
        {questionIds.map(qID => (
          <QuestionCard key={qID} questionId={qID} />
        ))}
      </ul>
    </div>
  );
};

export default QuestionsList;
