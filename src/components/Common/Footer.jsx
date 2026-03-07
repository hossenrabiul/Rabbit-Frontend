import React from "react";
import { FiInstagram } from "react-icons/fi";
import { ImInstagram } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { TbBrandMeta } from "react-icons/tb";
import { TfiTwitter } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t ">
      <div className="container mx-auto">
        <div className="py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-8 ">
          <div>
            <h1 className="text-lg font-semibold mb-4">Newsletter</h1>
            <p className="text-sm text-gray-600 mb-4 font-medium">
              Be the first to about New products,Exclusive events and Great
              Offers
            </p>
            <p className="font-medium mb-6">
              Sign Up and get 40% off your order
            </p>
            <form className="flex">
              <input
                type="email"
                className="w-full p-3 text-sm border-t border-l border-b rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-700"
                placeholder="Write Your Email"
              />
              <button className="transition-all text-sm py-3 text-white bg-black hover:bg-gray-700 px-6 rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
          {/* Shops */}
          <div>
            <h1 className="text-lg font-semibold mb-4">Shop</h1>
            <ul className="text-gray-600 space-y-2">
              <li className="hover:text-gray-500 transition-colors">
                <Link to={"#"}>Man's Top Wear</Link>
              </li>
              <li className="hover:text-gray-500 transition-colors">
                <Link to={"#"}>Women's Top Wear</Link>
              </li>
              <li className="hover:text-gray-500 transition-colors">
                <Link to={"#"}>Man's Bottom Wear</Link>
              </li>
              <li className="hover:text-gray-500 transition-colors">
                <Link to={"#"}>Women's Bottom Wear</Link>
              </li>
            </ul>
          </div>
          {/* Supportive   */}
          <div>
            <h1 className="text-lg font-semibold mb-4">Support</h1>
            <ul className="text-gray-600 space-y-2">
              <li className="hover:text-gray-500 transition-colors">
                <Link to={"#"}>Contact</Link>
              </li>
              <li className="hover:text-gray-500 transition-colors">
                <Link to={"#"}>About</Link>
              </li>
              <li className="hover:text-gray-500 transition-colors">
                <Link to={"#"}>FAQs</Link>
              </li>
              <li className="hover:text-gray-500 transition-colors">
                <Link to={"#"}>Features</Link>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h1 className="text-lg font-semibold mb-4">Follow Us</h1>
            <div className="flex space-x-3 items-center">
              <Link className="text-gray-700 hover:text-gray-500">
                <TbBrandMeta className="w-5 h-5 text-sm" />
              </Link>
              <Link className="text-gray-700 hover:text-gray-500">
                <FiInstagram className="w-5 h-5 text-sm" />
              </Link>
              <Link className="text-gray-700 hover:text-gray-500">
                <TfiTwitter className="w-5 h-5 text-sm" />
              </Link>
            </div>
            <div>
              <p className="text-sm text-gray-700 mt-12">Call Us</p>
              <p className="flex mt-1.5">
                <IoCall className=" w-5 h-5 text-gray-600 mr-2" />
                +01823780816
              </p>
            </div>
          </div>
        </div>

        <div className="container border-t border-gray-200 mx-auto mt-12 py-3 lg:px-0 pt-6">
          <p className="text-sm text-gray-700 text-center">
            @ Rabiul Hossen, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
