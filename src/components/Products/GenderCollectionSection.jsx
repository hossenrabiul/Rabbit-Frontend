import React from "react";
import mans from "../../assets/Reddit/women-2.jpg";
import { Link } from "react-router-dom";
const GenderCollectionSection = () => {
  return (
    <section className="container mx-auto py-16 px-4 lg:px-0 flex flex-col md:flex-row gap-8">
      <div className="flex flex-1 relative">
        <img
          src="https://i.ibb.co.com/60nzXKmz/Whats-App-Image-2026-03-05-at-8-22-17-PM.jpg"
          alt="women's"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute left-8 bottom-8 p-2 bg-white rounded">
          <h3 className="text-sm font-bold">Clothes Collection</h3>
          <Link
            to={"collections/all"}
            className="text-sm font-bold underline"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="flex flex-1 relative">
        <img
          src={mans}
          alt="women's"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute left-8 bottom-8 p-2 bg-white rounded">
          <h3 className="text-sm font-bold">Jewelry Collection</h3>
          <Link
            to={"collections/all"}
            className="text-sm font-bold underline"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
