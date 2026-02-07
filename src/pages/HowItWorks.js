import React, { useEffect, useRef } from "react";

// The steps data remains the same for the new component.
const steps = [
  {
    icon: "1️⃣",
    title: "Select Service",
    desc: "Choose the type of printing you need, from documents to posters."
  },
  {
    icon: "2️⃣",
    title: "Upload & Customize",
    desc: "Upload your files and select your options like paper type, size, and binding."
  },
  {
    icon: "3️⃣",
    title: "Place Order",
    desc: "Get an instant quote and securely place your order online."
  },
  {
    icon: "4️⃣",
    title: "Pickup or Delivery",
    desc: "Choose to pick up your prints at our shop or have them delivered right to you."
  },
];

function HowItWorks() {
  const containerRef = useRef(null);

  // No more useEffect hook for GSAP. The animations are now handled by CSS classes.

  return (
    <div
      ref={containerRef}
      className="max-w-6xl mx-auto my-16 p-8 bg-gray-50 text-blue-800 rounded-2xl shadow-xl transition-all duration-700 ease-out animate-fade-in-up"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-2">How It Works</h2>
        <p className="text-lg text-blue-600">
          Ordering your prints is simple and hassle-free.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            // Classes for CSS-based animation and staggered delay
            className={`flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-out animate-fade-in-up ${
              index === 0 ? 'delay-100' : 
              index === 1 ? 'delay-200' :
              index === 2 ? 'delay-300' :
              'delay-400'
            }`}
          >
            <div className="text-4xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-blue-600 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// You will need to add this keyframe animation to your CSS file (e.g., index.css or a dedicated CSS file).
// Tailwind doesn't have a built-in staggered animation for individual components.
/*
@keyframes fadeInFromBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fadeInFromBottom 0.5s ease-out forwards;
}
*/

export default HowItWorks;