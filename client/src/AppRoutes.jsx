import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";
import UserDetails from "./pages/UserDetails"
import Stock from "./pages/Stock"
import MutualFund from "./pages/MutualFund";
import Bonds from "./pages/Bonds";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/userdetails" element={<UserDetails />} />
      <Route path="/stock" element={<Stock />} />
      <Route path="/mutualfunds" element={<MutualFund/>} />
      <Route path="/bonds" element={<Bonds/>} />
     
    </Routes>
  );
};
export default AppRoutes;
