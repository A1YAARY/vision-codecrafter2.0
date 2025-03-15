import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";

const Stock = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showAnalyticsSubmenu, setShowAnalyticsSubmenu] = useState(false);

  // Generate dummy stock data
  const generateStockData = () => {
    const companies = [
      "Data Patterns (India)",
      "Mangalore Refinery",
      "BSE",
      "IndusInd Bank",
      "Kalyan Jewellers",
      "Adani Green Energy",
    ];

    return companies.map((company) => {
      const isPositive = Math.random() > 0.3;
      const price = Math.floor(Math.random() * 4000) + 100;
      const change = (Math.random() * 100).toFixed(2);
      const percentChange = (Math.random() * 5).toFixed(2);

      return {
        name: company,
        price: price.toFixed(2),
        change: isPositive ? change : -change,
        percentChange: isPositive ? percentChange : -percentChange,
        isPositive,
      };
    });
  };

  // Generate dummy top gainers
  const generateTopGainers = () => {
    const companies = [
      "Avenue Supermarts",
      "Adani Green Energy",
      "Varun Beverages",
      "Bank of Baroda",
    ];

    return companies.map((company) => {
      const price = Math.floor(Math.random() * 4000) + 100;
      const change = (Math.random() * 100).toFixed(2);
      const percentChange = (Math.random() * 4).toFixed(2);

      return {
        name: company,
        price: price.toFixed(2),
        change: change,
        percentChange: percentChange,
      };
    });
  };

  // Generate dummy top losers
  const generateTopLosers = () => {
    const companies = [
      "Samvardhana Motherson",
      "Shriram Finance",
      "Macrotech Devs",
      "Bank of Baroda",
    ];

    return companies.map((company) => {
      const price = Math.floor(Math.random() * 4000) + 100;
      const change = (Math.random() * 100).toFixed(2);
      const percentChange = (Math.random() * 4).toFixed(2);

      return {
        name: company,
        price: price.toFixed(2),
        change: -change,
        percentChange: -percentChange,
      };
    });
  };

  // State for the data
  const [stocks] = useState(generateStockData());
  const [topGainers] = useState(generateTopGainers());
  const [topLosers] = useState(generateTopLosers());

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  const toggleAnalyticsSubmenu = () => {
    setShowAnalyticsSubmenu(!showAnalyticsSubmenu);
  };

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

          <div className="p-6">
            {/* Indices Section */}
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Indices</h2>
              <a href="#" className="text-green-500">
                All indices
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
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

            {/* Most Traded Stocks */}
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Most Traded Stocks</h2>
                <a href="#" className="text-green-500">
                  View all
                </a>
              </div>

              <div className="mt-4 bg-white shadow rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left py-3 px-4 text-gray-500 font-normal text-sm">
                        COMPANY
                      </th>
                      <th className="text-right py-3 px-4 text-gray-500 font-normal text-sm">
                        MARKET PRICE
                      </th>
                      <th className="text-right py-3 px-4 text-gray-500 font-normal text-sm">
                        CHANGE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {stocks.map((stock, index) => (
                      <tr key={index} className="border-t border-gray-200">
                        <td className="py-3 px-4">
                          <div className="font-medium">{stock.name}</div>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="font-medium">₹{stock.price}</div>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div
                            className={
                              stock.isPositive
                                ? "text-green-500"
                                : "text-red-500"
                            }
                          >
                            {stock.isPositive ? "+" : ""}
                            {stock.change} ({stock.isPositive ? "+" : ""}
                            {stock.percentChange}%)
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
