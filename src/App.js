import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import JobDetailsPage from "./pages/JobDetailsPage/JobDetailsPage";
import JobPost from "./pages/JobPost/JobPost";
//import HomePage from "./pages/HomePage/HomePage";

import './App.css';

function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/jobpost" element={<JobPost/>}/>
                <Route path="/job-details/:id" element={<JobDetailsPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
