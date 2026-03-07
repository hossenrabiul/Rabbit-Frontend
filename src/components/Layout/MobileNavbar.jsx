import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const MobileNavbar = ({navDrawOpen, toggleNavbar}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-[75%] h-full bg-white transform transition-transform duration-300 z-50 ${
        navDrawOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
        {/* Close Icon */}
      <div className="flex justify-end p-5">
        <button onClick={toggleNavbar} className="">
          <IoClose className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Nav menu */}
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Menu</h2>
        <nav className="space-y-4">
          <Link
            to={"#"}
            className="block text-sm font-semibold text-gray-600 hover:text-black"
          >
            Men
          </Link>
          <Link
            to={"#"}
            className="block text-sm font-semibold text-gray-600 hover:text-black"
          >
            Women
          </Link>
          <Link
            to={"#"}
            className="block text-sm font-semibold text-gray-600 hover:text-black"
          >
            Top Wear
          </Link>
          <Link
            to={"#"}
            className="block text-sm font-semibold text-gray-600 hover:text-black"
          >
            Bottom Wear
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
