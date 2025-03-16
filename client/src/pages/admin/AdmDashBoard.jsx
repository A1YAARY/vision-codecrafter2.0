import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";

const AdmDashBoard = () => {
  const [users, setUsers] = useState([]);
  const [news, setNews] = useState("");

  // Fetch registered users (Replace with actual API call)
  useEffect(() => {
    setUsers([
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
    ]);
  }, []);

  // Handle news update
  const handleNewsUpdate = () => {
    console.log("Updated News:", news);
    // Send to backend (API call)
  };

  // Generate Monthly PDF Report
  const generateReport = () => {
    const doc = new jsPDF();
    doc.text("User Portfolio Report", 20, 20);
    users.forEach((user, index) => {
      doc.text(`${index + 1}. ${user.name} (${user.email})`, 20, 40 + index * 10);
    });
    doc.save("User_Report.pdf");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* User List */}
      <div className="bg-white p-4 shadow rounded mb-4">
        <h2 className="text-xl font-semibold mb-2">Registered Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="border-b py-2">
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>

      {/* News Update Section */}
      <div className="bg-white p-4 shadow rounded mb-4">
        <h2 className="text-xl font-semibold mb-2">Update Financial News</h2>
        <textarea
          className="w-full border p-2 rounded"
          rows="4"
          placeholder="Enter financial news..."
          value={news}
          onChange={(e) => setNews(e.target.value)}
        ></textarea>
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          onClick={handleNewsUpdate}
        >
          Update News
        </button>
      </div>

      {/* Generate Report Button */}
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        onClick={generateReport}
      >
        Generate Monthly Report
      </button>
    </div>
  );
};

export default AdmDashBoard;
