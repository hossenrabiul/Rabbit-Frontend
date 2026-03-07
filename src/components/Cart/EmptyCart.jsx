import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";

const EmptyCart = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 mt-[124px]">
      <div className="text-center max-w-md">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-100 p-6 rounded-full">
            <HiOutlineShoppingBag className="text-5xl text-gray-500" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Your cart is empty
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          Looks like you haven't added anything to your cart yet.  
          Start exploring our products and find something you love.
        </p>

        {/* Button */}
        <Link
          to="/collection/all"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;