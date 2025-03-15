import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BuyInsurance from "../components/BuyInsurance";

const Insurance = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Health");
  const [selectedInsurance, setSelectedInsurance] = useState(null);

  // Dummy insurance data
  const insuranceData = {
    Health: [
      { name: "HDFC ERGO Health Insurance", premium: "₹5,000/year", coverage: "₹5 Lakh", benefits: "Cashless hospitals, tax benefits" },
      { name: "ICICI Lombard Health Insurance", premium: "₹6,500/year", coverage: "₹7 Lakh", benefits: "Pre & post-hospitalization, critical illness cover" },
      { name: "Max Bupa Health Companion", premium: "₹4,800/year", coverage: "₹5 Lakh", benefits: "Free annual health checkups" }
    ],
    Life: [
      { name: "LIC Jeevan Anand", premium: "₹10,000/year", coverage: "₹10 Lakh", benefits: "Lifetime cover, maturity benefits" },
      { name: "HDFC Click 2 Protect", premium: "₹8,500/year", coverage: "₹1 Cr", benefits: "Accidental death benefit, low premium" },
      { name: "ICICI Prudential iProtect Smart", premium: "₹7,000/year", coverage: "₹75 Lakh", benefits: "Critical illness cover, tax benefits" }
    ],
    Vehicle: [
      { name: "Bajaj Allianz Car Insurance", premium: "₹4,000/year", coverage: "Own Damage & Third Party", benefits: "Cashless repairs, roadside assistance" },
      { name: "TATA AIG Two-Wheeler Insurance", premium: "₹2,500/year", coverage: "Own Damage & Third Party", benefits: "Accidental cover, quick claims" }
    ]
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full bg-gray-100 text-white z-50 w-64">
        <Sidebar />
      </div>

      <div className="flex-1 bg-gray-100 ml-64 p-6 flex">
        <div className="w-2/3">
          <Navbar />

          {/* Category Selection */}
          <div className="flex gap-4 mb-6">
            {["Health", "Life", "Vehicle"].map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category} Insurance
              </button>
            ))}
          </div>

          {/* Insurance Plans */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold">{selectedCategory} Insurance Plans</h2>

            <div className="mt-4">
              {insuranceData[selectedCategory].map((plan, index) => (
                <div key={index} className="bg-white shadow rounded-lg mb-4 p-4 cursor-pointer" onClick={() => setSelectedInsurance(plan)}>
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h3 className="font-medium">{plan.name}</h3>
                      <div className="text-gray-500 text-sm">{plan.benefits}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Premium</div>
                      <div className="font-medium">{plan.premium}</div>
                      <div className="text-sm text-gray-500 mt-1">Coverage</div>
                      <div className="font-medium">{plan.coverage}</div>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md">
                      Purchase
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BuyInsurance Component on the Right */}
        <div className="w-1/3 ml-6">
          <BuyInsurance selectedInsurance={selectedInsurance} />
        </div>
      </div>
    </div>
  );
};

export default Insurance;
