// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Profile() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) return;

//     axios
//       .get("http://localhost:5000/api/profile", {
//         headers: { Authorization: token },
//       })
//       .then((res) => setUser(res.data.user))
//       .catch(() => setUser(null));
//   }, []);

//   if (!user) return <p>Please login</p>;

//   return (
//     <div>
//       <h2>Profile</h2>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get("http://localhost:5000/api/profile", {
          headers: { Authorization: token },
        });
        setUser(res.data.user);
        setLoading(false);
      } catch (err) {
        setError("Please login to view your profile.");
        setLoading(false);
        // Clear token on authentication failure
        localStorage.removeItem("token");
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <p className="text-red-500 font-bold mb-4">{error}</p>
          <a href="/login" className="text-blue-500 hover:underline">Go to Login</a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h2>
          <p className="text-gray-500">View and manage your account details.</p>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-sm text-gray-500">Name</h3>
            <p className="text-gray-800 text-lg font-medium">{user.name}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-sm text-gray-500">Email</h3>
            <p className="text-gray-800 text-lg font-medium">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}