import React, { useState } from "react";

import {
  Button,
  Flex,
  Box,
  Text,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";

const NewPoll = () => {
  const toast = useToast();
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");

  const handleSubmit = () => {
    if (!optionOne.trim() || !optionTwo.trim()) {
      toast({
        title: "Info",
        description: "All Fields are required",
        status: "info",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    } else {
      console.log(optionOne, optionTwo);
    }
  };

  return (
    <Flex minH={"calc(100vh - 64px)"} align={"center"} justify={"center"}>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        rounded={"md"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading
          textAlign="center"
          color="black"
          lineHeight={1.1}
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          Enter poll options
        </Heading>
        <Box>
          <Text color="black" fontWeight={600} textAlign="center">
            Would you rather?...
          </Text>
          <Input
            variant="flushed"
            placeholder="enter option 1"
            _placeholder={{ color: "gray.500" }}
            type="text"
            borderColor="blue.400"
            color="black"
            value={optionOne}
            onChange={(e) => setOptionOne(e.target.value)}
          />
          <Text mt={2} color="black" fontWeight={600} textAlign="center">
            Or
          </Text>
          <Input
            variant="flushed"
            type="text"
            placeholder="enter option 2"
            _placeholder={{ color: "gray.500" }}
            borderColor="blue.400"
            color="black"
            value={optionTwo}
            onChange={(e) => setOptionTwo(e.target.value)}
          />
        </Box>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default NewPoll;
