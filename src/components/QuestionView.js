import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import PollCard from "./cards/PollCard";
import ResultCard from "./cards/ResultCard";

const QuestionView = () => {
  const state = useSelector((state) => state);
  const { users, authedUser, questions } = state;

  const param = useParams();

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setAnswers(users[authedUser].answers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, users]);

  if (!questions[param.id]) {
    return <Navigate to="/error" />;
  }

  const cardToDisplay = () =>
    answers.hasOwnProperty(param.id) ? (
      <ResultCard questionId={param?.id} />
    ) : (
      <PollCard questionId={param?.id} />
    );

  return (
    <Container color="black">
      <Flex
        style={{ minHeight: "calc(100vh - 64px)" }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {cardToDisplay()}
        {/* {} */}
      </Flex>
    </Container>
  );
};

export default QuestionView;
