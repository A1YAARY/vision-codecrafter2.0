import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";
import UserDetails from "./components/UserDetails"

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/userdetails" element={<UserDetails />} />
    </Routes>
  );
};
export default AppRoutes;
