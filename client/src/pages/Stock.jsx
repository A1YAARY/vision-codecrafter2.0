import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BuyAndSell from "../components/BuyAndSell";

const Stock = () => {
  const [selectedStock, setSelectedStock] = useState(null);
  const [selectedMarket, setSelectedMarket] = useState("Indian"); // Default market
  const navigate = useNavigate();
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

  // Dummy Indices Data
  const generateIndicesData = (market) => {
    const indicesData = {
      Indian: [
        {
          name: "NIFTY",
          value: 22397.2,
          change: -73.3,
          percentChange: "-0.33%",
        },
        {
          name: "SENSEX",
          value: 73828.91,
          change: -200.85,
          percentChange: "-0.27%",
        },
        {
          name: "BANKNIFTY",
          value: 48060.4,
          change: 3.75,
          percentChange: "+0.01%",
        },
      ],
      US: [
        {
          name: "Dow Jones",
          value: 38120.5,
          change: -85.4,
          percentChange: "-0.22%",
        },
        {
          name: "Nasdaq",
          value: 15532.4,
          change: +120.8,
          percentChange: "+0.78%",
        },
        {
          name: "S&P 500",
          value: 5056.7,
          change: +17.6,
          percentChange: "+0.35%",
        },
      ],
      Japanese: [
        {
          name: "Nikkei 225",
          value: 39825.5,
          change: +210.3,
          percentChange: "+0.53%",
        },
        { name: "Topix", value: 2732.1, change: -8.6, percentChange: "-0.31%" },
        {
          name: "JPX400",
          value: 18225.7,
          change: +45.2,
          percentChange: "+0.25%",
        },
      ],
    };
    return indicesData[market];
  };

  // Dummy Stock Data
  const generateStockData = (market) => {
    const stockData = {
      Indian: [
        {
          name: "Tata Motors",
          price: 600,
          change: "+10.5",
          percentChange: "1.8%",
        },
        {
          name: "Reliance Industries",
          price: 2700,
          change: "-25.4",
          percentChange: "-0.9%",
        },
        {
          name: "HDFC Bank",
          price: 1600,
          change: "+12.3",
          percentChange: "0.75%",
        },
        {
          name: "Infosys",
          price: 1485,
          change: "+8.2",
          percentChange: "0.56%",
        },
        { name: "TCS", price: 3520, change: "-15.7", percentChange: "-0.44%" },
        {
          name: "ICICI Bank",
          price: 880,
          change: "+5.6",
          percentChange: "0.64%",
        },
        {
          name: "Larsen & Toubro",
          price: 3250,
          change: "+20.9",
          percentChange: "0.65%",
        },
        {
          name: "Hindustan Unilever",
          price: 2250,
          change: "-12.3",
          percentChange: "-0.54%",
        },
        {
          name: "Kotak Mahindra Bank",
          price: 1750,
          change: "+7.8",
          percentChange: "0.45%",
        },
        {
          name: "Bharti Airtel",
          price: 850,
          change: "+9.2",
          percentChange: "1.1%",
        },
        {
          name: "State Bank of India",
          price: 610,
          change: "-4.7",
          percentChange: "-0.76%",
        },
        {
          name: "Bajaj Finance",
          price: 7800,
          change: "+34.5",
          percentChange: "0.44%",
        },
        { name: "ITC", price: 420, change: "-3.2", percentChange: "-0.76%" },
        {
          name: "Adani Enterprises",
          price: 2400,
          change: "+28.6",
          percentChange: "1.2%",
        },
        {
          name: "Asian Paints",
          price: 3120,
          change: "-10.5",
          percentChange: "-0.33%",
        },
        {
          name: "Titan Company",
          price: 2875,
          change: "+15.6",
          percentChange: "0.54%",
        },
        {
          name: "HCL Technologies",
          price: 1220,
          change: "+5.1",
          percentChange: "0.42%",
        },
        { name: "Wipro", price: 560, change: "-3.4", percentChange: "-0.6%" },
        {
          name: "UltraTech Cement",
          price: 8500,
          change: "+50.2",
          percentChange: "0.6%",
        },
        {
          name: "Sun Pharma",
          price: 1125,
          change: "+4.2",
          percentChange: "0.37%",
        },
        {
          name: "Maruti Suzuki",
          price: 10350,
          change: "-45.3",
          percentChange: "-0.43%",
        },
        {
          name: "Tata Steel",
          price: 123,
          change: "+1.5",
          percentChange: "1.2%",
        },
        {
          name: "Bajaj Auto",
          price: 4800,
          change: "-20.7",
          percentChange: "-0.43%",
        },
        {
          name: "Dr Reddy's Labs",
          price: 5250,
          change: "+30.8",
          percentChange: "0.59%",
        },
        {
          name: "Power Grid Corp",
          price: 260,
          change: "-1.9",
          percentChange: "-0.72%",
        },
        {
          name: "Nestle India",
          price: 22500,
          change: "+120.5",
          percentChange: "0.54%",
        },
        {
          name: "Oil & Natural Gas",
          price: 165,
          change: "-2.5",
          percentChange: "-1.49%",
        },
        {
          name: "Mahindra & Mahindra",
          price: 1900,
          change: "+15.3",
          percentChange: "0.8%",
        },
        {
          name: "Grasim Industries",
          price: 2000,
          change: "-9.6",
          percentChange: "-0.48%",
        },
        {
          name: "JSW Steel",
          price: 795,
          change: "+6.7",
          percentChange: "0.85%",
        },
      ],
      US: [
        { name: "Apple", price: 175, change: "+2.3", percentChange: "1.3%" },
        {
          name: "Microsoft",
          price: 310,
          change: "+3.8",
          percentChange: "1.2%",
        },
        { name: "Amazon", price: 135, change: "-1.5", percentChange: "-1.1%" },
        {
          name: "Alphabet (Google)",
          price: 2800,
          change: "+25.6",
          percentChange: "0.9%",
        },
        { name: "NVIDIA", price: 220, change: "+4.5", percentChange: "2.1%" },
        { name: "Tesla", price: 225, change: "-5.2", percentChange: "-2.2%" },
        {
          name: "Meta Platforms (Facebook)",
          price: 330,
          change: "+6.7",
          percentChange: "2.1%",
        },
        {
          name: "Berkshire Hathaway",
          price: 430000,
          change: "+5000",
          percentChange: "1.2%",
        },
        { name: "Visa", price: 230, change: "+3.2", percentChange: "1.4%" },
        {
          name: "Johnson & Johnson",
          price: 165,
          change: "-2.1",
          percentChange: "-1.3%",
        },
        {
          name: "JPMorgan Chase",
          price: 150,
          change: "+2.8",
          percentChange: "1.9%",
        },
        { name: "Walmart", price: 145, change: "-1.0", percentChange: "-0.7%" },
        {
          name: "Procter & Gamble",
          price: 140,
          change: "+1.5",
          percentChange: "1.1%",
        },
        {
          name: "UnitedHealth Group",
          price: 500,
          change: "+10.0",
          percentChange: "2.0%",
        },
        {
          name: "Home Depot",
          price: 320,
          change: "-4.0",
          percentChange: "-1.2%",
        },
        {
          name: "Mastercard",
          price: 370,
          change: "+5.0",
          percentChange: "1.4%",
        },
        {
          name: "Bank of America",
          price: 40,
          change: "-0.5",
          percentChange: "-1.2%",
        },
        { name: "Pfizer", price: 45, change: "+0.8", percentChange: "1.8%" },
        { name: "Intel", price: 55, change: "-1.2", percentChange: "-2.1%" },
        {
          name: "Cisco Systems",
          price: 60,
          change: "+1.0",
          percentChange: "1.7%",
        },
        { name: "Netflix", price: 650, change: "+15.0", percentChange: "2.4%" },
        { name: "Comcast", price: 55, change: "-0.7", percentChange: "-1.3%" },
        { name: "PepsiCo", price: 160, change: "+2.5", percentChange: "1.6%" },
        {
          name: "Coca-Cola",
          price: 60,
          change: "-0.3",
          percentChange: "-0.5%",
        },
        {
          name: "Walt Disney",
          price: 180,
          change: "+2.0",
          percentChange: "1.1%",
        },
        { name: "Oracle", price: 90, change: "+1.8", percentChange: "2.0%" },
        { name: "IBM", price: 140, change: "-1.0", percentChange: "-0.7%" },
        {
          name: "Exxon Mobil",
          price: 85,
          change: "+0.5",
          percentChange: "0.6%",
        },
        { name: "Chevron", price: 110, change: "-1.5", percentChange: "-1.3%" },
        { name: "AT&T", price: 25, change: "+0.2", percentChange: "0.8%" },
      ],
      Japanese: [
        { name: "Toyota", price: 2200, change: "+15.8", percentChange: "0.7%" },
        { name: "Sony", price: 1125, change: "-8.5", percentChange: "-1.3%" },
        {
          name: "Nintendo",
          price: 1450,
          change: "+9.2",
          percentChange: "0.65%",
        },
        {
          name: "Mitsubishi UFJ Financial",
          price: 650,
          change: "+5.0",
          percentChange: "0.8%",
        },
        {
          name: "Keyence",
          price: 6000,
          change: "-50.0",
          percentChange: "-0.83%",
        },
        {
          name: "Nippon Telegraph & Telephone",
          price: 2800,
          change: "+20.0",
          percentChange: "0.72%",
        },
        {
          name: "Tokyo Electron",
          price: 5000,
          change: "-30.0",
          percentChange: "-0.6%",
        },
        {
          name: "Fast Retailing",
          price: 7000,
          change: "+50.0",
          percentChange: "0.72%",
        },
        {
          name: "Shin-Etsu Chemical",
          price: 4000,
          change: "+25.0",
          percentChange: "0.63%",
        },
        {
          name: "Hitachi",
          price: 4500,
          change: "-20.0",
          percentChange: "-0.44%",
        },
        {
          name: "Takeda Pharmaceutical",
          price: 3800,
          change: "+15.0",
          percentChange: "0.4%",
        },
        {
          name: "SoftBank Group",
          price: 5200,
          change: "-35.0",
          percentChange: "-0.67%",
        },
        { name: "KDDI", price: 3000, change: "+10.0", percentChange: "0.33%" },
        {
          name: "Mitsubishi Electric",
          price: 1600,
          change: "-5.0",
          percentChange: "-0.31%",
        },
        {
          name: "Sumitomo Mitsui Financial",
          price: 4100,
          change: "+20.0",
          percentChange: "0.49%",
        },
        {
          name: "Honda Motor",
          price: 3200,
          change: "-15.0",
          percentChange: "-0.47%",
        },
        {
          name: "Mizuho Financial Group",
          price: 1800,
          change: "+8.0",
          percentChange: "0.44%",
        },
        {
          name: "Daiichi Sankyo",
          price: 2800,
          change: "-12.0",
          percentChange: "-0.43%",
        },
        {
          name: "Sumitomo Corporation",
          price: 2200,
          change: "+10.0",
          percentChange: "0.45%",
        },
        {
          name: "Mitsui",
          price: 1800,
          change: "-5.0",
          percentChange: "-0.28%",
        },
        {
          name: "Mitsubishi",
          price: 1200,
          change: "+5.0",
          percentChange: "0.42%",
        },
        {
          name: "Panasonic",
          price: 1100,
          change: "-3.0",
          percentChange: "-0.27%",
        },
        { name: "Denso", price: 4500, change: "+20.0", percentChange: "0.45%" },
        {
          name: "Astellas Pharma",
          price: 2800,
          change: "-10.0",
          percentChange: "-0.36%",
        },
        {
          name: "Nissan Motor",
          price: 800,
          change: "+5.0",
          percentChange: "0.63%",
        },
        {
          name: "Suzuki Motor",
          price: 3000,
          change: "-15.0",
          percentChange: "-0.5%",
        },
        {
          name: "Fujitsu",
          price: 1200,
          change: "+5.0",
          percentChange: "0.42%",
        },
        {
          name: "Seven & i Holdings",
          price: 3500,
          change: "-10.0",
          percentChange: "-0.28%",
        },
        { name: "Kao", price: 2500, change: "+8.0", percentChange: "0.32%" },
        {
          name: "Nippon Steel",
          price: 1500,
          change: "-5.0",
          percentChange: "-0.33%",
        },
      ],
    };
    return stockData[market];
  };

  // States for indices and stocks
  const [indices, setIndices] = useState(generateIndicesData(selectedMarket));
  const [stocks, setStocks] = useState(generateStockData(selectedMarket));

  // Update stocks and indices when market changes
  useEffect(() => {
    setIndices(generateIndicesData(selectedMarket));
    setStocks(generateStockData(selectedMarket));
  }, [selectedMarket]);

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

        <div className="p-4 lg:p-6 flex flex-col xl:flex-row gap-6">
          {/* Left Section - Stocks Data */}
          <div className="xl:w-2/3 w-full">
            {/* Market Selection */}
            <div className="flex flex-wrap gap-4 mb-6">
              {["Indian", "US", "Japanese"].map((market) => (
                <button
                  key={market}
                  className={`px-4 py-2 rounded ${
                    selectedMarket === market ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                  }`}
                  onClick={() => setSelectedMarket(market)}
                >
                  {market} Stocks
                </button>
              ))}
            </div>

            {/* Indices Section */}
            <div className="flex justify-between">
              <h2 className="text-lg font-semibold">Indices</h2>
              <a href="#" className="text-green-500">All indices</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {indices.map((index, idx) => (
                <div key={idx} className="p-4 bg-white shadow rounded-lg">
                  <p className="text-gray-500">{index.name}</p>
                  <p className="text-xl font-semibold">{index.value}</p>
                  <p className={parseFloat(index.change) > 0 ? "text-green-500" : "text-red-500"}>
                    {index.change} ({index.percentChange})
                  </p>
                </div>
              ))}
            </div>

            {/* Stocks Table */}
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Most Traded Stocks</h2>
                <a href="#" className="text-green-500">View all</a>
              </div>

              <div className="mt-4 bg-white shadow rounded-lg overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left py-3 px-4 text-gray-500 font-normal text-sm">COMPANY</th>
                      <th className="text-right py-3 px-4 text-gray-500 font-normal text-sm">MARKET PRICE</th>
                      <th className="text-right py-3 px-4 text-gray-500 font-normal text-sm">CHANGE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stocks.map((stock, index) => (
                      <tr
                        key={index}
                        className="border-t border-gray-200 cursor-pointer hover:bg-gray-100"
                        onClick={() => setSelectedStock(stock)}
                      >
                        <td className="py-3 px-4 font-medium">{stock.name}</td>
                        <td className="py-3 px-4 text-right font-medium">₹{stock.price}</td>
                        <td
                          className={`py-3 px-4 text-right ${
                            parseFloat(stock.change) > 0 ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {stock.change} ({stock.percentChange})
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Section - Buy & Sell Component */}
          <div className="xl:w-1/3 w-full">
            <BuyAndSell selectedStock={selectedStock} />
          </div>
        </div>
      </div>
      </div>
    </div>
);
};

export default Stock;
