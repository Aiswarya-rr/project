"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const PriceList = () => {
  const cardsRef = useRef([]);

  const pricingData = [
    {
      type: "Document Printing",
      size: "A4",
      color: "Black & White",
      speed: "Standard",
      price: "₹2/page",
      description: "Ideal for general-purpose text and documents.",
    },
    {
      type: "Document Printing",
      size: "A4",
      color: "Color",
      speed: "Standard",
      price: "₹10/page",
      description: "Vibrant color prints for presentations and graphics.",
    },
    {
      type: "Poster Printing",
      size: "A3",
      color: "Color",
      speed: "High-Speed",
      price: "₹50/page",
      description: "Large-format prints for posters and banners.",
    },
    {
      type: "Binding",
      size: "A4",
      color: "N/A",
      speed: "Standard",
      price: "₹100/book",
      description: "Spiral or comb binding for up to 100 pages.",
    },
    {
      type: "Lamination",
      size: "A4",
      color: "N/A",
      speed: "Standard",
      price: "₹20/sheet",
      description: "Protective film for documents and photos.",
    },
  ];

  useEffect(() => {
    // first hide all
    gsap.set(cardsRef.current, { opacity: 0, y: 40 });

    // then animate in
    gsap.to(cardsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-12 p-6 md:p-8 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-center text-[#070769] mb-10">
        💸 Pricing Guide
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-purple-700 mb-2">{item.type}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>

            <div className="space-y-1 text-gray-700 text-sm">
              <p>
                <span className="font-semibold">📏 Size:</span> {item.size}
              </p>
              <p>
                <span className="font-semibold">🎨 Color:</span> {item.color}
              </p>
              <p>
                <span className="font-semibold">⚡ Speed:</span> {item.speed}
              </p>
            </div>

            <div className="mt-4 text-right">
              <span className="text-2xl font-extrabold text-indigo-600">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
