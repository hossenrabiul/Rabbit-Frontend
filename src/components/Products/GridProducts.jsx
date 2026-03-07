import React, {  } from "react";
import { Link } from "react-router-dom";

const GridProducts = ({ products }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product._id}`}>
            <div className="p-4 rounded-lg bg-white">
              <div className="mb-3 h-72">
                <img
                  src={product.image}
                  className="w-full h-full object-cover rounded-lg"
                  alt=""
                />
              </div>
              <div>
                <h5 className="text-sm font-medium mb-2">{product.name}</h5>
                <p className="text-sm text-gray-500">৳ {product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GridProducts;
