import React, { useState, useEffect, useRef } from "react";
import UserDetailsCard from "../components/UserDetailsCard";
import Navbar from "../components/Navbar";
import UserIcon from "../components/UserIcon";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import jsPDF from "jspdf";

function UserDetails() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.user);
  console.log(userData);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

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

  // Function to generate PDF report
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("User Portfolio Report", 20, 20);
    doc.text(`Name: ${userData?.name || "N/A"}`, 20, 40);
    doc.text(`Email: ${userData?.email || "N/A"}`, 20, 50);
    doc.text(`Investments: ${userData?.investments || "No investments recorded"}`, 20, 60);
    doc.text(`Portfolio Performance: ${userData?.performance || "No data available"}`, 20, 70);
    doc.save("User_Report.pdf");
  };

  return (
    <div className="min-h-screen flex bg-[#10002b]">
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full bg-[#10002b] text-white z-50 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out w-64 xl:static xl:translate-x-0`}
    >
      <Sidebar />
    </div>

    <div className="flex-1 bg-gray-100">
      <Navbar />

      <div className="mt-5">
        <button
          className="xl:hidden text-gray-800 ml-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <svg
            className="w-7 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                sidebarOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <div className="flex items-center justify-center mt-6 mb-6">
          <div className="flex flex-col w-5/12 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <UserIcon data={userData} />
            <UserDetailsCard data={userData} />

            {/* PDF Download Button */}
            <button
              onClick={generatePDF}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Download PDF Report
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default UserDetails;
