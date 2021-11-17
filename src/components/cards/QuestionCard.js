import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatQuestion } from "../../utils/helpers";
import { Box, Flex, Avatar, Text, Button, ListItem } from "@chakra-ui/react";

const QuestionCard = ({ questionId, isAnswered }) => {
  const state = useSelector((state) => state);
  const { authedUser, users, questions } = state;

  const [data, setData] = useState({});

  const formatQuestionHandler = () => {
    let question = questions[questionId];
    const formated = formatQuestion(
      question,
      users[question?.author],
      authedUser
    );
    setData(formated);
  };

  useEffect(() => {
    formatQuestionHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListItem
      shadow="md"
      padding={4}
      marginBottom={4}
      borderRadius={4}
      border="currentcolor"
      borderStyle="solid"
      minWidth={480}
    >
      <Text
        color="black"
        fontWeight={600}
        align="center"
        mb={2}
        pb={2}
        style={{ borderBottom: "1px solid black" }}
      >
        Would you rather?
      </Text>
      <Flex alignItems="center">
        <Box mr={4}>
          <Avatar size="xl" name={data?.name} />
        </Box>
        <Flex
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          width="100%"
        >
          <Text color="blue.400" fontWeight={600} mb={2}>
            Asked by: {data?.name}
          </Text>
          <Text color="black" mb={4}>
            {data?.optionOneText}...
          </Text>
          <Button
            as={Link}
            to={`/questions/${data?.id}`}
            bg={"blue.400"}
            color={"white"}
            _hover={{ bg: "blue.500" }}
            _active={{ bg: "blue.600" }}
          >
            {isAnswered ? "View results" : "Answer poll"}
          </Button>
        </Flex>
      </Flex>
    </ListItem>
  );
};

export default QuestionCard;
