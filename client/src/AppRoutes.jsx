import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserDashBoard from "./pages/UserDashboard";
import UserDetails from "./pages/UserDetails"
import Stock from "./pages/Stock"
import MutualFund from "./pages/MutualFund";
import Bonds from "./pages/Bonds";
import Explore from "./pages/Explore";
import LandingPage from "./pages/Landing";
import Insurance from "./pages/Insurance";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<UserDashBoard />} />
      <Route path="/userdetails" element={<UserDetails />} />
      <Route path="/stock" element={<Stock />} />
      <Route path="/mutualfunds" element={<MutualFund/>} />
      <Route path="/bonds" element={<Bonds/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/insurance" element={<Insurance />} />
     
    </Routes>
  );
};
export default AppRoutes;
