import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import DashboardOverview from "../components/DashboardOverview";
import QuestionView from "../components/QuestionView";
import Leaderboard from "../components/Leaderboard";
import NewPoll from "../components/NewPoll";
import NotFound from "../components/NotFound";
import Navbar from "../components/Navbar";

const PrivateRoutes = () => {
  return (
    <Router>
      <Navbar />

      <Box bg={"gray.100"} minH={"calc(100vh - 64px)"} paddingTop="64px">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/error" element={<NotFound />} />
          <Route exact path="/" element={<DashboardOverview />} />
          <Route exact path="/new" element={<NewPoll />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/questions/:id" element={<QuestionView />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default PrivateRoutes;
