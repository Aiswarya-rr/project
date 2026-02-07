import React, { useState, useEffect } from "react";
import axios from "axios";

function Services() {
  const [services, setServices] = useState([]);

  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

  // Fetch services from backend
  const fetchServices = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/services`);
      setServices(res.data);
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="mx-auto mt-8 px-4 sm:px-6 lg:px-8 bg-gray-100 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">Services We Provide</h2>
        <p className="text-lg text-gray-600">
          Beautiful and functional websites & apps to provide best user experience and grow your business.
        </p>
      </div>

      {services.length === 0 ? (
        <p className="text-center text-gray-500">No services available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service._id}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon/Image Section (Placeholder) */}
              <div className="w-16 h-16 bg-yellow-200 text-yellow-800 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              
              <div className="mt-auto w-full">
                <p className="text-2xl font-bold text-gray-900 mb-2">₹{service.price}</p>
                <p className="text-xs text-gray-500 mb-4">Duration: {service.duration}</p>
                <button
                  className="w-full px-6 py-3 text-white bg-[#1c2c3c] rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Find Out More
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Services;