// // import React, { useState } from "react";

// // function ContactUs() {
// //   const [form, setForm] = useState({ name: "", email: "", message: "" });
// //   const [success, setSuccess] = useState("");

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Prepare JSON data
// //     const data = {
// //       name: form.name,
// //       email: form.email,
// //       message: form.message,
// //       timestamp: new Date().toISOString(),
// //     };
// //     // Create a blob and trigger download as contact-submission.json
// //     const blob = new Blob([JSON.stringify(data, null, 2)], {
// //       type: "application/json",
// //     });
// //     const url = URL.createObjectURL(blob);
// //     const a = document.createElement("a");
// //     a.href = url;
// //     a.download = "contact-submission.json";
// //     a.click();
// //     URL.revokeObjectURL(url);
// //     setSuccess("Your message has been saved as a JSON file. Thank you!");
// //     setForm({ name: "", email: "", message: "" });
// //     setTimeout(() => setSuccess(""), 4000);
// //   };

// //   return (
// //     <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded shadow">
// //       <h2 className="text-xl font-bold mb-2">Contact Us</h2>
// //       <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           name="name"
// //           placeholder="Your Name"
// //           className="border rounded px-3 py-2"
// //           value={form.name}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Your Email"
// //           className="border rounded px-3 py-2"
// //           value={form.email}
// //           onChange={handleChange}
// //           required
// //         />
// //         <textarea
// //           name="message"
// //           placeholder="Your Message"
// //           className="border rounded px-3 py-2"
// //           rows={4}
// //           value={form.message}
// //           onChange={handleChange}
// //           required
// //         />
// //         <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
// //           Send
// //         </button>
// //         {success && <div className="text-green-600">{success}</div>}
// //       </form>
// //       <div className="mt-4">
// //         <p>Email: printshop@college.edu</p>
// //         <p>Phone: +91-1234567890</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ContactUs;

// import React, { useState } from "react";

