import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OrderPrints from "./pages/OrderPrints";
import DesignTools from "./pages/DesignTools";
import Services from "./pages/Services";
import PriceList from "./pages/PriceList";
import HowItWorks from "./pages/HowItWorks";
import OrderTracking from "./pages/OrderTracking";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Offers from "./pages/Offers";  
import AdminLogin from "./pages/AdminLogin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";     
import Profile from "./pages/Profile"; 
import { Toaster } from "sonner";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-prints" element={<OrderPrints />} />
        <Route path="/design-tools" element={<DesignTools />} />
        <Route path="/services" element={<Services />} />
        <Route path="/price-list" element={<PriceList />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

       <Toaster richColors position="bottom-right" />
    </Router>
  );
}

export default App;
