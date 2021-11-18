import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import QuestionsList from "./QuestionsList";

const DashboardOverview = () => {
  const state = useSelector((state) => state);
  const { authedUser, users, questions } = state;
  const [answered, setAnswered] = useState([]);
  const [unanswered, setUnnswered] = useState([]);

  useEffect(() => {
    const getAnsweredQuestions = () => {
      const answeredArray = Object.keys(questions)
        .filter((id) => users[authedUser].answers[id])
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

      const unAnsweredArray = Object.keys(questions)
        .filter((id) => !users[authedUser].answers[id])
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

      setAnswered(answeredArray);
      setUnnswered(unAnsweredArray);
    };

    getAnsweredQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Box minH={"calc(100vh - 64px)"} width="50%" margin="auto">
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab color="black" fontWeight={800}>
              Unanswered Questions
            </Tab>
            <Tab color="blackAlpha.900" fontWeight={800}>
              Answered Questions
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box>
                <QuestionsList questionIds={unanswered} isAnswered={false} />
              </Box>
            </TabPanel>
            <TabPanel>
              <QuestionsList questionIds={answered} isAnswered={true} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

export default DashboardOverview;
