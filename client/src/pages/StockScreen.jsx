import { useState, useEffect } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const StockScreen = () => {
  const [symbol, setSymbol] = useState("RELIANCE.NS");
  const [stockData, setStockData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStockData();
  }, []);

  const fetchStockData = async () => {
    setError("");
    try {
      const API_KEY = "4V9A6AF5YK7F8TSW"; // Add your Alpha Vantage API key
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
      const response = await axios.get(url);
      const data = response.data["Time Series (Daily)"];

      if (!data) {
        setError("No data available. Try another stock symbol.");
        return;
      }

      // Convert API data to array of { date, close }
      const formattedData = Object.keys(data)
        .slice(0, 20) // Get last 20 days
        .map((date) => ({
          date,
          close: parseFloat(data[date]["4. close"]),
        }))
        .reverse(); // Reverse to show oldest first

      setStockData(formattedData);
    } catch (err) {
      setError("Error fetching stock data. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">📈 Animated Stock Chart</h1>

      <div className="flex gap-2">
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Enter Stock Symbol (e.g. RELIANCE.NS)"
          className="p-2 border rounded text-black"
        />
        <button
          onClick={fetchStockData}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          Get Stock Data
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {stockData.length > 0 && (
        <ResponsiveContainer width="90%" height={400} className="mt-6">
          <LineChart data={stockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fill: "white" }} />
            <YAxis tick={{ fill: "white" }} />
            <Tooltip />
            <Line type="monotone" dataKey="close" stroke="#82ca9d" strokeWidth={2} dot={false} animationDuration={1000} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default StockScreen;
