import React from "react";
import { Link } from "react-router-dom";

const UserProducts = () => {
  const products = [
    {
      _id: 2345,
      name: "T-Shirt",
      price: 345,
      sku: 23453939393,
    },
  ];

  const handleProductDelete = (id)=>{
    if(window.confirm("Are you sure to delete this product. ? ..")){
      console.log("Product id : ", id)
    }
  }
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="mb-6 text-2xl font-bold">All Products</h2>

      <div className="overflow-x-auto p-6 sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <td className="px-4 py-3">Name</td>
              <td className="px-4 py-3">ID</td>
              <td className="px-4 py-3">Price</td>
              <td className="px-4 py-3">Sku</td>
              <td className="px-4 py-3">Actions</td>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id} className="hover:bg-gray-50 hover:border-b">
                  <td className="p-4 font-bold text-gray-900">{product.name}</td>
                  <td className="p-4">{product._id}</td>
                  <td className="p-4">{product.price}</td>
                  <td className="p-4">{product.sku}</td>
                  <div className="flex p-4 gap-3">
                    <Link to={"/admin/product/2233/edit"} className="px-4 py-1.5 bg-yellow-600 text-white rounded">Edit</Link>
                    <button 
                    onClick={()=> handleProductDelete(product.id)}
                    className="px-3 py-1.5 bg-red-700 rounded text-white">Delete</button>
                  </div>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-medium text-center">
                  No products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProducts;
