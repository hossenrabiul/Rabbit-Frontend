import React from "react";
import heroImg from "../../assets/Reddit/hero-img-2.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="reddit"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute flex bg-black opacity-60 inset-0 justify-center items-center">
        <div className="p-6 text-center text-white">
          <h1 className="text-4xl md:text-9xl text-white font-bold mb-4 uppercase tracking-tighter">Vacation Ready</h1>
          <p className="mb-4 text-sm font-bold md:text-[20px] bg-gradient-to-r from-gray-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Explore out vacation-ready outfits with fast worldwide shipping</p>
          <Link to={'#'} className="px-6 py-3 text-white text-lg font-medium bg-gray-800 rounded">Shop Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
