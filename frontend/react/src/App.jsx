import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import LoginPage from "./Login";
import StudentDashboard from "./studentdashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        
      </Routes>
    </Router>
  );
}

export default App;
