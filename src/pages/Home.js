// import React from "react";
// import { Link } from "react-router-dom";
// import Offers from "./Offers";

// // Add a placeholder for a modern icon set
// const Icon = ({ children }) => (
//   <span className="text-xl text-[#ff6f3c] mr-2">{children}</span>
// );

// const services = [
//   { name: "Document Printing", desc: "High-quality prints for assignments, notes, and more." },
//   { name: "Binding", desc: "Spiral, staple, and custom binding options." },
//   { name: "Lamination", desc: "Protect your documents with lamination." },
//   { name: "Poster Printing", desc: "Vivid posters for events and presentations." },
//   { name: "Specialty Jobs", desc: "Custom print solutions for every need." }
// ];

// function Home() {
//   return (
//     <div className="min-h-screen bg-[#fffdf7] text-[#5c5043] font-sans">
//       {/* Enhanced Top Navigation Bar 
//         - Increased shadow for more depth.
//         - Made the "Contact Us" a clear button.
//       */}
//       <nav className="sticky top-0 z-50 bg-[#fffdf7] shadow-lg flex justify-between items-center px-8 py-4">
//         <div className="flex items-center gap-2">
//           <span className="bg-[#f3eee7] text-[#5c5043] rounded-full px-3 py-1 font-bold text-lg tracking-wide shadow-md">
//             CPS
//           </span>
//           <span className="font-bold text-[#5c5043] text-xl ml-2">
//             College Printer Shop
//           </span>
//         </div>
//         <div className="flex gap-4">
//           <Link to="/" className="font-semibold px-3 py-2 rounded hover:text-[#ff6f3c] transition-colors">Home</Link>
//           <Link to="/order-prints" className="font-semibold px-3 py-2 rounded hover:text-[#ff6f3c] transition-colors">Order Prints</Link>
//           <Link to="/services" className="font-semibold px-3 py-2 rounded hover:text-[#ff6f3c] transition-colors">Services</Link>
//           <Link to="/offers" className="font-semibold px-3 py-2 rounded hover:text-[#ff6f3c] transition-colors">Offers</Link>
//         </div>
//         {/* Contact button now a prominent CTA */}
//         <div className="hidden md:flex items-center gap-2">
//           <Link to="/contact-us" className="bg-[#ff6f3c] text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-[#ff8c5c] transition-colors duration-300">
//             Contact Us
//           </Link>
//         </div>
//       </nav>

//       {/* Dynamic Hero Section 
//         - Increased padding and contrast.
//         - The image placeholder is more stylized with a skew and shadow.
//       */}
//       <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-[#f7f3ee]">
//         <div className="md:w-1/2 mb-10 md:mb-0">
//           <div className="text-sm text-[#b8a989] mb-2 font-medium tracking-widest">— WELCOME TO CPS</div>
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#5c5043] leading-tight">
//             Modern Printing Agency
//           </h1>
//           <p className="text-lg mb-8 text-[#7a6c5d]">
//             Fast, reliable, and affordable printing for students. Order online, customize, and pick up at your convenience.
//           </p>
//           <Link
//             to="/order-prints"
//             className="inline-flex items-center bg-[#ff6f3c] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#ff8c5c] hover:scale-105 transition-all duration-300"
//           >
//             Discover More
//             <span className="ml-2 font-bold text-lg transition-transform group-hover:translate-x-1">→</span>
//           </Link>
//         </div>
//         <div className="md:w-1/2 flex justify-center">
//           {/* Stylized placeholder for hero image with a dramatic shadow */}
//           <div className="relative w-96 h-64 bg-[#e0d6c3] rounded-3xl flex items-center justify-center transform skew-y-3 shadow-2xl">
//             <span className="text-[#a89c87] font-semibold text-lg transform -skew-y-3">[Printing Studio Image]</span>
//           </div>
//         </div>
//       </section>

//       {/* Interactive Services Section 
//         - Increased max-width for more space.
//         - Cards now have a hover effect with a colored border and scale.
//         - Added a placeholder for an icon on each card.
//       */}
//       <section className="max-w-6xl mx-auto mt-16 px-4 py-8">
//         <h2 className="text-3xl font-bold mb-8 text-center text-[#7a6c5d]">Our Services</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map(s => (
//             <Link key={s.name} to="/services" className="bg-[#f3eee7] rounded-lg p-6 shadow-md hover:shadow-xl hover:border-l-4 border-[#ff6f3c] transition-all duration-300 transform hover:scale-105">
//               <div className="flex items-center mb-2">
//                 <Icon>🖨️</Icon>
//                 <div className="font-bold text-xl text-[#5c5043]">{s.name}</div>
//               </div>
//               <div className="text-[#7a6c5d]">{s.desc}</div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* Offers Section, left unchanged as it's an external component */}
//       <Offers />

//       {/* Enhanced Footer 
//         - Added a top border for a clean separation.
//         - Slightly darker background.
//       */}
//       <footer className="bg-[#f3eee7] mt-16 py-8 text-center text-[#7a6c5d] border-t border-[#e0d6c3]">
//         &copy; {new Date().getFullYear()} College Printer Shop. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default Home;

