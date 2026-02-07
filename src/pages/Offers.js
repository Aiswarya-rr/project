// // import React from "react";

// // const offers = [
// //   {
// //     title: "10% Off on Poster Printing",
// //     desc: "Get a 10% discount on all poster prints when you order 5 units or more.",
// //     code: "POSTER10"
// //   },
// //   {
// //     title: "Free Binding for Assignments",
// //     desc: "Order 20+ pages and receive spiral binding at no extra cost.",
// //     code: "BINDFREE"
// //   },
// //   {
// //     title: "Campus Delivery Offer",
// //     desc: "Enjoy ₹5 off on all campus deliveries for orders over ₹100.",
// //     code: "CAMPUS5"
// //   }
// // ];

// // const testimonials = [
// //   {
// //     name: "Aarav S.",
// //     text: "Super fast service and great quality prints! The online booking saved me so much time."
// //   },
// //   {
// //     name: "Priya M.",
// //     text: "Loved the campus delivery option. Got my assignment printed and delivered right to my hostel."
// //   },
// //   {
// //     name: "Rahul T.",
// //     text: "Affordable prices and friendly staff. Highly recommend for all college printing needs."
// //   }
// // ];

// // function Offers() {
// //   return (
// //     <div className="max-w-4xl mx-auto my-12 px-4 py-8 bg-[#f7f3ee] rounded-lg shadow-xl">
// //       <h2 className="text-3xl font-bold mb-4 text-[#5c5043] text-center">🎉 Today's Special Offers 🎉</h2>
// //       <hr className="my-6 border-[#e0d6c3]" />
// //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {offers.map((offer, idx) => (
// //           <div key={idx} className="bg-[#fffdf7] border border-[#f3eee7] p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
// //             <div className="font-extrabold text-xl text-[#ff6f3c] mb-2">{offer.title}</div>
// //             <div className="text-[#7a6c5d] mb-4">{offer.desc}</div>
// //             <div className="flex justify-between items-center bg-[#f3eee7] border border-[#e0d6c3] p-2 rounded-lg">
// //               <span className="text-sm font-semibold text-[#5c5043]">Use Code:</span>
// //               <button 
// //                 onClick={() => navigator.clipboard.writeText(offer.code)}
// //                 className="bg-[#ff6f3c] text-white font-bold py-1 px-3 rounded-md text-sm shadow-sm hover:bg-[#ff8c5c] transition-colors"
// //                 title="Click to copy code"
// //               >
// //                 {offer.code}
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       {/* Testimonials Section */}
// //       <div className="mt-16">
// //         <h3 className="text-2xl font-bold mb-6 text-[#5c5043] text-center">What Students Say</h3>
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //           {testimonials.map((t, idx) => (
// //             <div key={idx} className="bg-[#fffdf7] border border-[#f3eee7] p-6 rounded-lg shadow hover:shadow-lg transition">
// //               <div className="italic text-[#7a6c5d] mb-4">"{t.text}"</div>
// //               <div className="font-semibold text-[#ff6f3c] text-right">— {t.name}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Offers;

// import React, { useState, useEffect } from "react";

// const offers = [
//   {
//     title: "10% Off on Poster Printing",
//     desc: "Get a 10% discount on all poster prints when you order 5 units or more.",
//     code: "POSTER10",
//   },
//   {
//     title: "Free Binding for Assignments",
//     desc: "Order 20+ pages and receive spiral binding at no extra cost.",
//     code: "BINDFREE",
//   },
//   {
//     title: "Campus Delivery Offer",
//     desc: "Enjoy ₹5 off on all campus deliveries for orders over ₹100.",
//     code: "CAMPUS5",
//   },
// ];

// const testimonials = [
//   {
//     name: "Aarav S.",
//     text: "Super fast service and great quality prints! The online booking saved me so much time.",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     name: "Priya M.",
//     text: "Loved the campus delivery option. Got my assignment printed and delivered right to my hostel.",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     name: "Rahul T.",
//     text: "Affordable prices and friendly staff. Highly recommend for all college printing needs.",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
// ];

// function Offers() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const totalTestimonials = testimonials.length;

//   useEffect(() => {
//     // Auto-slide functionality
//     const interval = setInterval(() => {
//       setCurrentTestimonial(
//         (prev) => (prev + 1) % totalTestimonials
//       );
//     }, 5000); // Change testimonial every 5 seconds
//     return () => clearInterval(interval);
//   }, [totalTestimonials]);

//   const handlePrev = () => {
//     setCurrentTestimonial(
//       (prev) => (prev - 1 + totalTestimonials) % totalTestimonials
//     );
//   };

//   const handleNext = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % totalTestimonials);
//   };

