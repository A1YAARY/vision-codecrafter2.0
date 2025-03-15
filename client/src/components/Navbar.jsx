import React, { useState, useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/Logo.svg";
import userIcon from "../assets/user.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const userDropdownRef = useRef(null);
  const navigate = useNavigate();

  // Get userName and email from Redux
  //   const userName = useSelector((state) => state.user.name);
  //   const email = useSelector((state) => state.user.email);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target)
      ) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center gap-4">
          <a
            href="/dashboard"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
          </a>
          <a href="#" className="text-green-500">
            Explore
          </a>
          <a href="#" className="text-gray-700">
            Dashboard
          </a>
        </div>
        <input
          type="text"
          placeholder="Search Groww..."
          className="border p-2 rounded-lg"
        />
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full"
          onClick={() => navigate("/userdetails")}>
            S
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
