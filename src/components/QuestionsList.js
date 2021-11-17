import React from "react";
import QuestionCard from "./cards/QuestionCard";
import { List, Flex } from "@chakra-ui/react";

const QuestionsList = ({ questionIds, isAnswered }) => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <List>
        {questionIds.map((qID) => (
          <QuestionCard key={qID} questionId={qID} isAnswered={isAnswered} />
        ))}
      </List>
    </Flex>
  );
};

export default QuestionsList;
