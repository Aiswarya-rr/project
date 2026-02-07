// import React, { useState } from "react";
// import axios from "axios";

// export default function Signup() {
//   const [form, setForm] = useState({ name: "", email: "", password: "" });
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/signup", form);
//       setMessage(res.data.message);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Signup failed");
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "auto" }}>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" onChange={handleChange} required />
//         <br />
//         <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
//         <br />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
//         <br />
//         <button type="submit">Signup</button>
//       </form>
//       <p>{message}</p>
//     </div>
//   );
// }



import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    try {
      const res = await axios.post(`${API_BASE}/api/signup`, form);
      localStorage.setItem("token", res.data.token);
      setMessage("Account created successfully! Redirecting...");
      setIsSuccess(true);
      // Optional: Redirect the user after a delay
      // setTimeout(() => {
      //   window.location.href = "/dashboard";
      // }, 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed. Please try again.");
      setIsSuccess(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="mt-2 text-gray-500">Get started by creating your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 sr-only">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-gray-800 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 sr-only">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-gray-800 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 sr-only">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password (6+ characters)"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-gray-800 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 text-lg font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md"
          >
            Signup
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-center text-sm font-medium ${isSuccess ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        <div className="text-center text-sm">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}