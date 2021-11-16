import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardOverview from "../components/DashboardOverview";

const PrivateRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<DashboardOverview />} />
      </Routes>
    </Router>
  );
};

export default PrivateRoutes;