//   return (
//     <div className="max-w-4xl mx-auto my-12 px-4 py-8 bg-[#f7f3ee] rounded-lg shadow-xl">
//       <h2 className="text-3xl font-bold mb-4 text-[#5c5043] text-center">
//         🎉 Today's Special Offers 🎉
//       </h2>
//       <hr className="my-6 border-[#e0d6c3]" />
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {offers.map((offer, idx) => (
//           <div
//             key={idx}
//             className="bg-[#fffdf7] border border-[#f3eee7] p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//           >
//             <div className="font-extrabold text-xl text-[#ff6f3c] mb-2">
//               {offer.title}
//             </div>
//             <div className="text-[#7a6c5d] mb-4">{offer.desc}</div>
//             <div className="flex justify-between items-center bg-[#f3eee7] border border-[#e0d6c3] p-2 rounded-lg">
//               <span className="text-sm font-semibold text-[#5c5043]">
//                 Use Code:
//               </span>
//               <button
//                 onClick={() => navigator.clipboard.writeText(offer.code)}
//                 className="bg-[#ff6f3c] text-white font-bold py-1 px-3 rounded-md text-sm shadow-sm hover:bg-[#ff8c5c] transition-colors"
//                 title="Click to copy code"
//               >
//                 {offer.code}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       ---

//       {/* Testimonials Carousel Section */}
//       <div className="mt-16">
//         <h3 className="text-3xl font-bold mb-8 text-[#5c5043] text-center">
//           What Our Students Say ✨
//         </h3>
//         <div className="relative w-full max-w-2xl mx-auto h-60">
//           {testimonials.map((t, idx) => (
//             <div
//               key={idx}
//               className={`absolute top-0 left-0 w-full bg-[#fffdf7] border border-[#f3eee7] p-8 rounded-lg shadow-xl transition-opacity duration-700 ease-in-out ${
//                 idx === currentTestimonial ? "opacity-100 z-10" : "opacity-0 z-0"
//               }`}
//             >
//               <div className="flex items-center mb-4">
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="w-16 h-16 rounded-full mr-4 shadow-md"
//                 />
//                 <div className="font-bold text-lg text-[#5c5043]">
//                   {t.name}
//                 </div>
//               </div>
//               <p className="italic text-[#7a6c5d] text-lg">"{t.text}"</p>
//             </div>
//           ))}
//         </div>
        
//         {/* Carousel Navigation Buttons */}
//         <div className="flex justify-center items-center mt-6 gap-4">
//           <button
//             onClick={handlePrev}
//             className="p-3 rounded-full bg-[#e0d6c3] text-[#5c5043] hover:bg-[#b8a989] transition-colors"
//             aria-label="Previous testimonial"
//           >
//             ←
//           </button>
//           <button
//             onClick={handleNext}
//             className="p-3 rounded-full bg-[#e0d6c3] text-[#5c5043] hover:bg-[#b8a989] transition-colors"
//             aria-label="Next testimonial"
//           >
//             →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Offers;


import React, { useState, useEffect } from "react";

const offers = [
  {
    title: "10% Off on Poster Printing",
    desc: "Get a 10% discount on all poster prints when you order 5 units or more.",
    code: "POSTER10",
  },
  {
    title: "Free Binding for Assignments",
    desc: "Order 20+ pages and receive spiral binding at no extra cost.",
    code: "BINDFREE",
  },
  {
    title: "Campus Delivery Offer",
    desc: "Enjoy ₹5 off on all campus deliveries for orders over ₹100.",
    code: "CAMPUS5",
  },
];

const testimonials = [
  {
    name: "Aarav S.",
    title: "Student",
    text: "Super fast service and great quality prints! The online booking saved me so much time.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Priya M.",
    title: "Student",
    text: "Loved the campus delivery option. Got my assignment printed and delivered right to my hostel.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Rahul T.",
    title: "Student",
    text: "Affordable prices and friendly staff. Highly recommend for all college printing needs.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Sneha B.",
    title: "Student",
    text: "The specialty jobs service is fantastic. Got my project presentation printed exactly how I wanted.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Vishal P.",
    title: "Student",
    text: "Quick and hassle-free lamination service. My certificates are now well-protected.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

function Offers() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handleNext = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const displayedTestimonials = testimonials.slice(
    currentTestimonialIndex * testimonialsPerPage,
    (currentTestimonialIndex + 1) * testimonialsPerPage
  );

  return (
    <div className="max-w-8xl mx-auto my-12 px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-[#041869] items-center text-center">
        🎉 Today's Special Offers 🎉
      </h2>
      <hr className="my-6 border-[#e0d6c3]" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="bg-[#fffdf7] border border-[#f3eee7] p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="font-extrabold text-xl text-[#041869] mb-2">
              {offer.title}
            </div>
            <div className="text-[#7a6c5d] mb-4">{offer.desc}</div>
            <div className="flex justify-between items-center bg-[#f3eee7] border border-[#e0d6c3] p-2 rounded-lg">
              <span className="text-sm font-semibold text-[#5c5043]">
                Use Code:
              </span>
              <button
                onClick={() => navigator.clipboard.writeText(offer.code)}
                className="bg-[#041869] text-white font-bold py-1 px-3 rounded-md text-sm shadow-sm hover:bg-[#ff8c5c] transition-colors"
                title="Click to copy code"
              >
                {offer.code}
              </button>
            </div>
          </div>
        ))}
      </div>


      {/* Testimonials Section */}
      <div className="mt-16 p-8 ">
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-3xl font-bold  text-[#041869]">What People Say</h3>
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="p-2 text-[#041869] hover:text-[#718096] transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="p-2 text-[#041869] hover:text-[#718096] transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out">
          {displayedTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-[#2d3748]">{t.name}</h4>
                    <p className="text-sm text-[#718096]">{t.title}</p>
                  </div>
                </div>
                <p className="text-[#4a5568] text-sm leading-relaxed mb-4">{t.text}</p>
              </div>
              <div className="text-right text-[#a0aec0]">
                {/* Placeholder for the quote icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offers;