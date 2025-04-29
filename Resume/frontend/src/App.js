import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JDList from "./Components/JDList";
import ActiveJobs from "./Components/ActiveJobs";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-center mb-8">JD Analyzer (Agent 1)</h1>
        <Routes>
          <Route path="/" element={<JDList />} />
          <Route path="/active-jobs" element={<ActiveJobs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
