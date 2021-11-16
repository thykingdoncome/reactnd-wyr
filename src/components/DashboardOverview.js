import React, { useEffect, useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import QuestionsList from "./QuestionsList";
import Navbar from "./Navbar";

const DashboardOverview = () => {
  const state = useSelector(state => state);
  const { authedUser, users, questions } = state;
  const [answered, setAnswered] = useState([]);
  const [unanswered, setUnnswered] = useState([]);

  useEffect(() => {
    const getAnsweredQuestions = () => {
      const answeredArray = Object.keys(questions)
        .filter(id => users[authedUser].answers[id])
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

      const unAnsweredArray = Object.keys(questions)
        .filter(id => !users[authedUser].answers[id])
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

      setAnswered(answeredArray);
      setUnnswered(unAnsweredArray);
    };

    getAnsweredQuestions();
  }, []);

  return (
    <div>
      <Navbar userName={users[authedUser].name} />
      <Box background='cyan.300' minHeight='100vh'>
        <Tabs isFitted variant='enclosed'>
          <TabList mb='1em'>
            <Tab>Unanswered Questions</Tab>
            <Tab>Answered Questions</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {/* <p>Unanswered Questions</p> */}
              <Box>
                <QuestionsList questionIds={unanswered} />
              </Box>
            </TabPanel>
            <TabPanel>
              <p>Answered Questions</p>
              <QuestionsList questionIds={answered} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
};

export default DashboardOverview;