// import React from "react";
// import { Link } from "react-router-dom";
// import Offers from "./Offers";

// // Add a placeholder for a modern icon set
// const Icon = ({ children }) => (
//   <span className="text-xl text-[#0069b1] mr-2">{children}</span>
// );

// const services = [
//   { name: "Document Printing", desc: "High-quality prints for assignments, notes, and more." },
//   { name: "Binding", desc: "Spiral, staple, and custom binding options." },
//   { name: "Lamination", desc: "Protect your documents with lamination." },
//   { name: "Poster Printing", desc: "Vivid posters for events and presentations." },
//   { name: "Specialty Jobs", desc: "Custom print solutions for every need." }
// ];

// function Home() {
//   return (
//     <div className="min-h-screen bg-[#f3f9ff] text-[#1c2c3c] font-sans">
//       {/* Enhanced Top Navigation Bar 
//           - Changed theme to a cooler, professional blue.
//           - Kept shadows and button styling for visual depth.
//       */}
//       <nav className="sticky top-0 z-50 bg-[#f3f9ff] shadow-lg flex justify-between items-center px-8 py-4">
//         <div className="flex items-center gap-2">
//           <span className="bg-[#e7f3ff] text-[#1c2c3c] rounded-full px-3 py-1 font-bold text-lg tracking-wide shadow-md">
//             CPS
//           </span>
//           <span className="font-bold text-[#1c2c3c] text-xl ml-2">
//             College Printer Shop
//           </span>
//         </div>
//         <div className="flex gap-4">
//           <Link to="/" className="font-semibold px-3 py-2 rounded hover:text-[#0069b1] transition-colors">Home</Link>
//           <Link to="/order-prints" className="font-semibold px-3 py-2 rounded hover:text-[#0069b1] transition-colors">Order Prints</Link>
//           <Link to="/services" className="font-semibold px-3 py-2 rounded hover:text-[#0069b1] transition-colors">Services</Link>
//           <Link to="/offers" className="font-semibold px-3 py-2 rounded hover:text-[#0069b1] transition-colors">Offers</Link>
//         </div>
//         {/* Contact button now a prominent CTA */}
//         <div className="hidden md:flex items-center gap-2">
//           <Link to="/contact-us" className="bg-[#0069b1] text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-[#00518d] transition-colors duration-300">
//             Contact Us
//           </Link>
//         </div>
//       </nav>

//       {/* Dynamic Hero Section 
//           - Theme updated to a cool blue palette.
//           - Kept padding and contrast.
//       */}
//       <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-[#e7f3ff]">
//         <div className="md:w-1/2 mb-10 md:mb-0">
//           <div className="text-sm text-[#8c9bab] mb-2 font-medium tracking-widest">— WELCOME TO CPS</div>
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#1c2c3c] leading-tight">
//             Modern Printing Agency
//           </h1>
//           <p className="text-lg mb-8 text-[#5a7187]">
//             Fast, reliable, and affordable printing for students. Order online, customize, and pick up at your convenience.
//           </p>
//           <Link
//             to="/order-prints"
//             className="inline-flex items-center bg-[#0069b1] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#00518d] hover:scale-105 transition-all duration-300"
//           >
//             Discover More
//             <span className="ml-2 font-bold text-lg transition-transform group-hover:translate-x-1">→</span>
//           </Link>
//         </div>
//         <div className="md:w-1/2 flex justify-center">
//           {/* Stylized placeholder for hero image with a dramatic shadow */}
//           <div className="relative w-96 h-64 bg-[#c8d4e0] rounded-3xl flex items-center justify-center transform skew-y-3 shadow-2xl">
//             <span className="text-[#a0aebc] font-semibold text-lg transform -skew-y-3">[Printing Studio Image]</span>
//           </div>
//         </div>
//       </section>

//       {/* Interactive Services Section 
//           - Theme updated.
//           - Kept hover effects for interaction.
//       */}
//       <section className="max-w-6xl mx-auto mt-16 px-4 py-8">
//         <h2 className="text-3xl font-bold mb-8 text-center text-[#5a7187]">Our Services</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map(s => (
//             <Link key={s.name} to="/services" className="bg-[#e7f3ff] rounded-lg p-6 shadow-md hover:shadow-xl hover:border-l-4 border-[#0069b1] transition-all duration-300 transform hover:scale-105">
//               <div className="flex items-center mb-2">
//                 <Icon>🖨️</Icon>
//                 <div className="font-bold text-xl text-[#1c2c3c]">{s.name}</div>
//               </div>
//               <div className="text-[#5a7187]">{s.desc}</div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* Offers Section, left unchanged as it's an external component */}
//       <Offers />

//       {/* Enhanced Footer 
//           - Theme updated.
//           - Kept top border for separation.
//       */}
//       <footer className="bg-[#e7f3ff] mt-16 py-8 text-center text-[#5a7187] border-t border-[#c8d4e0]">
//         &copy; {new Date().getFullYear()} College Printer Shop. All rights reserved.
//       </footer>
//     </div>
//   );
// }

