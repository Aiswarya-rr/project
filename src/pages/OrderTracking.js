import React, { useState } from "react";

const mockOrders = {
  ORD12345: { status: "Ready for Pickup", details: "Assignment, 10 pages, Spiral binding" },
  ORD67890: { status: "In Progress", details: "Poster, Color, A3 size" },
  ORD54321: { status: "Delivered", details: "Resume, B/W, Staple" }
};

function OrderTracking() {
  const [orderId, setOrderId] = useState("");
  const [result, setResult] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    const id = orderId.trim().toUpperCase();
    if (mockOrders[id]) {
      setResult({ ...mockOrders[id], id });
    } else {
      setResult({ status: "Not Found", details: "No order found with this ID.", id });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Ready for Pickup":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Delivered":
        return "bg-blue-100 text-blue-800";
      case "Not Found":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Order Tracking
      </h2>
      <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter your Order ID (e.g., ORD12345)"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Track Order
        </button>
      </form>

      {result && (
        <div
          className={`border-l-4 rounded-lg p-5 transition-all duration-300 ${getStatusColor(
            result.status
          )}`}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="font-bold text-lg">
              Order ID: <span className="font-normal">{result.id}</span>
            </div>
            <div className={`font-semibold text-lg px-3 py-1 rounded-full ${getStatusColor(result.status)}`}>
              {result.status}
            </div>
          </div>
          <p className="text-sm mt-2 font-medium">
            Details: {result.details}
          </p>
        </div>
      )}

      <p className="mt-6 text-gray-500 text-sm text-center">
        Try tracking an example ID:
        <span
          className="font-semibold text-blue-600 cursor-pointer ml-1 hover:underline"
          onClick={() => setOrderId("ORD12345")}
        >
          ORD12345
        </span>
      </p>
    </div>
  );
}

export default OrderTracking;