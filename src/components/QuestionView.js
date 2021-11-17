import React from "react";
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

  if (!questions[param.id]) {
    return <Navigate to="/error" />;
  }

  const cardToDisplay = () =>
    users[authedUser].answers[param.id] ? (
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
      </Flex>
    </Container>
  );
};

export default QuestionView;