// export default Home;


import React from "react";
import { Link } from "react-router-dom";
import Offers from "./Offers";
import Footer from "./Footer";

// Placeholder for a modern icon set (you would use a library like Heroicons or Font Awesome)
const ServiceIcon = ({ iconName }) => {
  // This is a placeholder; in a real app, you'd render the actual icon
  const icons = {
    printing: "🖨️",
    binding: "🔗",
    lamination: "🛡️",
    poster: "🖼️",
    specialty: "🎨"
  };
  return <span className="text-3xl text-[#5c7cff] mb-4">{icons[iconName]}</span>;
};

const services = [
  { name: "Document Printing", desc: "High-quality prints for assignments, notes, and more.", icon: "printing" },
  { name: "Binding", desc: "Spiral, staple, and custom binding options.", icon: "binding" },
  { name: "Lamination", desc: "Protect your documents with lamination.", icon: "lamination" },
  { name: "Poster Printing", desc: "Vivid posters for events and presentations.", icon: "poster" },
   { name: "Poster Printing", desc: "Vivid posters for events and presentations.", icon: "poster" },
    { name: "Poster Printing", desc: "Vivid posters for events and presentations.", icon: "poster" },
  { name: "Specialty Jobs", desc: "Custom print solutions for every need.", icon: "specialty" }
];

function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#212529] font-sans">
      {/* Enhanced Top Navigation Bar */}
      {/* <nav className="sticky top-0 z-50 bg-white shadow-md flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-2">
          <span className="text-[#5c7cff] rounded-full px-3 py-1 font-bold text-lg tracking-wide">
            CPS
          </span>
          <span className="font-bold text-[#212529] text-xl ml-2">
            College Printer Shop
          </span>
        </div>
        <div className="hidden md:flex gap-6">
          <Link to="/" className="font-semibold px-3 py-2 rounded text-[#212529] hover:text-[#5c7cff] transition-colors">Home</Link>
          <Link to="/order-prints" className="font-semibold px-3 py-2 rounded text-[#212529] hover:text-[#5c7cff] transition-colors">Order Prints</Link>
          <Link to="/services" className="font-semibold px-3 py-2 rounded text-[#212529] hover:text-[#5c7cff] transition-colors">Services</Link>
          <Link to="/offers" className="font-semibold px-3 py-2 rounded text-[#212529] hover:text-[#5c7cff] transition-colors">Offers</Link>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Link to="/contact-us" className="bg-[#5c7cff] text-white px-5 py-2 rounded-lg font-bold shadow-md hover:bg-[#4a63cc] transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-white">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#212529] leading-tight">
            Professional & Affordable <span className="text-[#041869]">Printing Services</span>
          </h1>
          <p className="text-lg mb-8 text-[#6c757d]">
            Your one-stop shop for all your printing needs. Quality results, fast turnaround, and unbeatable prices for students and professionals.
          </p>
          <Link
            to="/order-prints"
            className="inline-flex items-center bg-[#041869] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-[#4a63cc] hover:scale-105 transition-all duration-300"
          >
            Get Started
            <span className="ml-2 font-bold text-lg transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-96 h-64 bg-[#e9ecef] rounded-3xl flex items-center justify-center shadow-lg">
            {/* <span className="text-[#adb5bd] font-semibold text-lg">[Printing Studio Image]</span> */}
            <img src="/d.jpeg" alt="Printing Studio" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>
      </section>

      {/* Services Section styled to match the image */}
      <section className="max-w-7xl mx-auto mt-16 px-4 py-8">
        <div className=" flex flex-col justify-center items-center mb-10">
          
            <h2 className="text-4xl items-center  font-extrabold mb-2 text-[#041869] ">Services We Provide</h2>
            <p className="text-black text-end text-lg">
              Beautiful and functional prints to provide best user experience and help you succeed.
            </p>
          
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 shadow-lg transition-all duration-300 transform hover:scale-105 ${
                index === 1 ? 'bg-[#fff3cd]' : '' // Conditional styling for the yellow card
              }`}
            >
              <div className="flex flex-col items-start">
                <ServiceIcon iconName={service.icon} />
                <h3 className="font-extrabold text-2xl mb-2 text-[#041869]">{service.name}</h3>
                <p className="text-[#6c757d] mb-4 text-sm">{service.desc}</p>
                <Link
                  to="/services"
                  className="bg-[#212529] text-white text-sm px-6 py-2 rounded-lg font-semibold hover:bg-[#495057] transition-colors mt-auto"
                >
                  Find Out More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </section>

      {/* Offers Section, left unchanged as it's an external component */}
      <Offers />
       <Footer/>
      {/* Enhanced Footer */}
      {/* <footer className="bg-[#e9ecef] mt-16 py-8 text-center text-[#6c757d] border-t border-[#dee2e6]">
        &copy; {new Date().getFullYear()} College Printer Shop. All rights reserved.
      </footer> */}
    </div>
  );
}

export default Home;