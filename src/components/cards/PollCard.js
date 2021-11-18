import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatQuestionHelper } from "../../utils/helpers";
import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Stack,
  Radio,
  RadioGroup,
  useToast,
} from "@chakra-ui/react";
import { handleSaveAnswer } from "../../redux/actions/questions.actions";

const PollCard = ({ questionId }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const state = useSelector((state) => state);
  const { authedUser, users, questions } = state;

  const [data, setData] = useState({});
  const [value, setValue] = React.useState("");

  const formatQuestionHandler = () => {
    let question = questions[questionId];
    const formated = formatQuestionHelper(
      question,
      users[question?.author],
      authedUser
    );
    setData(formated);
  };

  useEffect(() => {
    formatQuestionHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // console.log(data, "datttttaaa");

  const handleSubmit = () => {
    if (value === "") {
      toast({
        title: "Info",
        description: "Please select an option",
        status: "info",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
      return;
    } else {
      dispatch(handleSaveAnswer(questionId, value));
    }
  };

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
          <Avatar size="xl" name={data?.name} src={data?.avatarURL} />
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
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="column">
              <Radio borderColor="black" value="optionOne">
                {data?.optionOneText}
              </Radio>
              <Text textAlign="center" my={1}>
                Or
              </Text>
              <Radio borderColor="black" value="optionTwo">
                {data?.optionTwoText}
              </Radio>
            </Stack>
          </RadioGroup>
          <Button
            onClick={() => handleSubmit()}
            bg={"blue.400"}
            color={"white"}
            _hover={{ bg: "blue.500" }}
            _active={{ bg: "blue.600" }}
            mt={4}
          >
            Vote
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PollCard;
