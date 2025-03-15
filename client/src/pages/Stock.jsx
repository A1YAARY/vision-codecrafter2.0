import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/sidebar";
import BuyAndSell from "../components/BuyAndSell";

const Stock = () => {
  const [selectedStock, setSelectedStock] = useState(null);
  const [selectedMarket, setSelectedMarket] = useState("Indian"); // Default market
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Dummy Indices Data
  const generateIndicesData = (market) => {
    const indicesData = {
      Indian: [
        { name: "NIFTY", value: 22397.2, change: -73.3, percentChange: "-0.33%" },
        { name: "SENSEX", value: 73828.91, change: -200.85, percentChange: "-0.27%" },
        { name: "BANKNIFTY", value: 48060.4, change: 3.75, percentChange: "+0.01%" },
      ],
      US: [
        { name: "Dow Jones", value: 38120.5, change: -85.4, percentChange: "-0.22%" },
        { name: "Nasdaq", value: 15532.4, change: +120.8, percentChange: "+0.78%" },
        { name: "S&P 500", value: 5056.7, change: +17.6, percentChange: "+0.35%" },
      ],
      Japanese: [
        { name: "Nikkei 225", value: 39825.5, change: +210.3, percentChange: "+0.53%" },
        { name: "Topix", value: 2732.1, change: -8.6, percentChange: "-0.31%" },
        { name: "JPX400", value: 18225.7, change: +45.2, percentChange: "+0.25%" },
      ],
    };
    return indicesData[market];
  };

  // Dummy Stock Data
  const generateStockData = (market) => {
    const stockData = {
      Indian: [
        { name: "Tata Motors", price: 600, change: "+10.5", percentChange: "1.8%" },
        { name: "Reliance Industries", price: 2700, change: "-25.4", percentChange: "-0.9%" },
        { name: "HDFC Bank", price: 1600, change: "+12.3", percentChange: "0.75%" },
      ],
      US: [
        { name: "Apple", price: 175, change: "+2.3", percentChange: "1.3%" },
        { name: "Tesla", price: 225, change: "-5.2", percentChange: "-2.2%" },
        { name: "Microsoft", price: 310, change: "+3.8", percentChange: "1.2%" },
      ],
      Japanese: [
        { name: "Toyota", price: 2200, change: "+15.8", percentChange: "0.7%" },
        { name: "Sony", price: 1125, change: "-8.5", percentChange: "-1.3%" },
        { name: "Nintendo", price: 1450, change: "+9.2", percentChange: "0.65%" },
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
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div ref={sidebarRef} className={`fixed top-0 left-0 h-full bg-gray-100 text-white z-50 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out w-64 xl:static xl:translate-x-0`}>
        <Sidebar />
      </div>

      <div className="flex-1 bg-gray-100">
        <Navbar />

        <div className="p-6">
          {/* Market Selection Buttons */}
          <div className="flex gap-4 mb-6">
            {["Indian", "US", "Japanese"].map((market) => (
              <button
                key={market}
                className={`px-4 py-2 rounded ${selectedMarket === market ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
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

            <div className="mt-4 w-[68%] bg-white shadow rounded-lg ">
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
                      <td className={`py-3 px-4 text-right ${parseFloat(stock.change) > 0 ? "text-green-500" : "text-red-500"}`}>
                        {stock.change} ({stock.percentChange})
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Buy and Sell Component */}
          <div>
            <BuyAndSell selectedStock={selectedStock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
