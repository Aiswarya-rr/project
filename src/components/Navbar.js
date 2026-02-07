// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 bg-[#fffdf7] shadow flex justify-between items-center px-6 py-3">
//       <div className="flex items-center gap-2">
//         {/* Logo area */}
//         <span className="bg-[#f3eee7] text-[#041869] rounded-full px-3 py-1 font-bold text-lg tracking-wide shadow">
//           CPS
//         </span>
//         <span className="font-bold text-[#041869] text-xl ml-2">
//           College Printer Shop
//         </span>
//       </div>
//       <div className="flex gap-2">
//         <Link
//           to="/"
//           className="px-3 py-2 rounded-full bg-[#041869] text-white  hover:text-white transition"
//         >
//           Home
//         </Link>
//         <Link
//           to="/signup"
//           className="px-3 py-2 rounded-full bg-[#041869] text-white  hover:text-white transition"
//         >
//           signup
//         </Link> 
      
//        <Link
//           to="/login"
//           className="px-3 py-2 rounded-full bg-[#041869] text-gray-800 hover:bg-green-500 hover:text-white transition"
//         >
//        login
//         </Link> 
//         <Link
//           to="/price-list"
//           className="px-3 py-2 rounded-full bg-[#041869] text-white hover:text-white transition"
//         >
//           Price List
       
//         {/* <Link
//           to="/order-tracking"
//           className="px-3 py-2 rounded-full bg-[#041869] text-white hover:bg-green-500 hover:text-white transition"
//         >
//           Order Tracking
//         </Link> */}
//         <Link
//           to="/contact-us"
//           className="px-3 py-2 rounded-full bg-[#041869] text-white  hover:text-white transition"
//         >
//           Contact Us
//         </Link>
//         <Link
//           to="/faqs"
//           className="px-3 py-2 rounded-full bg-[#041869] text-white  hover:text-white transition"
//         >
//           FAQs
//         </Link>
//         <Link
//           to="/offers"
//           className="px-3 py-2 rounded-full bg-[#041869] text-white hover:text-white transition"
//         >
//           Offers
//         </Link>
//          </Link>
//         <Link
//           to="/profile"
//           className="px-3 py-2 rounded-full bg-[#041869] text-white hover:bg-green-500 hover:text-white transition"
//         >
//           <img src="/us.png" alt="Profile" className="h-5 w-5 inline-block" />
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT
    window.location.href = "/login";  // redirect
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#fffdf7] shadow flex justify-between items-center px-6 py-3">
      <div className="flex items-center gap-2">
        <span className="bg-[#f3eee7] text-[#041869] rounded-full px-3 py-1 font-bold text-lg tracking-wide shadow">
          CPS
        </span>
        <span className="font-bold text-[#041869] text-xl ml-2">
          College Print Hub
        </span>
      </div>

      <div className="flex gap-2 items-center">
        <Link to="/" className="px-3 py-2 rounded-full bg-[#041869] text-white">Home</Link>
        <Link to="/signup" className="px-3 py-2 rounded-full bg-[#041869] text-white">Signup</Link>
        {/* <Link to="/login" className="px-3 py-2 rounded-full bg-[#041869] text-white">Login</Link> */}
        <Link to="/price-list" className="px-3 py-2 rounded-full bg-[#041869] text-white">Price List</Link>
        <Link to="/contact-us" className="px-3 py-2 rounded-full bg-[#041869] text-white">Contact Us</Link>
        <Link to="/faqs" className="px-3 py-2 rounded-full bg-[#041869] text-white">FAQs</Link>
        {/* <Link to="/offers" className="px-3 py-2 rounded-full bg-[#041869] text-white">Offers</Link> */}

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center px-3 py-2 rounded-full"
          >
            <img src="/us.png" alt="Profile" className="h-5 w-5 mr-2" />
            Profile
          </button>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
              <Link
                to="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                My Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
