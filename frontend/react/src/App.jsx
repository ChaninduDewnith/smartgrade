import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import LoginPage from "./login";
import StudentDashboard from "./studentdashboard";
import AdminDashboard from "./admindashboard";
import ManageTeachers from "./manageteachers";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/manageteachers" element={<ManageTeachers />} />
        
        
        
        
      </Routes>
    </Router>
  );
}

export default App;
