import React from "react";

const BuyInsurance = ({ selectedInsurance }) => {
  if (!selectedInsurance) {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-lg font-semibold">Select an Insurance Plan</h2>
        <p className="text-gray-500 mt-2">Click on an insurance plan to purchase.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-96">
      <h2 className="text-lg font-semibold">{selectedInsurance.name}</h2>
      <p className="text-gray-500">{selectedInsurance.benefits}</p>

      <div className="mt-4">
        <div className="text-sm text-gray-500">Premium</div>
        <div className="font-medium">{selectedInsurance.premium}</div>
      </div>

      <div className="mt-2">
        <div className="text-sm text-gray-500">Coverage</div>
        <div className="font-medium">{selectedInsurance.coverage}</div>
      </div>

      <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md w-full">
        Proceed to Buy
      </button>
    </div>
  );
};

export default BuyInsurance;
