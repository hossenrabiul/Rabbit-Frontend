import React, { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../services/product.service";
import { AuthContext } from "../../context/authContext";
import { addToCart } from "../../services/cart.service";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState("");

  const [mainImage, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const navigate = useNavigate();

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(id);
      setProduct(data.data);
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    setImage(product.image);
  }, [product.image]);

  const handleAddToCart = async (id) => {
    if (!user) {
      navigate("/login");
    }

    setIsButtonDisabled(true);
    
    const addProduct = await addToCart(id, quantity);

  };

  return (
    <div className="p-6 mt-[124px]">
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl">
        <div className="flex flex-col md:flex-row">
          {/* Left side */}
          <div className="hidden md:flex flex-col space-y-2 mr-6">
            {product?.images?.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={product.name}
                className={`w-20 h-20 object-cover rounded-lg border ${
                  item == mainImage ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setImage(item)}
              />
            ))}
          </div>

          {/* Main image */}
          <div className="md:w-1/2 mb-4">
            <div>
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg border "
              />
            </div>
          </div>

          {/* Mobile version */}
          <div className="md:hidden flex space-x-4 mb-4">
            {product?.images?.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={product.name}
                className={`w-20 h-20 object-cover rounded-lg border ${
                  item == mainImage ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setImage(item)}
              />
            ))}
          </div>

          {/* Right side */}
          <div className="md:w-1/2 md:ml-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              {product.name}
            </h2>
            <p className="text-2xl font-bold text-green-600 mb-3">
              ৳ {product.price}
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-3">
              {product.description}
            </p>
            <div className="">
              <h3 className="text-lg font-semibold mb-3">Product Details</h3>

              <div className="grid grid-cols-2 gap-y-2 text-gray-700">
                <span className="font-medium">Pant Type:</span>
                <span>{product.pant}</span>

                <span className="font-medium">Quality:</span>
                <span>{product.quality}</span>
              </div>
            </div>

            {/* quantity */}
            <p className="mt-4 text-lg font-bold">Quantity : </p>
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => handleQuantityChange("minus")}
                className="px-2 py-1 rounded border text-lg bg-gray-200"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => handleQuantityChange("plus")}
                className="px-2 py-1 rounded border text-lg bg-gray-200"
              >
                +
              </button>
            </div>

            <button
              onClick={() => handleAddToCart(id)}
              disabled={isButtonDisabled}
              className={`mt-5 font-semibold py-3 px-2 bg-black text-white w-full rounded ${isButtonDisabled ? "bg-gray-500" : "bg-black"}`}
            >
              {isButtonDisabled ? "Adding to Cart..." : "Add to Cart"}
            </button>
          </div>
        </div>

        {/* <div className="mt-12">
          <h2 className="roboto-font text-center mb-4 text-3xl font-bold">
            You May Like Also
          </h2>

          <ProductGrid products={GridProducts} />
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetails;
