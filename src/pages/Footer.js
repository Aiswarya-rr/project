import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1c2c3c] text-[#a0aec0] py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info Section */}
        <div className="flex flex-col items-start">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="bg-[#0069b1] text-white rounded-full px-3 py-1 font-bold text-lg tracking-wide shadow-md">
              CPS
            </span>
            <span className="font-bold text-white text-2xl">
              College Printer Hub
            </span>
          </Link>
          <p className="text-sm">
            Your trusted partner for all college printing needs. Fast,
            affordable, and high-quality services for students.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/order-prints"
                className="hover:text-white transition-colors"
              >
                Order Prints
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/offers" className="hover:text-white transition-colors">
                Offers
              </Link>
            </li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Document Printing
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Binding & Lamination
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Poster Printing
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-white transition-colors">
                Specialty Jobs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social Section */}
        <div>
          <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
          <p className="text-sm mb-4">
            123 College Rd, University Town, State 12345
          </p>
          <p className="text-sm mb-4">
            Email: <a href="mailto:info@collegeprinter.com" className="hover:text-white transition-colors">info@collegeprinter.com</a>
          </p>
          <p className="text-sm mb-4">
            Phone: <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 12345 67890</a>
          </p>
          
          {/* <div className="flex space-x-4 mt-2">
            
            <a href="#" className="hover:text-white transition-colors">
              <span className="text-xl">📘</span>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <span className="text-xl">📷</span>
            </a>
           
            <a href="#" className="hover:text-white transition-colors">
              <span className="text-xl">💼</span>
            </a>
          </div> */}
        </div>
      </div>

      <hr className="my-8 border-[#2d3748]" />

      {/* Bottom Legal Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-[#718096]">
        <p>&copy; {currentYear} College Printer Shop. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-4">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;