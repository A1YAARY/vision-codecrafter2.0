import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";

const MutualFund = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showAnalyticsSubmenu, setShowAnalyticsSubmenu] = useState(false);

  // Generate dummy mutual fund data
  const generateMutualFundsData = () => {
    const funds = [
      "Motilal Oswal Midcap Fund Direct Growth",
      "Parag Parikh Flexi Cap Fund Direct Growth",
      "SBI PSU Direct Plan Growth",
      "Quant Small Cap Fund Direct Plan Growth",
      "Axis Bluechip Fund Direct Growth",
      "ICICI Prudential Technology Fund Direct Plan"
    ];
    
    return funds.map(fund => {
      const returns1Y = (Math.random() * 30).toFixed(2);
      const returns3Y = (Math.random() * 40).toFixed(2);
      const returns5Y = (Math.random() * 50).toFixed(2);
      const rating = Math.floor(Math.random() * 3) + 3; // 3-5 star rating
      const nav = (Math.random() * 200 + 50).toFixed(2);
      const aum = Math.floor(Math.random() * 50000) + 1000; // AUM in crores
      
      return {
        name: fund,
        risk: Math.random() > 0.5 ? "Very High Risk" : "High Risk",
        type: "Equity",
        rating,
        nav,
        aum,
        returns: {
          "1Y": returns1Y,
          "3Y": returns3Y,
          "5Y": returns5Y
        }
      };
    });
  };

  // Generate dummy top performing funds
  const generateTopPerformingFunds = () => {
    const funds = [
      "Quant Small Cap Fund",
      "Nippon India Small Cap Fund",
      "HDFC Mid-Cap Opportunities Fund",
      "Kotak Emerging Equity Fund"
    ];
    
    return funds.map(fund => {
      const returns1Y = (Math.random() * 20 + 25).toFixed(2); // 25-45%
      const returns3Y = (Math.random() * 30 + 60).toFixed(2); // 60-90%
      const nav = (Math.random() * 200 + 50).toFixed(2);
      
      return {
        name: fund,
        category: ["Small Cap", "Mid Cap", "Large Cap", "Flexi Cap"][Math.floor(Math.random() * 4)],
        nav,
        returns1Y
      };
    });
  };

  // Generate dummy recent NFOs
  const generateRecentNFOs = () => {
    const funds = [
      "Aditya Birla Sun Life Business Cycle Fund",
      "ICICI Prudential Innovation Fund",
      "Kotak Nifty Alpha 50 ETF",
      "SBI Consumption Opportunities Fund"
    ];
    
    return funds.map(fund => {
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + Math.floor(Math.random() * 15) + 5);
      const dateString = endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      
      return {
        name: fund,
        category: ["Thematic", "Sectoral", "Index", "Focused"][Math.floor(Math.random() * 4)],
        startDate: "Mar 1, 2025",
        endDate: dateString
      };
    });
  };

  // State for the data
  const [mutualFunds] = useState(generateMutualFundsData());
  const [topPerformers] = useState(generateTopPerformingFunds());
  const [recentNFOs] = useState(generateRecentNFOs());
  const [fundCount] = useState(1557);

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
            {/* Fund Categories */}
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Fund Categories</h2>
              <a href="#" className="text-green-500">
                All Categories
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-white shadow rounded-lg">
                <p className="text-gray-500">Equity</p>
                <p className="text-xl font-semibold">824 Funds</p>
                <p className="text-green-500">+18.5% Avg. Returns (1Y)</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <p className="text-gray-500">Debt</p>
                <p className="text-xl font-semibold">563 Funds</p>
                <p className="text-green-500">+7.8% Avg. Returns (1Y)</p>
              </div>
              <div className="p-4 bg-white shadow rounded-lg">
                <p className="text-gray-500">Hybrid</p>
                <p className="text-xl font-semibold">170 Funds</p>
                <p className="text-green-500">+12.3% Avg. Returns (1Y)</p>
              </div>
            </div>

            {/* Popular Mutual Funds */}
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Popular Mutual Funds</h2>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">Sort by:</span>
                  <select className="text-green-500 bg-transparent border-none focus:outline-none">
                    <option>Popularity</option>
                    <option>Returns (1Y)</option>
                    <option>Rating</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                {mutualFunds.map((fund, index) => (
                  <div key={index} className="bg-white shadow rounded-lg mb-4 p-4">
                    <div className="flex flex-col md:flex-row justify-between">
                      <div className="flex mb-4 md:mb-0">
                        <div className="bg-blue-500 w-10 h-10 rounded-md flex items-center justify-center text-white mr-4">
                          {fund.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-medium">{fund.name}</h3>
                          <div className="flex text-xs text-gray-500 mt-1">
                            <span className="mr-3">{fund.risk}</span>
                            <span className="mr-3">•</span>
                            <span className="mr-3">{fund.type}</span>
                            <span className="mr-3">•</span>
                            <span>{fund.rating} ★</span>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-6 md:gap-10">
                        <div className="text-center">
                          <div className="font-medium text-lg">{fund.returns["1Y"]}%</div>
                          <div className="text-xs text-gray-500">1Y Return</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium text-lg">{fund.returns["3Y"]}%</div>
                          <div className="text-xs text-gray-500">3Y Return</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium text-lg">{fund.returns["5Y"]}%</div>
                          <div className="text-xs text-gray-500">5Y Return</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between mt-4 pt-4 border-t border-gray-100">
                      <div className="flex mb-4 md:mb-0">
                        <div className="mr-6">
                          <div className="text-sm text-gray-500">NAV</div>
                          <div className="font-medium">₹{fund.nav}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">AUM</div>
                          <div className="font-medium">₹{fund.aum} Cr</div>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-green-500 text-white rounded-md">Invest</button>
                        <button className="px-4 py-2 border border-green-500 text-green-500 rounded-md">+ Add to Cart</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* <div className="mt-4 text-center">
                <button className="px-6 py-2 border border-green-500 text-green-500 rounded-md">
                  View All {fundCount} Funds
                </button>
              </div> */}
            </div>

            {/* Your Investments */}
            {/* <div className="flex justify-between items-center mt-8">
              <h2 className="text-lg font-semibold">Your Investments</h2>
              <a href="#" className="text-green-500">
                View Portfolio
              </a>
            </div>
            <div className="p-4 bg-white shadow rounded-lg mt-4 flex flex-col md:flex-row justify-between">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-500">Total Investment</p>
                <p className="text-xl font-semibold">₹2,25,000</p>
              </div>
              <div className="mb-4 md:mb-0">
                <p className="text-gray-500">Current Value</p>
                <p className="text-xl font-semibold">₹2,68,920</p>
              </div>
              <div>
                <p className="text-gray-500">Total Returns</p>
                <p className="text-xl font-semibold text-green-500">+₹43,920 (19.5%)</p>
              </div>
            </div> */}

            {/* Top Performing Funds */}
            <h2 className="mt-8 text-lg font-semibold">Top Performing Funds</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {topPerformers.map((fund, index) => (
                <div key={index} className="p-4 bg-white shadow rounded-lg">
                  <p className="font-medium">{fund.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{fund.category}</p>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      <p className="text-xs text-gray-500">NAV</p>
                      <p className="font-medium">₹{fund.nav}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">1Y Return</p>
                      <p className="font-medium text-green-500">{fund.returns1Y}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MutualFund;