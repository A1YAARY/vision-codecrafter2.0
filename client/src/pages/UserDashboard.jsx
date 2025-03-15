import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BrushBarChart from "../components/analytics/BrushBarChart";


const UserDashBoard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Sample Data for holdings and mutual funds


  const chartData = [
    // 2023
    { name: 'Jan 23', value: 290 },
    { name: 'Feb 23', value: 305 },
    { name: 'Mar 23', value: 295 }, // slight dip
    { name: 'Apr 23', value: 315 },
    { name: 'May 23', value: 330 },
    { name: 'Jun 23', value: 345 },
    { name: 'Jul 23', value: 335 }, // small drop
    { name: 'Aug 23', value: 360 },
    { name: 'Sep 23', value: 350 }, // fluctuation down
    { name: 'Oct 23', value: 385 },
    { name: 'Nov 23', value: 370 }, // dip before year-end rise
    { name: 'Dec 23', value: 410 },
    // 2024
    { name: 'Jan 24', value: 425 },
    { name: 'Feb 24', value: 415 }, // dip after year start
    { name: 'Mar 24', value: 440 },
    { name: 'Apr 24', value: 460 },
    { name: 'May 24', value: 445 }, // fluctuation down
    { name: 'Jun 24', value: 470 },
    { name: 'Jul 24', value: 485 },
    { name: 'Aug 24', value: 475 }, // slight drop
    { name: 'Sep 24', value: 495 },
    { name: 'Oct 24', value: 510 },
    { name: 'Nov 24', value: 500 }, // dip before final rise
    { name: 'Dec 24', value: 530 },
];

  


  const holdings = [
    {
      name: "Reliance Industries",
      invested: 10000,
      current: 9500,
      returns: -500,
    },
    { name: "TCS", invested: 5000, current: 5500, returns: 500 },
  ];

  const mutualFunds = [
    { name: "SBI Bluechip Fund", invested: 7000, current: 7500, returns: 500 },
    { name: "HDFC Small Cap", invested: 8000, current: 7800, returns: -200 },
  ];

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

        <div className="p-6">
          {/* Indices Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-white shadow rounded-lg">
              <p className="text-gray-500">NIFTY</p>
              <p className="text-xl font-semibold">22,397.20</p>
              <p className="text-red-500">-73.30 (-0.33%)</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <p className="text-gray-500">SENSEX</p>
              <p className="text-xl font-semibold">73,828.91</p>
              <p className="text-red-500">-200.85 (-0.27%)</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <p className="text-gray-500">BANKNIFTY</p>
              <p className="text-xl font-semibold">48,060.40</p>
              <p className="text-green-500">+3.75 (0.01%)</p>
            </div>
          </div>
          <div className="p-4 bg-white shadow rounded-lg mb-6">
          <div style={{ padding: '20px' }}>
      <h1>M Data Visualization</h1>
      <BrushBarChart 
        data={chartData}
        xKey="name"
        yKey="value"
        barColor="#82ca9d"
      />
    </div>
    <div>
    
    </div>
          </div>
          {/* Holdings Section */}
          <div className="p-4 bg-white shadow rounded-lg mb-6">
            <h2 className="text-lg font-semibold mb-4">Current Holdings</h2>
            {holdings.map((holding, index) => (
              <div key={index} className="flex justify-between border-b py-2">
                <p>{holding.name}</p>
                <p>Invested: ₹{holding.invested}</p>
                <p>Current: ₹{holding.current}</p>
                <p
                  className={
                    holding.returns >= 0 ? "text-green-500" : "text-red-500"
                  }
                >
                  {holding.returns >= 0 ? "+" : ""}₹{holding.returns}
                </p>
              </div>
            ))}
          </div>

          {/* Mutual Funds Section */}
          <div className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Mutual Funds</h2>
            {mutualFunds.map((fund, index) => (
              <div key={index} className="flex justify-between border-b py-2">
                <p>{fund.name}</p>
                <p>Invested: ₹{fund.invested}</p>
                <p>Current: ₹{fund.current}</p>
                <p
                  className={
                    fund.returns >= 0 ? "text-green-500" : "text-red-500"
                  }
                >
                  {fund.returns >= 0 ? "+" : ""}₹{fund.returns}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashBoard;