// function ContactPage() {
//   const [form, setForm] = useState({
//     name: "",
//     company: "",
//     phone: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted with data:", form);
//     // In a real application, you would send this data to a backend server.
//     // For this example, we will just log it to the console.
//     alert("Message sent! (In a real app, this would go to a server.)");
//     setForm({
//       name: "",
//       company: "",
//       phone: "",
//       email: "",
//       subject: "",
//       message: "",
//     });
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
//       <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden max-w-6xl w-full">
//         {/* Left Column: Form Section */}
//         <div className="p-12 md:w-1/2">
//           <h2 className="text-3xl font-bold mb-2 text-gray-800">
//             Send us a message
//           </h2>
//           <p className="text-gray-500 mb-8">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//             tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//           </p>
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={form.name}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-b border-gray-300 focus:border-purple-600 focus:outline-none py-2"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Company
//                 </label>
//                 <input
//                   type="text"
//                   name="company"
//                   placeholder="Company"
//                   value={form.company}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-b border-gray-300 focus:border-purple-600 focus:outline-none py-2"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Phone
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone"
//                   value={form.phone}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-b border-gray-300 focus:border-purple-600 focus:outline-none py-2"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={form.email}
//                   onChange={handleChange}
//                   className="mt-1 block w-full border-b border-gray-300 focus:border-purple-600 focus:outline-none py-2"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Subject
//               </label>
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={form.subject}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-b border-gray-300 focus:border-purple-600 focus:outline-none py-2"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 rows="4"
//                 value={form.message}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-b border-gray-300 focus:border-purple-600 focus:outline-none py-2"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-purple-600 text-white font-medium py-3 px-6 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 inline-block mr-2"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//               </svg>
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Right Column: Contact Details Section */}
//         <div className="p-12 md:w-1/2 bg-gray-50">
//           <h2 className="text-3xl font-bold mb-2 text-gray-800">Get in touch</h2>
//           <p className="text-gray-500 mb-8">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
//             tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
//           </p>
//           <div className="space-y-8">
//             <div className="flex items-start">
//               <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Location
//                 </h3>
//                 <p className="text-gray-600">
//                   Jalan Cempaka Wangi No 22 <br /> Jakarta - Indonesia
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                   <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Email us
//                 </h3>
//                 <p className="text-gray-600">
//                   support@yourdomain.tld <br /> hello@yourdomain.tld
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-600">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.002 11.002 0 006.062 6.062l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                 </svg>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Call us
//                 </h3>
//                 <p className="text-gray-600">
//                   +6221.2002.2012 <br /> +6221.2002.2013 (Fax)
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="mt-12">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">
//               Follow our social media
//             </h3>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="text-gray-500 hover:text-purple-600 transition-colors"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.633 9.143 8.397 9.878v-6.988H8.25V12h2.147V9.75c0-2.128 1.258-3.308 3.208-3.308.913 0 1.85.163 1.85.163v2.029h-1.037c-1.018 0-1.332.63-1.332 1.282V12h2.383l-.382 2.89H14.156v6.988C18.367 21.143 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-500 hover:text-purple-600 transition-colors"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M12 2c2.68 0 2.99.01 4.04.06 1.05.05 1.79.21 2.42.46.63.25 1.17.6 1.71 1.14.54.54.89 1.08 1.14 1.71.25.63.41 1.37.46 2.42.05 1.05.06 1.36.06 4.04s-.01 2.99-.06 4.04c-.05 1.05-.21 1.79-.46 2.42-.25.63-.6 1.17-1.14 1.71-.54.54-1.08.89-1.71 1.14-.63.25-1.37.41-2.42.46-1.05.05-1.36.06-4.04.06s-2.99-.01-4.04-.06c-1.05-.05-1.79-.21-2.42-.46-.63-.25-1.17-.6-1.71-1.14-.54-.54-.89-1.08-1.14-1.71-.25-.63-.41-1.37-.46-2.42-.05-1.05-.06-1.36-.06-4.04s.01-2.99.06-4.04c.05-1.05.21-1.79.46-2.42.25-.63.6-1.17 1.14-1.71.54-.54 1.08-.89 1.71-1.14.63-.25 1.37-.41 2.42-.46 1.05-.05 1.36-.06 4.04-.06zm0-2c-2.71 0-3.05.01-4.12.06-1.07.05-1.85.22-2.5.48-.65.26-1.2.62-1.77 1.19-.57.57-.93 1.12-1.19 1.77-.26.65-.43 1.43-.48 2.5-.05 1.07-.06 1.41-.06 4.12s.01 3.05.06 4.12c.05 1.07.22 1.85.48 2.5.26.65.62 1.2 1.19 1.77.57.57 1.12.93 1.77 1.19.65.26 1.43.43 2.5.48 1.07.05 1.41.06 4.12.06s3.05-.01 4.12-.06c1.07-.05 1.85-.22 2.5-.48.65-.26 1.2-.62 1.77-1.19.57-.57.93-1.12 1.19-1.77.26-.65.43-1.43.48-2.5.05-1.07.06-1.41.06-4.12s-.01-3.05-.06-4.12c-.05-1.07-.22-1.85-.48-2.5-.26-.65-.62-1.2-1.19-1.77-.57-.57-.93-.93-1.77-1.19-.65-.26-1.43-.43-2.5-.48-1.07-.05-1.41-.06-4.12-.06zm0 4a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8zM19.7 4.3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-500 hover:text-purple-600 transition-colors"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M12 2c2.68 0 2.99.01 4.04.06 1.05.05 1.79.21 2.42.46.63.25 1.17.6 1.71 1.14.54.54.89 1.08 1.14 1.71.25.63.41 1.37.46 2.42.05 1.05.06 1.36.06 4.04s-.01 2.99-.06 4.04c-.05 1.05-.21 1.79-.46 2.42-.25.63-.6 1.17-1.14 1.71-.54.54-1.08.89-1.71 1.14-.63.25-1.37.41-2.42.46-1.05.05-1.36.06-4.04.06s-2.99-.01-4.04-.06c-1.05-.05-1.79-.21-2.42-.46-.63-.25-1.17-.6-1.71-1.14-.54-.54-.89-1.08-1.14-1.71-.25-.63-.41-1.37-.46-2.42-.05-1.05-.06-1.36-.06-4.04s.01-2.99.06-4.04c.05-1.05.21-1.79.46-2.42.25-.63.6-1.17 1.14-1.71.54-.54 1.08-.89 1.71-1.14.63-.25 1.37-.41 2.42-.46 1.05-.05 1.36-.06 4.04-.06z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-500 hover:text-purple-600 transition-colors"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.5c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5z" />
//                   <path d="M15.4 9.1c.3.1.5.3.7.6.2.3.3.6.3.9s-.1.6-.3.9c-.2.3-.4.5-.7.6l-2.4 1.2c-.3.1-.6.1-.9 0-.3-.1-.6-.2-.7-.4-.2-.2-.3-.5-.3-.8s.1-.6.3-.9c.2-.3.4-.5.7-.6l2.4-1.2c.3-.1.6-.1.9 0 .3.1.6.2.7.4.2.2.3.5.3.8zM12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 1.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5z" />
//                 </svg>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-500 hover:text-purple-600 transition-colors"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                 >
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.34 14.17h-2.19V9.75h2.19v4.42zm2.18 0h-2.19v-4.42h2.19v4.42zm6.27-5.04c-.39-.17-.83-.26-1.28-.26-1.57 0-2.67 1.25-2.67 2.94v2.53h-2.2v-7.1h2.12v1.07c.36-.57.94-.96 1.63-1.13v-.01h.01c.2-.04.42-.06.63-.06.87 0 1.63.36 2.18.99.55-.63 1.31-.99 2.18-.99.54 0 1.06.1 1.54.29V9.75h-2.12z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactPage;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const data = {
      name: form.name,
      company: form.company,
      phone: form.phone,
      email: form.email,
      subject: form.subject,
      message: form.message,
      timestamp: new Date().toISOString(),
    };

    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.success) {
      toast.success("Message sent successfully!");
      setForm({
        name: "",
        company: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      toast.error("Failed to send message. Try again.");
    }
  } catch (err) {
    console.error(err);
    toast.error("Error sending message. Check console for details.");
  }
};  

  
  
  const ContactHeaderIllustration = () => (
  <div className="relative w-full max-w-lg mx-auto md:w-auto h-48 md:h-60 flex items-center justify-center">
    {/* <div className="absolute top-0 right-1/4 bg-yellow-400 rounded-full w-24 h-24 blur-md opacity-30 animate-pulse-slow" /> */}
    <div className="relative z-10 flex items-center justify-center space-x-4">
      <div className="w-24 h-24 bg-cover bg-center rounded-full" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/women/44.jpg')" }}></div>
      <div className="w-24 h-24 bg-cover bg-center rounded-full" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/men/32.jpg')" }}></div>
    </div>
   
  </div>
);

