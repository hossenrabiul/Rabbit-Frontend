import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, idx) => (
        <Link key={idx} to={`product/${product._id}`} className="block">
          <div className="p-4 bg-white rounded-lg">
            <div className="w-full h-96 mb-4">
              <img src={product.image} alt=""
              className="w-full h-full rounded-lg object-cover"
              />
            </div>

            <div>
                <h3 className="text-sm font-medium mb-2 tracking-tighter">{product.name}</h3>
                <p className="text-sm font-medium text-shadow-gray-500">${product.price}</p>
              </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
