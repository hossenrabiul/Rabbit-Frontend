import React, { useContext } from "react";
import MyOrdersPage from "./MyOrdersPage";
import { useEffect } from "react";
import { useState } from "react";
import { getOrders } from "../services/order.service";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  };

  useEffect(() => {
    const fetchOrder = async () => {
      const data = await getOrders();
      setOrders(data);
    };
    fetchOrder();
  }, []);

  if (loading) {
    return <p className="text-center py-4">Loading...</p>;
  }
  if (!user) {
    navigate("/login");
  }
  return (
    <div className="min-h-screen flex flex-col mt-[124px]">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row space-x-6 space-y-6 md:space-y-0">
          {/* Left section */}
          <div className="w-full md:w-1/3 lg:w-1/4 p-6 rounded-lg shadow-md">
            <h1 className="text-3xl sm:text-2xl font-bold mb-3">
              Rabiul Hosen
            </h1>
            <p className="text-sm font-light mb-2">
              RobiulHossen0081@gmail.com
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-800 w-full py-2 text-white font-bold rounded"
            >
              Logout
            </button>
          </div>
          {/* Right section */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrdersPage orders={orders} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