const contactCards = [
  {
    title: "Sales",
    desc: "Whether you're new or a current customer, get in touch with our Sales team to discuss how we can work together.",
    buttonText: "Contact Sales",
    link: "/contact-sales",
  },
  {
    title: "Support",
    desc: "Access resources to help our customers learn how to better utilize our services, find answers to tech questions and request assistance.",
    buttonText: "Create a Ticket",
    link: "/support-ticket",
  },
  {
    title: "Partners",
    desc: "Join our mission to show the world that quality printing is for everyone by referring your network to College Printer Shop.",
    buttonText: "Join Our Partner Program",
    link: "/partners",
  },
  {
    title: "Press",
    desc: "Check out the most recent news, company information, and brand assets you can use. Or, get in touch with our PR team.",
    buttonText: "Email Public Relations",
    link: "/press",
  },
];
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted with data:", form);
  //   // In a real application, you would send this data to a backend server.
  //   // For this example, we will just log it to the console.
  //   alert("Message sent! (In a real app, this would go to a server.)");
  //   setForm({
  //     name: "",
  //     company: "",
  //     phone: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });
  // };

  return (
    <>
     <div className="bg-white min-h-screen font-sans">
      {/* "Get in touch" Header Section */}
      <section className="bg-[#250363] text-white py-16 px-8 sm:px-16 md:px-24 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Get in touch
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
            We love hearing from you. Reach out below and let us know how we can help.
          </p>
        </div>
        <div className="lg:w-1/2">
          <ContactHeaderIllustration />
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="bg-gray-100 py-16 px-8 sm:px-16 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto -mt-32 relative z-10">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl flex flex-col justify-between h-full hover:shadow-2xl transition-all duration-300"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  {card.desc}
                </p>
              </div>
              <Link
                to={card.link}
                className="inline-block w-full text-center bg-[#212529] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#495057] transition-colors"
              >
                {card.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </section>
      
      {/* You can add a map or other contact details here */}
    </div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden max-w-6xl w-full">
        {/* Left Column: Form Section */}
        <div className="p-12 md:w-1/2">
          <h2 className="text-3xl font-bold mb-2 text-[#041869]">
            Send us a message
          </h2>
          <p className="text-gray-500 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b border-gray-300 focus:border-[#041869] focus:outline-none py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={form.company}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b border-gray-300 focus:border-[#041869] focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b border-gray-300 focus:border-[#041869] focus:outline-none py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-b border-gray-300 focus:border-[#041869] focus:outline-none py-2"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-1 block w-full border-b border-gray-300 focus:border-[#041869] focus:outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="mt-1 block w-full border-b border-gray-300 focus:border-[#041869] focus:outline-none py-2"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#041869] text-white font-medium py-3 px-6 rounded-md hover:bg-[#041869]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#041869] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column: Contact Details Section */}
        <div className="p-12 md:w-1/2 bg-gray-50">
          <h2 className="text-3xl font-bold mb-2 text-[#041869]">
            Get in touch
          </h2>
          <p className="text-gray-500 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-[#041869]/10 p-3 rounded-full mr-4 text-[#041869]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#041869]">
                  Location
                </h3>
                <p className="text-gray-600">
                  Jalan Cempaka Wangi No 22 <br /> Jakarta - Indonesia
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#041869]/10 p-3 rounded-full mr-4 text-[#041869]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#041869]">
                  Email us
                </h3>
                <p className="text-gray-600">
                  support@yourdomain.tld <br /> hello@yourdomain.tld
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-[#041869]/10 p-3 rounded-full mr-4 text-[#041869]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.002 11.002 0 006.062 6.062l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#041869]">
                  Call us
                </h3>
                <p className="text-gray-600">
                  +6221.2002.2012 <br /> +6221.2002.2013 (Fax)
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-[#041869] mb-4">
              Follow our social media
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-[#041869] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.633 9.143 8.397 9.878v-6.988H8.25V12h2.147V9.75c0-2.128 1.258-3.308 3.208-3.308.913 0 1.85.163 1.85.163v2.029h-1.037c-1.018 0-1.332.63-1.332 1.282V12h2.383l-.382 2.89H14.156v6.988C18.367 21.143 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#041869] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2c2.68 0 2.99.01 4.04.06 1.05.05 1.79.21 2.42.46.63.25 1.17.6 1.71 1.14.54.54.89 1.08 1.14 1.71.25.63.41 1.37.46 2.42.05 1.05.06 1.36.06 4.04s-.01 2.99-.06 4.04c-.05 1.05-.21 1.79-.46 2.42-.25.63-.6 1.17-1.14 1.71-.54.54-1.08.89-1.71 1.14-.63.25-1.37.41-2.42.46-1.05.05-1.36.06-4.04.06s-2.99-.01-4.04-.06c-1.05-.05-1.79-.21-2.42-.46-.63-.25-1.17-.6-1.71-1.14-.54-.54-.89-1.08-1.14-1.71-.25-.63-.41-1.37-.46-2.42-.05-1.05-.06-1.36-.06-4.04s.01-2.99.06-4.04c.05-1.05.21-1.79.46-2.42.25-.63.6-1.17 1.14-1.71.54-.54 1.08-.89 1.71-1.14.63-.25 1.37-.41 2.42-.46 1.05-.05 1.36-.06 4.04-.06zm0-2c-2.71 0-3.05.01-4.12.06-1.07.05-1.85.22-2.5.48-.65.26-1.2.62-1.77 1.19-.57.57-.93 1.12-1.19 1.77-.26.65-.43 1.43-.48 2.5-.05 1.07-.06 1.41-.06 4.12s.01 3.05.06 4.12c.05 1.07.22 1.85.48 2.5.26.65.62 1.2 1.19 1.77.57.57 1.12.93 1.77 1.19.65.26 1.43.43 2.5.48 1.07.05 1.41.06 4.12.06s3.05-.01 4.12-.06c1.07-.05 1.85-.22 2.5-.48.65-.26 1.2-.62 1.77-1.19.57-.57.93-1.12 1.19-1.77.26-.65.43-1.43.48-2.5.05-1.07.06-1.41.06-4.12s-.01-3.05-.06-4.12c-.05-1.07-.22-1.85-.48-2.5-.26-.65-.62-1.2-1.19-1.77-.57-.57-.93-.93-1.77-1.19-.65-.26-1.43-.43-2.5-.48-1.07-.05-1.41-.06-4.12-.06zm0 4a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8zM19.7 4.3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#041869] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2c2.68 0 2.99.01 4.04.06 1.05.05 1.79.21 2.42.46.63.25 1.17.6 1.71 1.14.54.54.89 1.08 1.14 1.71.25.63.41 1.37.46 2.42.05 1.05.06 1.36.06 4.04s-.01 2.99-.06 4.04c-.05 1.05-.21 1.79-.46 2.42-.25.63-.6 1.17-1.14 1.71-.54.54-1.08.89-1.71 1.14-.63.25-1.37.41-2.42.46-1.05.05-1.36.06-4.04.06s-2.99-.01-4.04-.06c-1.05-.05-1.79-.21-2.42-.46-.63-.25-1.17-.6-1.71-1.14-.54-.54-.89-1.08-1.14-1.71-.25-.63-.41-1.37-.46-2.42-.05-1.05-.06-1.36-.06-4.04s.01-2.99.06-4.04c.05-1.05.21-1.79.46-2.42.25-.63.6-1.17 1.14-1.71.54-.54 1.08-.89 1.71-1.14.63-.25 1.37-.41 2.42-.46 1.05-.05 1.36-.06 4.04-.06z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#041869] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 1.5c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5-3.806-8.5-8.5-8.5z" />
                  <path d="M15.4 9.1c.3.1.5.3.7.6.2.3.3.6.3.9s-.1.6-.3.9c-.2.3-.4.5-.7.6l-2.4 1.2c-.3.1-.6.1-.9 0-.3-.1-.6-.2-.7-.4-.2-.2-.3-.5-.3-.8s.1-.6.3-.9c.2-.3.4-.5.7-.6l2.4-1.2c.3-.1.6-.1.9 0 .3.1.6.2.7.4.2.2.3.5.3.8zM12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 1.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5 2.015-4.5 4.5-4.5z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#041869] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.34 14.17h-2.19V9.75h2.19v4.42zm2.18 0h-2.19v-4.42h2.19v4.42zm6.27-5.04c-.39-.17-.83-.26-1.28-.26-1.57 0-2.67 1.25-2.67 2.94v2.53h-2.2v-7.1h2.12v1.07c.36-.57.94-.96 1.63-1.13v-.01h.01c.2-.04.42-.06.63-.06.87 0 1.63.36 2.18.99.55-.63 1.31-.99 2.18-.99.54 0 1.06.1 1.54.29V9.75h-2.12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactPage;