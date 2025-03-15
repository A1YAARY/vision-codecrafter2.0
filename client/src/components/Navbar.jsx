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
      <nav className="h-7/12 flex items-center justify-between p-4 bg-white shadow-md">
       
        <input
          type="text"
          placeholder="Search Stocks..."
          className="border p-2 rounded-lg w-[45%]"
        />
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full"
          onClick={() => navigate("/userdetails")}>
            J
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
