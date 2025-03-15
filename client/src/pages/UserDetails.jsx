import React, { useState, useEffect, useRef } from "react";
import UserDetailsCard from "../components/UserDetailsCard";
import Navbar from "../components/Navbar";
import UserIcon from "../components/UserIcon";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";


function UserDetails() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };
  const toggleAnalyticsSubmenu = () =>
    setShowAnalyticsSubmenu(!showAnalyticsSubmenu);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="min-h-screen flex">
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-gray-100 text-white z-50 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 xl:static xl:translate-x-0`}
      >
        <Sidebar />
      </div>

      <div className="flex-1 bg-gray-100">
        <Navbar />
        <div className=" flex items-center justify-center mt-6 mb-6">
          <div className="flex flex-col w-5/12  bg-white rounded-lg shadow-sm border border-gray-100">
            <UserIcon />
            <div className="">
              <UserDetailsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
