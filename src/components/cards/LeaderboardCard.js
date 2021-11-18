import React from "react";
import { ListItem, Text, Flex, Box, Avatar } from "@chakra-ui/react";

const LeaderboardCard = ({ data }) => {
  const { name, score, pollsAnswered, pollsCreated, avatarURL } = data;

  return (
    <ListItem
      minWidth="480px"
      shadow="md"
      py={5}
      px={5}
      borderRadius={4}
      my={6}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Avatar name={name} size="xl" src={avatarURL} />
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="50%"
          borderX="1px solid blue"
        >
          <Text
            mb={3}
            fontWeight={800}
            textDecoration="underline"
            color="blue.400"
          >
            {name}
          </Text>
          <Text color="black" mb={3}>
            Answered Questions: {pollsAnswered}
          </Text>
          <Text color="black">Created Questions: {pollsCreated}</Text>
        </Flex>
        <Box>
          <Text color="black" textAlign="center" fontWeight={600}>
            Score
          </Text>
          <Flex
            height={20}
            width={20}
            justifyContent="center"
            alignContent="center"
            bg="blue.400"
            rounded="full"
          >
            <Text
              as="h2"
              my="auto"
              fontWeight={800}
              color="white"
              fontSize={25}
            >
              {score}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </ListItem>
  );
};

export default LeaderboardCard;
