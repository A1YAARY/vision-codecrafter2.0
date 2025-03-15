import React from "react";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold text-blue-500">VisionInvest</div>
          <a href="#" className="text-green-500">Explore</a>
          <a href="#" className="text-gray-700">Dashboard</a>
        </div>
        <input
          type="text"
          placeholder="Search Groww..."
          className="border p-2 rounded-lg"
        />
        <div className="flex items-center gap-4">
          <button className="p-2 bg-gray-200 rounded-lg">🔔</button>
          <button className="p-2 bg-gray-200 rounded-lg">🛒</button>
          <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center rounded-full">S</div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        {/* Stocks Section */}
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Indices</h2>
          <a href="#" className="text-green-500">All indices</a>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
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

        {/* Most Traded Section */}
        <h2 className="mt-6 text-lg font-semibold">Most traded on Groww</h2>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="p-4 bg-white shadow rounded-lg">
            <p>Data Patterns</p>
            <p className="text-lg font-semibold">₹1,663.10</p>
            <p className="text-green-500">+76.80 (4.84%)</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <p>Mangalore Refinery</p>
            <p className="text-lg font-semibold">₹119.33</p>
            <p className="text-green-500">+7.24 (6.48%)</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <p>BSE</p>
            <p className="text-lg font-semibold">₹3,926.25</p>
            <p className="text-red-500">-88.15 (2.20%)</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <p>IndusInd Bank</p>
            <p className="text-lg font-semibold">₹672.35</p>
            <p className="text-red-500">-12.35 (1.80%)</p>
          </div>
        </div>

        {/* Investments Section */}
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-lg font-semibold">Your Investments</h2>
          <a href="#" className="text-green-500">Dashboard</a>
        </div>
        <div className="p-4 bg-white shadow rounded-lg mt-4 flex justify-between">
          <div>
            <p className="text-gray-500">Total Returns</p>
            <p className="text-xl font-semibold text-red-500">- ₹2,323</p>
          </div>
          <div>
            <p className="text-gray-500">Current Value</p>
            <p className="text-xl font-semibold">₹19,055</p>
          </div>
        </div>

        {/* Watchlist Section */}
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-lg font-semibold">All Watchlists</h2>
          <a href="#" className="text-green-500">View all</a>
        </div>
        <div className="p-4 bg-white shadow rounded-lg mt-4 flex justify-between">
          <p>My Watchlist</p>
          <button className="text-green-500">+ Create new watchlist</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;