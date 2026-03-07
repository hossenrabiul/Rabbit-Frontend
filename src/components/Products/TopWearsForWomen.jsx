import React from "react";
import { Link } from "react-router-dom";

const TopWearsForWomen = () => {
  const TopWear = [
    {
      _id: 1,
      name: "The best jeans pent ever",
      price: 1000,
      image: "https://picsum.photos/200/300?random=40",
    },
    {
      _id: 2,
      name: "The best Ledis pent ever",
      price: 1200,
      image: "https://picsum.photos/200/300?random=41",
    },
    {
      _id: 3,
      name: "The best Child pent ever",
      price: 1100,
      image: "https://picsum.photos/200/300?random=42",
    },
    {
      _id: 4,
      name: "The best Women's pent ever",
      price: 1300,
      image: "https://picsum.photos/200/300?random=43",
    },
    {
      _id: 5,
      name: "The best Women's pent ever",
      price: 1230,
      image: "https://picsum.photos/200/300?random=44",
    },
    {
      _id: 6,
      name: "The best Women's pent ever",
      price: 1260,
      image: "https://picsum.photos/200/300?random=45",
    },
    {
      _id: 7,
      name: "The best Women's pent ever",
      price: 1270,
      image: "https://picsum.photos/200/300?random=46",
    },
    {
      _id: 8,
      name: "The best Women's pent ever",
      price: 1290,
      image: "https://picsum.photos/200/300?random=47",
    },
  ];
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-center font-bold text-3xl roboto-font mb-8">
        Top Wears For Women
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {TopWear.map((product, idx) => (
          <Link key={idx} to={`product/${product._id}`}>
            <div className="p-4 bg-white rounded-lg">
              <div className="w-full h-[350px] mb-2">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={product.image}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-sm font-medium mb-2 tracking-tighter">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 font-medium">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopWearsForWomen;
