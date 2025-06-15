import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import LoginPage from "./pages/login";
import StudentDashboard from "./pages/studentdashboard";
import AdminDashboard from "./pages/admindashboard";
import ManageTeachers from "./pages/manageteachers";
import TeacherRegister from "./pages/addteachers";
import StudentRegister from "./pages/studentregister";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/manageteachers" element={<ManageTeachers />} />
        <Route path="/registerteachers" element={<TeacherRegister />} />
        <Route path="/studentdashboard" element={<StudentDashboard/>}/>
        <Route path="/studentregister" element={<StudentRegister/>}/>

        
        
        
      </Routes>
    </Router>
  );
}

export default App;
