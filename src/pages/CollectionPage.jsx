import { useEffect, useState } from "react";
import { Heart, ShoppingBag, Eye, Star, ArrowRight } from "lucide-react";
import { useSearchParams, Link } from "react-router-dom";
import { getProducts } from "../services/product.service";

const CollectionPage = () => {
  const [params] = useSearchParams();
  const queryString = params.toString();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState({});
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts(queryString);
        setProducts(data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [queryString]);

  const toggleFavorite = (productId, e) => {
    e.preventDefault();
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header Section */}
      <div className="pt-40 pb-12 px-5 md:px-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 font-light mb-6">
            Browse our premium selection of jewelry and fashion pieces
          </p>

          {/* Simple Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="text-sm text-gray-600 font-light">
                <span className="font-semibold text-gray-900">{products.length}</span> products available
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                Sort by
              </span>
              <select className="text-sm font-light text-gray-700 bg-white border border-gray-300 rounded-lg px-3 py-2 hover:border-gray-400 focus:outline-none focus:border-gray-900 transition-colors">
                <option>Latest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Best Rating</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-5 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="w-full h-96 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <Link
                  to={`/product/${product._id}`}
                  key={product._id}
                  className="group"
                  onMouseEnter={() => setHoveredProduct(product._id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  style={{
                    animation: !loading
                      ? `fadeIn 0.6s ease-out ${index * 0.05}s both`
                      : "none",
                  }}
                >
                  {/* Product Card */}
                  <div className="h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative mb-5 overflow-hidden rounded-lg bg-gray-100 h-80">
                      {/* Image */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Favorite Button */}
                      <button
                        onClick={(e) => toggleFavorite(product._id, e)}
                        className={`absolute top-3 right-3 p-2.5 rounded-full transition-all duration-300 ${
                          favorites[product._id]
                            ? "bg-red-500 text-white"
                            : "bg-white text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            favorites[product._id] ? "fill-current" : ""
                          }`}
                        />
                      </button>

                      {/* Action Buttons - Appear on Hover */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 flex gap-2 p-3 transition-all duration-300 ${
                          hoveredProduct === product._id
                            ? "translate-y-0 opacity-100"
                            : "translate-y-2 opacity-0 pointer-events-none"
                        }`}
                      >
                        <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-gray-900 text-white text-xs rounded-md hover:bg-gray-800 transition-colors font-medium uppercase tracking-wider">
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-gray-200 text-gray-900 text-xs rounded-md hover:bg-gray-300 transition-colors font-medium uppercase tracking-wider">
                          <Eye className="w-3.5 h-3.5" />
                          View
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col">
                      {/* Title */}
                      <h3 className="text-base font-light text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      {product.rating && (
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(product.rating)
                                    ? "fill-amber-400 text-amber-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">
                            {product.reviews ? `(${product.reviews})` : ""}
                          </span>
                        </div>
                      )}

                      {/* Price */}
                      <div className="mt-auto">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-light text-gray-900">
                            {product.price?.toFixed(2) || "0.00"} TK
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              ${product.originalPrice?.toFixed(2)}
                            </span>
                          )}
                        </div>

                        {/* Discount Badge */}
                        {product.discount && (
                          <div className="mt-2">
                            <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                              Save {product.discount}%
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-gray-900 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-600 font-light mb-6">
                We couldn't find any products matching your criteria
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors font-medium uppercase tracking-wide"
              >
                Back to Home <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Simple Footer CTA */}
      {products.length > 0 && (
        <div className="border-t border-gray-200 px-5 md:px-8 py-12">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-3">
              Need Help?
            </h2>
            <p className="text-gray-600 font-light mb-6">
              Can't find what you're looking for? Contact our support team
            </p>
            <button className="px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm uppercase tracking-wide">
              Contact Us
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CollectionPage;