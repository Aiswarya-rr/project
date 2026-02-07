
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const [activeTab, setActiveTab] = useState("orders"); // orders or contacts

//   const [orders, setOrders] = useState([]);
//   const [contacts, setContacts] = useState([]);

//   // Fetch Orders
//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/orders");
//       setOrders(res.data);
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//     }
//   };

//   // Fetch Contacts
//   const fetchContacts = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/contacts");
//       setContacts(res.data);
//     } catch (err) {
//       console.error("Error fetching contacts:", err);
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (email === "admin@example.com" && password === "1234") {
//       setIsLoggedIn(true);
//       fetchOrders(); // default fetch orders
//     } else {
//       alert("❌ Invalid admin credentials!");
//     }
//   };

//   const handleDelete = async (id, type) => {
//     if (!window.confirm("Are you sure you want to delete this item?")) return;

//     try {
//       if (type === "orders") {
//         await axios.delete(`http://localhost:5000/api/orders/${id}`);
//         setOrders((prev) => prev.filter((o) => o._id !== id));
//       } else if (type === "contacts") {
//         await axios.delete(`http://localhost:5000/api/contacts/${id}`);
//         setContacts((prev) => prev.filter((c) => c._id !== id));
//       }
//       alert("✅ Deleted successfully");
//     } catch (err) {
//       console.error("Error deleting item:", err);
//       alert("❌ Failed to delete");
//     }
//   };

//   // Handle tab switch
//   const handleTabSwitch = (tab) => {
//     setActiveTab(tab);
//     if (tab === "orders") fetchOrders();
//     else if (tab === "contacts") fetchContacts();
//   };

//   if (!isLoggedIn) {
//     return (
//       <div className="flex justify-center items-center min-h-screen bg-gray-100">
//         <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
//           <h2 className="text-2xl font-bold text-center text-[#160472] mb-6">
//             🔑 Admin Login
//           </h2>
//           <form onSubmit={handleLogin} className="space-y-4">
//             <input
//               type="email"
//               placeholder="Admin Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   // Render table based on active tab
//   const renderTable = () => {
//     if (activeTab === "orders") {
//       if (orders.length === 0) return <p className="text-gray-600">No orders found.</p>;
//       return (
//         <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-blue-600 text-white">
//                 <th className="p-3">Order ID</th>
//                 <th className="p-3">Name</th>
//                 <th className="p-3">Service</th>
//                 <th className="p-3">Quantity</th>
//                 <th className="p-3">Delivery</th>
//                 <th className="p-3">Binding</th>
//                 <th className="p-3">Quote</th>
//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order, idx) => (
//                 <tr key={order._id} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                   <td className="p-3 font-mono text-sm">{order.orderId}</td>
//                   <td className="p-3">{order.name}</td>
//                   <td className="p-3">{order.service}</td>
//                   <td className="p-3">{order.quantity}</td>
//                   <td className="p-3">{order.delivery}</td>
//                   <td className="p-3">{order.binding}</td>
//                   <td className="p-3 font-bold text-blue-600">₹{order.quote}</td>
//                   <td className="p-3">
//                     <button
//                       onClick={() => handleDelete(order._id, "orders")}
//                       className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     } else if (activeTab === "contacts") {
//       if (contacts.length === 0) return <p className="text-gray-600">No contacts found.</p>;
//       return (
//         <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-green-600 text-white">
//                 <th className="p-3">Contact ID</th>
//                 <th className="p-3">Name</th>
//                 <th className="p-3">Email</th>
//                 <th className="p-3">Phone</th>
//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {contacts.map((contact, idx) => (
//                 <tr key={contact._id} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                   <td className="p-3 font-mono text-sm">{contact.contactId}</td>
//                   <td className="p-3">{contact.name}</td>
//                   <td className="p-3">{contact.email}</td>
//                   <td className="p-3">{contact.phone}</td>
//                   <td className="p-3">
//                     <button
//                       onClick={() => handleDelete(contact._id, "contacts")}
//                       className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     }
//   };

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6">📋 Admin Panel</h2>

//       {/* Tab Buttons */}
//       <div className="mb-4 flex gap-4">
//         <button
//           onClick={() => handleTabSwitch("orders")}
//           className={`px-4 py-2 rounded-lg font-semibold ${
//             activeTab === "orders" ? "bg-blue-600 text-white" : "bg-gray-200"
//           }`}
//         >
//           Orders
//         </button>
//         <button
//           onClick={() => handleTabSwitch("contacts")}
//           className={`px-4 py-2 rounded-lg font-semibold ${
//             activeTab === "contacts" ? "bg-green-600 text-white" : "bg-gray-200"
//           }`}
//         >
//           Contacts
//         </button>
//       </div>

//       {/* Render Table */}
//       {renderTable()}
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [activeTab, setActiveTab] = useState("orders");

  const [orders, setOrders] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [services, setServices] = useState([]);

  const [serviceForm, setServiceForm] = useState({
    name: "",
    description: "",
    price: "",
    duration: "",
    _id: null, // null means add, not update
  });

  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

  // Fetch functions
  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/orders`);
      setOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/contacts`);
      setContacts(res.data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  const fetchServices = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/services`);
      setServices(res.data);
    } catch (err) {
      console.error("Error fetching services:", err);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "1234") {
      setIsLoggedIn(true);
      fetchOrders();
      toast.success(" Logged in successfully");
    } else {
       toast.error("❌ Invalid admin credentials!");
    }
  };

  const handleDelete = async (id, type) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await axios.delete(`${API_BASE}/api/${type}/${id}`);
      if (type === "orders") setOrders((prev) => prev.filter((o) => o._id !== id));
      if (type === "contacts") setContacts((prev) => prev.filter((c) => c._id !== id));
      if (type === "services") setServices((prev) => prev.filter((s) => s._id !== id));
       toast.success(" Deleted successfully");
    } catch (err) {
      console.error("Error deleting item:", err);
       toast.error(" Failed to delete");
    }
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    if (tab === "orders") fetchOrders();
    else if (tab === "contacts") fetchContacts();
    else if (tab === "services") fetchServices();
  };

  // --- Services Form Handlers ---
  const handleServiceChange = (e) => {
    const { name, value } = e.target;
    setServiceForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSubmit = async (e) => {
    e.preventDefault();
    try {
      if (serviceForm._id) {
        // Update existing service
        const res = await axios.put(`${API_BASE}/api/services/${serviceForm._id}`, serviceForm);
        setServices((prev) =>
          prev.map((s) => (s._id === serviceForm._id ? res.data.service : s))
        );
        toast.success("Service updated successfully");
      } else {
        // Add new service
        const res = await axios.post(`${API_BASE}/api/services`, serviceForm);
        setServices((prev) => [res.data, ...prev]);
        toast.success("Service added successfully");
      } 
      setServiceForm({ name: "", description: "", price: "", duration: "", _id: null });
    } catch (err) {
      console.error("Error saving service:", err);
      toast.error(" Failed to save service");
    }
  };

  const handleEditService = (service) => {
    setServiceForm(service); // populate form for editing
  };

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-[#160472] mb-6">
            🔑 Admin Login
          </h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-[#2a046c] text-white py-2 rounded-lg font-semibold hover:bg-[#2a046c]/80 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- Render Table ---
  const renderTable = () => {
    if (activeTab === "orders") {
      if (orders.length === 0) return <p className="text-gray-600">No orders found.</p>;
      return (
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#2a046c] text-white">
                <th className="p-3">Order ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Service</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Delivery</th>
                <th className="p-3">Binding</th>
                <th className="p-3">Quote</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={order._id} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3 font-mono text-sm">{order.orderId}</td>
                  <td className="p-3">{order.name}</td>
                  <td className="p-3">{order.service}</td>
                  <td className="p-3">{order.quantity}</td>
                  <td className="p-3">{order.delivery}</td>
                  <td className="p-3">{order.binding}</td>
                  <td className="p-3 font-bold text-blue-600">₹{order.quote}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(order._id, "orders")}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>   
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (activeTab === "contacts") {
      if (contacts.length === 0) return <p className="text-gray-600">No contacts found.</p>;
      return (
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#2a046c] text-white">
                <th className="p-3">Contact ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Message</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, idx) => (
                <tr key={contact._id} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3 font-mono text-sm">{contact._id}</td>
                  <td className="p-3">{contact.name}</td>
                  <td className="p-3">{contact.email}</td>
                  <td className="p-3">{contact.message}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(contact._id, "contacts")}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (activeTab === "services") {
      return (
        <div>
          {/* Service Form */}
          <form
            onSubmit={handleServiceSubmit}
            className="mb-6 bg-white p-4 rounded-lg shadow-lg space-y-3"
          >
            <h3 className="text-xl font-bold">{serviceForm._id ? "Update Service" : "Add Service"}</h3>
            <input
              type="text"
              name="name"
              placeholder="Service Name"
              value={serviceForm.name}
              onChange={handleServiceChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={serviceForm.description}
              onChange={handleServiceChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={serviceForm.price}
              onChange={handleServiceChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <input
              type="text"
              name="duration"
              placeholder="Duration"
              value={serviceForm.duration}
              onChange={handleServiceChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-[#2a046c] text-white px-4 py-2 rounded hover:bg-[#2a046c] transition"
            >
              {serviceForm._id ? "Update Service" : "Add Service"}
            </button>
            {serviceForm._id && (
              <button
                type="button"
                onClick={() => setServiceForm({ name: "", description: "", price: "", duration: "", _id: null })}
                className="ml-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            )}
          </form>

          {/* Services Table */}
          {services.length === 0 ? (
            <p className="text-gray-600">No services found.</p>
          ) : (
            <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#2a046c] text-white">
                    <th className="p-3">Service ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Duration</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service, idx) => (
                    <tr key={service._id} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-3 font-mono text-sm">{service._id}</td>
                      <td className="p-3">{service.name}</td>
                      <td className="p-3">{service.description}</td>
                      <td className="p-3 font-bold text-blue-600">₹{service.price}</td>
                      <td className="p-3">{service.duration}</td>
                      <td className="p-3 flex gap-2">
                        <button
                          onClick={() => handleEditService(service)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(service._id, "services")}
                          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📋 Admin Panel</h2>

      {/* Tab Buttons */}
      <div className="mb-4 flex gap-4">
        <button
          onClick={() => handleTabSwitch("orders")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "orders" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Orders
        </button>
        <button
          onClick={() => handleTabSwitch("contacts")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "contacts" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          Contacts
        </button>
        <button
          onClick={() => handleTabSwitch("services")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "services" ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
        >
          Services
        </button>
      </div>

      {/* Render Table */}
      {renderTable()}
    </div>
  );
}
