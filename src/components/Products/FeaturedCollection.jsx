import React from "react";
import featured from "../../assets/Reddit/featured.webp";
import { Link } from "react-router-dom";
const FeaturedCollection = () => {
  return (
    <div className="container mx-auto py-10">
      <div className=" bg-[#BADFDB] overflow-hidden rounded-lg flex flex-col-reverse md:flex-row items-center">
        {/* Left writing Part */}

        <div className="w-full md:w-1/2 p-10 text-center md:text-left">
          <h5 className="text-lg font-semibold mb-2 text-gray-800">
            Comport and Style
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-950 mb-4 tracking-tighter">
            Apparel made for your every life
          </h1>
          <p className="text-[16px] text-gray-600 font-medium tracking-tighter">
            Discover high-quality comfotable clothng that effortlessly blends
            fashion and function. Designed to make you look and feel good every
            day
          </p>
          <Link to={"/collection/brand"}>
            <button className="mt-8 bg-black text-white text-sm font-semibold rounded px-6 py-2">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="flex-1">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover "
              src={featured}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCollection;
