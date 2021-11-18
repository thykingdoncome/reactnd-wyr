import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { List, Flex, Text, Box } from "@chakra-ui/react";
import LeaderboardCard from "./cards/LeaderboardCard";

const Leaderboard = () => {
  const state = useSelector((state) => state);
  const { users } = state;
  const [usersData, setUsersData] = useState([]);

  const formatUserHandler = () => {
    const usersArr = Object.keys(users);
    const formated = usersArr.map((id) => ({
      id,
      name: users[id]?.name,
      avatarURL: users[id]?.avatarURL,
      pollsCreated: users[id]?.questions?.length,
      pollsAnswered: Object.keys(users[id]?.answers)?.length,
      score:
        Object.keys(users[id]?.answers)?.length + users[id]?.questions?.length,
    }));

    const sorted = formated.sort((a, b) => b.score - a.score);

    setUsersData(sorted);
  };

  useEffect(() => {
    formatUserHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex justifyContent="center" minHeight="calc(100vh - 64px)" py={5}>
      <Box py={5} px={4} shadow="inner" borderRadius={6} height="fit-content">
        <Text as="h1" fontWeight={600} color="black" fontSize={24}>
          Leaderboard
        </Text>
        <List>
          {usersData &&
            usersData.map((userData) => (
              <LeaderboardCard key={userData?.id} data={userData} />
            ))}
        </List>
      </Box>
    </Flex>
  );
};

export default Leaderboard;
