import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BuyAndSell from "../components/BuyAndSell";

const StockScreen = () => {
  const { stockSymbol } = useParams();
  const widgetRef = useRef(null);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [timeframe, setTimeframe] = useState("D");

  // Close sidebar when clicking outside
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

  // Find stock data based on symbol
  useEffect(() => {
    // Mock function to get stock data - replace with actual API call
    const getStockBySymbol = (symbol) => {
      const stocks = {
        "NSE:TATAMOTORS": {
          name: "Tata Motors",
          symbol: "NSE:TATAMOTORS",
          price: 600,
          change: "+10.5",
          percentChange: "1.8%",
        },
        "NSE:RELIANCE": {
          name: "Reliance Industries",
          symbol: "NSE:RELIANCE",
          price: 2700,
          change: "-25.4",
          percentChange: "-0.9%",
        },
        "NSE:INFY": {
          name: "Infosys",
          symbol: "NSE:INFY",
          price: 1500,
          change: "+5.2",
          percentChange: "0.35%",
        },
      };
      return (
        stocks[symbol] || {
          name: symbol,
          symbol: symbol,
          price: "N/A",
          change: "0",
          percentChange: "0%",
        }
      );
    };

    const decodedSymbol = decodeURIComponent(stockSymbol);
    const stock = getStockBySymbol(decodedSymbol);
    setSelectedStock(stock);
  }, [stockSymbol]);

  // Initialize TradingView widget
  useEffect(() => {
    if (!widgetRef.current || !stockSymbol) return;

    // Clear any existing content
    widgetRef.current.innerHTML = "";

    // Create a container element for the widget
    const container = document.createElement("div");
    container.className = "tradingview-widget-container h-full";
    container.style.height = "100%";
    widgetRef.current.appendChild(container);

    // Create the widget script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    // Error handling for script loading
    script.onerror = () => {
      container.innerHTML =
        "<p>Failed to load TradingView widget. Please check your internet connection.</p>";
    };

    // Initialize the widget once the script is loaded
    script.onload = () => {
      if (typeof TradingView !== "undefined") {
        /* global TradingView */
        new TradingView.widget({
          autosize: true,
          height: "100%",
          width: "100%",
          symbol: decodeURIComponent(stockSymbol),
          interval: timeframe,
          container_id: (container.id = `tradingview_${Date.now()}`),
          library_path: "https://s3.tradingview.com/tv.js/",
          locale: "en",
          timezone: "Asia/Kolkata", // Set to India timezone for Indian stocks
          theme: "light",
          style: "1",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          save_image: false,
          studies: ["RSI@tv-basicstudies", "MACD@tv-basicstudies"],
          show_popup_button: true,
          popup_width: "1000",
          popup_height: "650",
        });
      } else {
        container.innerHTML =
          "<p>TradingView library failed to initialize.</p>";
      }
    };

    document.head.appendChild(script);

    // Clean up script when component unmounts
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [stockSymbol, timeframe]);

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

          <div className="p-4 lg:p-6 flex flex-col xl:flex-row gap-6 h-[60%]">
            {/* Left Section - Chart */}
            <div className="xl:w-2/3 w-full flex flex-col">
              {/* Back button */}
              <button
                onClick={() => navigate("/stock")}
                className="flex items-center text-blue-600 mb-4 hover:underline"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to all stocks
              </button>

              {/* Stock details */}
              {selectedStock && (
                <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold">
                        {selectedStock.name}
                      </h2>
                      <p className="text-gray-500">{selectedStock.symbol}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">
                        ₹{selectedStock.price}
                      </p>
                      <p
                        className={`text-sm ${
                          parseFloat(selectedStock.change) > 0
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {selectedStock.change} ({selectedStock.percentChange})
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Chart timeframe selection */}
              <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex-1 flex flex-col">
                <div className="flex gap-2 mb-3">
                  <span className="text-gray-600 mr-2">Timeframe:</span>
                  {[
                    { label: "1D", value: "D" },
                    { label: "1W", value: "W" },
                    { label: "1M", value: "M" },
                    { label: "3M", value: "3M" },
                    { label: "6M", value: "6M" },
                    { label: "1Y", value: "12M" },
                  ].map((tf) => (
                    <button
                      key={tf.value}
                      className={`px-3 py-1 text-sm rounded ${
                        timeframe === tf.value
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                      onClick={() => setTimeframe(tf.value)}
                    >
                      {tf.label}
                    </button>
                  ))}
                </div>

                {/* TradingView Chart Container */}
                <div
                  ref={widgetRef}
                  className="w-full flex-1 border border-gray-200 rounded overflow-hidden min-h-[500px]"
                >
                  <div className="flex justify-center items-center h-full text-gray-500">
                    Loading chart...
                  </div>
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

export default StockScreen;