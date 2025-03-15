import React, { useState } from 'react';

function BuyAndSell({ selectedStock }) {
  const [tradeType, setTradeType] = useState('BUY');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(selectedStock ? selectedStock.price : 3967.95);

  const handleTrade = () => {
    alert(`${tradeType} Order Placed for ${quantity} shares at ₹${price}`);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-md w-96 fixed right-5 top-[47%]">
      {selectedStock ? (
        <>
          <h2 className="text-lg font-semibold">{selectedStock.name}</h2>
          <p className="text-gray-500">NSE ₹{selectedStock.price} ({selectedStock.percentChange}%)</p>
          <div className="flex mt-3 border-b">
            <button
              className={`flex-1 py-2 ${tradeType === 'BUY' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}
              onClick={() => setTradeType('BUY')}
            >BUY</button>
            <button
              className={`flex-1 py-2 ${tradeType === 'SELL' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'}`}
              onClick={() => setTradeType('SELL')}
            >SELL</button>
          </div>
          <div className="mt-3">
            <label className="block text-gray-600">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </div>
          <div className="mt-3">
            <label className="block text-gray-600">Price Limit</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border rounded mt-1"
            />
          </div>
          <p className="mt-3 text-sm text-gray-500">Order will be executed at ₹{price} or lower price</p>
          <button
            className={`w-full mt-4 py-2 text-white rounded ${tradeType === 'BUY' ? 'bg-green-500' : 'bg-red-500'}`}
            onClick={handleTrade}
          >
            {tradeType} at ₹{price}
          </button>
        </>
      ) : (
        <p className="text-center text-gray-500">Select a stock to trade</p>
      )}
    </div>
  );
}

export default BuyAndSell;
