import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatQuestion } from "../../utils/helpers";
import { Box, Flex, Avatar, Text, Progress } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const ResultCard = ({ questionId }) => {
  const state = useSelector((state) => state);
  const { authedUser, users, questions } = state;
  const [data, setData] = useState({});
  const [totalVotes, setTotalVotes] = useState(0);
  const [userAnsweredOne, setUserAnsweredOne] = useState(false);
  const [userAnsweredTwo, setUserAnsweredTwo] = useState(false);

  const formatQuestionHandler = () => {
    let question = questions[questionId];
    const formated = formatQuestion(
      question,
      users[question?.author],
      authedUser
    );

    const total =
      formated?.optionOneVotes?.length + formated?.optionTwoVotes?.length;
    const userAnser1 = formated?.optionOneVotes.includes(authedUser);
    const userAnser2 = formated?.optionTwoVotes.includes(authedUser);

    setData(formated);
    setTotalVotes(total);
    setUserAnsweredOne(userAnser1);
    setUserAnsweredTwo(userAnser2);
  };

  const optionOneVotesPercent =
    (data?.optionOneVotes?.length / totalVotes) * 100;
  const optionTwoVotesPercent =
    (data?.optionTwoVotes?.length / totalVotes) * 100;

  useEffect(() => {
    formatQuestionHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
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

          <Flex
            shadow={userAnsweredOne ? "lg" : "inner"}
            py={4}
            px={2}
            borderRadius={4}
            mb={2}
            width="95%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            bg={userAnsweredOne ? "green.200" : "inherit"}
            position="relative"
          >
            {data?.optionOneText}
            <Progress
              width="90%"
              value={optionOneVotesPercent}
              bg="gray"
              borderRadius={4}
            />
            <Text>{`${data?.optionOneVotes?.length}/${totalVotes}`} votes</Text>
            {data && userAnsweredOne && (
              <>
                <Text
                  position="absolute"
                  bottom={0}
                  right={0}
                  p={2}
                  fontSize={10}
                >
                  You voted
                </Text>

                <Flex
                  p={1}
                  borderRadius="full"
                  bg="red.600"
                  position="absolute"
                  top={-1}
                  right={-1}
                >
                  <CheckIcon color="green.500" />
                </Flex>
              </>
            )}
          </Flex>
          <Flex
            shadow={userAnsweredTwo ? "lg" : "inner"}
            py={4}
            px={2}
            borderRadius={4}
            mb={2}
            width="95%"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            position="relative"
            bg={userAnsweredTwo ? "green.200" : "inherit"}
          >
            {data?.optionTwoText}
            <Progress
              width="90%"
              value={optionTwoVotesPercent}
              bg="gray"
              borderRadius={4}
            />
            <Text>
              {" "}
              {`${data?.optionTwoVotes?.length}/${totalVotes}`} votes
            </Text>
            {data && userAnsweredTwo && (
              <>
                <Text
                  position="absolute"
                  bottom={0}
                  right={0}
                  p={2}
                  fontSize={10}
                >
                  You voted
                </Text>

                <Flex
                  p={1}
                  borderRadius="full"
                  bg="red.600"
                  position="absolute"
                  top={-1}
                  right={-1}
                >
                  <CheckIcon color="green.500" />
                </Flex>
              </>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ResultCard;
