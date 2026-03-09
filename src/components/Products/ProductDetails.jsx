import React, { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../services/product.service";
import { AuthContext } from "../../context/authContext";
import { addToCart } from "../../services/cart.service";
import {
  Heart,
  Truck,
  Shield,
  RotateCcw,
  Star,
  ChevronDown,
} from "lucide-react";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [mainImage, setImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

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
   
    try {
      if (!user) {
        navigate("/login");
      }

      setIsButtonDisabled(true);

      const addProduct = await addToCart(id, quantity);
      if (addProduct.success) {
        toast.success(addProduct.message, { duration: 800 });
      } else {
        toast.error(addProduct.message, { duration: 800 });
      }
    } catch (error) {
      toast.error(error.message, { duration: 1000 });
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-[124px] pb-16 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center space-x-2 text-sm text-gray-600">
          <a href="/" className="hover:text-black transition-colors">
            Home
          </a>
          <span>/</span>
          <a
            href="/collections/all"
            className="hover:text-black transition-colors"
          >
            Products
          </a>
          <span>/</span>
          <span className="text-black font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Column - Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm h-[500px] sm:h-[600px] flex items-center justify-center group">
              <img
                src={mainImage}
                alt={product.name}
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              )}

              {/* Wishlist Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-10 border border-gray-100"
              >
                <Heart
                  size={20}
                  className={`transition-colors ${
                    isWishlisted ? "fill-red-500 text-red-500" : "text-gray-700"
                  }`}
                />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            {product?.images && product.images.length > 0 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {product.images.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setImage(item)}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all duration-200 h-24 ${
                      item === mainImage
                        ? "border-black shadow-md"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={item}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-8">
            {/* Product Title & Rating */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
                    {product.name}
                  </h1>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">(128 reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="border-l-4 border-black pl-6 py-2">
              <p className="text-sm text-gray-600 mb-2">Price</p>
              <p className="text-4xl font-bold text-black">৳ {product.price}</p>
              <p className="text-sm text-green-600 font-medium mt-2">
                ✓ In Stock (12+ available)
              </p>
            </div>

            {/* Product Specifications */}
            {(product.pant ||
              product.dupatta ||
              product.size ||
              product.kamiz) && (
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                  Specifications
                </h3>
                <div className="space-y-3">
                  {product.kamiz && (
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                      <span className="text-gray-600">Kamiz</span>
                      <span className="font-medium text-gray-900">
                        {product.kamiz}
                      </span>
                    </div>
                  )}
                  {product.pant && (
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                      <span className="text-gray-600">Pant Type</span>
                      <span className="font-medium text-gray-900">
                        {product.pant}
                      </span>
                    </div>
                  )}
                  {product.dupatta && (
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                      <span className="text-gray-600">Dupatta</span>
                      <span className="font-medium text-gray-900">
                        {product.dupatta}
                      </span>
                    </div>
                  )}
                  {product.size && (
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                      <span className="text-gray-600">Size</span>
                      <span className="font-medium text-gray-900">
                        {product.size}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-900">
                Quantity
              </label>
              <div className="flex items-center space-x-4 bg-gray-50 rounded-xl p-2 w-fit border border-gray-200">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200 font-bold text-gray-900"
                >
                  −
                </button>
                <span className="text-lg font-semibold text-gray-900 min-w-[40px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="p-2 hover:bg-gray-200 rounded-lg transition-colors duration-200 font-bold text-gray-900"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(id)}
              disabled={isButtonDisabled}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                isButtonDisabled
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-900 shadow-lg hover:shadow-xl"
              }`}
            >
              {isButtonDisabled ? (
                <span className="flex items-center justify-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Adding to Cart...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <span>Add to Cart</span>
                  <span>→</span>
                </span>
              )}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center space-y-2">
                <Truck className="mx-auto text-gray-700" size={24} />
                <p className="text-xs font-medium text-gray-700">
                  Fast Delivery
                </p>
                <p className="text-xs text-gray-500">Within 2-3 days</p>
              </div>
              <div className="text-center space-y-2">
                <Shield className="mx-auto text-gray-700" size={24} />
                <p className="text-xs font-medium text-gray-700">Secure</p>
                <p className="text-xs text-gray-500">100% Safe</p>
              </div>
              <div className="text-center space-y-2">
                <RotateCcw className="mx-auto text-gray-700" size={24} />
                <p className="text-xs font-medium text-gray-700">Returns</p>
                <p className="text-xs text-gray-500">30-day policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                icon: "✨",
                title: "Premium Quality",
                desc: "Handpicked fabrics and craftsmanship",
              },
              {
                icon: "🎁",
                title: "Gift Wrapping",
                desc: "Free elegant gift wrapping available",
              },
              {
                icon: "💬",
                title: "24/7 Support",
                desc: "Expert customer service ready",
              },
              {
                icon: "🌍",
                title: "Ethical Fashion",
                desc: "Sustainable and fair trade practices",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
