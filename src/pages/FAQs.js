
import React, { useState } from "react";

function FAQPage() {
  // State to manage which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are there any subscription fees?",
      answer:
        "No, we do not charge any subscription fees. Our service operates on a pay-as-you-go model for all printing services.",
    },
    {
      question: "Do you share user data with third parties?",
      answer:
        "We are committed to protecting your privacy. We do not share your personal information or data with any third parties.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "While we do not have a free trial, we offer competitive pricing and various discounts for students and bulk orders.",
    },
    {
      question: "What kind of customer support do you provide?",
      answer:
        "We provide comprehensive customer support via email, phone, and live chat during our business hours.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, as well as online payment methods like PayPal, UPI, and bank transfers.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, as well as online payment methods like PayPal, UPI, and bank transfers.",
    },
  ];

  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-8 bg-gray-50">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden max-w-6xl w-full">
        {/* Left Column: FAQ Illustration */}
        <div className="flex justify-center items-center p-8 md:w-1/2 bg-white">
        <img src="f.jpeg" alt="" className="w-full h-96 object-cover rounded-3xl"/>
          {/* <svg
            className="w-full h-auto"
            viewBox="0 0 500 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
      
            <g>
          
              <path
                d="M100 290V90H30V150H70V170H30V290H100ZM70 170V150H30V170H70Z"
                fill="#277CFF"
              />
    
              <path
                d="M170 290L235 90H200L135 290H170ZM150 210H200L175 140H150L170 210Z"
                fill="#277CFF"
              />
    
              <circle cx="340" cy="190" r="100" fill="#277CFF" />
              <path
                d="M340 120C304.5 120 275 149.5 275 185H305C305 166.4 320.4 151 340 151C359.6 151 375 166.4 375 185C375 198.8 366 209.6 353.4 215.8L340 222.8V250H305V222.8L318.6 215.8C331 209.6 340 198.8 340 185Z"
                fill="white"
              />
              <circle cx="340" cy="275" r="15" fill="white" />
        
              <path
                d="M40 90L70 90L70 60L40 60L40 90Z"
                fill="#277CFF"
                fillOpacity="0.8"
              />
            
              <path
                d="M150 20L180 20L180 50L150 50L150 20Z"
                fill="#8C8C8C"
                fillOpacity="0.5"
              />
              <path
                d="M210 50L240 50L240 80L210 80L210 50Z"
                fill="#8C8C8C"
                fillOpacity="0.5"
              />
              <path
                d="M390 180L420 180L420 210L390 210L390 180Z"
                fill="#277CFF"
                fillOpacity="0.8"
              />
            </g>
          </svg> */}
        </div>

        {/* Right Column: FAQ List */}
        <div className="p-12 md:w-1/2">
          <h2 className="text-3xl font-bold mb-2 text-[#041869]">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 mb-8">
            Questions you might ask about product and services
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-3">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-lg font-semibold text-[#041869]">
                    {faq.question}
                  </h3>
                  <span className="text-[#041869] text-3xl font-light transition-transform duration-300 transform">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="mt-2 text-gray-600 animate-fade-in-down">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;