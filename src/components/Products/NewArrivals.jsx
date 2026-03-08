import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/product.service";

const NewArrivals = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [favorites, setFavorites] = useState({});
  const [products, setProducts] = useState([]);
  const allProducts = [
    {
      _id: 1,
      name: "Pearl Elegance Necklace",
      category: "Jewelry",
      image: [
        {
          url: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=600&fit=crop",
          alt: "Pearl Elegance Necklace",
        },
      ],
      price: 189.99,
      originalPrice: 249.99,
      discount: 24,
      badge: "New",
      rating: 4.8,
      reviews: 234,
    },
    {
      _id: 2,
      name: "Classic Gold Bracelet",
      category: "Jewelry",
      image: [
        {
          url: "https://images.unsplash.com/photo-1515562141207-6811bcb33e20?w=500&h=600&fit=crop",
          alt: "Classic Gold Bracelet",
        },
      ],
      price: 299.99,
      originalPrice: 399.99,
      discount: 25,
      badge: "Luxury",
      rating: 4.9,
      reviews: 189,
    },
    {
      _id: 3,
      name: "Diamond Ring Collection",
      category: "Jewelry",
      image: [
        {
          url: "https://images.unsplash.com/photo-1599643478820-8a82f69b0146?w=500&h=600&fit=crop",
          alt: "Diamond Ring Collection",
        },
      ],
      price: 599.99,
      originalPrice: 799.99,
      discount: 25,
      badge: "Premium",
      rating: 5.0,
      reviews: 456,
    },
    {
      _id: 4,
      name: "Emerald Drop Earrings",
      category: "Jewelry",
      image: [
        {
          url: "https://images.unsplash.com/photo-1509941943102-10c232535736?w=500&h=600&fit=crop",
          alt: "Emerald Drop Earrings",
        },
      ],
      price: 249.99,
      originalPrice: 349.99,
      discount: 29,
      badge: "Sale",
      rating: 4.7,
      reviews: 312,
    },
    {
      _id: 5,
      name: "Sapphire Statement Brooch",
      category: "Jewelry",
      image: [
        {
          url: "https://images.unsplash.com/photo-1515562141207-6811bcb33e20?w=500&h=600&fit=crop",
          alt: "Sapphire Statement Brooch",
        },
      ],
      price: 349.99,
      originalPrice: 499.99,
      discount: 30,
      badge: "Limited",
      rating: 4.9,
      reviews: 278,
    },
    {
      _id: 6,
      name: "Rose Gold Pendant",
      category: "Jewelry",
      image: [
        {
          url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=600&fit=crop",
          alt: "Rose Gold Pendant",
        },
      ],
      price: 179.99,
      originalPrice: 249.99,
      discount: 28,
      badge: "New",
      rating: 4.8,
      reviews: 201,
    },
    {
      _id: 7,
      name: "Vintage Gold Locket",
      category: "Jewelry",
      image: [
        {
          url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=600&fit=crop",
          alt: "Vintage Gold Locket",
        },
      ],
      price: 159.99,
      originalPrice: 219.99,
      discount: 27,
      badge: "New",
      rating: 4.6,
      reviews: 145,
    },
    {
      _id: 8,
      name: "Crystal Chandelier Earrings",
      category: "Jewelry",
      image: [
        {
          url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=600&fit=crop",
          alt: "Crystal Chandelier Earrings",
        },
      ],
      price: 229.99,
      originalPrice: 329.99,
      discount: 30,
      badge: "Sale",
      rating: 4.9,
      reviews: 289,
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 400;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const toggleFavorite = (productId, e) => {
    e.preventDefault();
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getProducts({ page: 2 });
      setProducts(data);
    };
    fetchProducts();
  }, []);
  // console.log(products)
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100/10 rounded-full blur-3xl -z-10"></div>

      {/* Section Header */}
      <div className="container mx-auto px-5 mb-12 md:mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600">
              Latest Additions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 tracking-tight">
            New Arrivals
          </h2>
          <p className="text-gray-600 text-lg font-light max-w-3xl mx-auto">
            Discover the latest luxury jewelry pieces and premium fashion items,
            freshly added to keep your collection on the cutting edge of
            elegance
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center">
          <div className="hidden sm:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="group p-3 border-2 border-gray-300 bg-white rounded-full hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:scale-110" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="group p-3 border-2 border-gray-300 bg-white rounded-full hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 transition-transform group-hover:scale-110" />
            </button>
          </div>

          <div className="text-right">
            <Link
              to="/collections/all"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-900 hover:text-amber-600 transition-colors duration-300"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Products Carousel */}
      <div className="container mx-auto px-5">
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll gap-6 scroll-smooth no-scrollbar pb-4"
        >
          {products?.map((product) => (
            <Link
              to={`/product/${product._id}`}
              key={product._id}
              className="min-w-[100%] md:min-w-[50%] lg:min-w-[25%] flex-shrink-0 group"
              onMouseEnter={() => setHoveredProduct(product._id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Card */}
              <div className="h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-80 md:h-96 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    draggable="false"
                  />

                  {/* Badge */}
                  {/* <div className="absolute top-4 left-4 px-3 py-1 bg-amber-500 text-white text-xs font-semibold uppercase tracking-widest rounded-full">
                    {product.badge}
                  </div> */}

                  {/* Discount Badge */}
                  {/* {product.discount && (
                    <div className="absolute top-4 right-4 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      -{product.discount}%
                    </div>
                  )} */}

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => toggleFavorite(product._id, e)}
                    className={`absolute bottom-4 right-4 p-2.5 rounded-full transition-all duration-300 ${
                      favorites[product._id]
                        ? "bg-red-500 text-white scale-100"
                        : "bg-white text-gray-900 hover:bg-gray-100 hover:scale-110"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${favorites[product._id] ? "fill-current" : ""}`}
                    />
                  </button>

                  {/* Overlay Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Product Info */}
                <div className="p-5 md:p-6">
                  {/* Category */}
                  {/* <p className="text-xs font-light uppercase tracking-widest text-gray-500 mb-2">
                    {product.category}
                  </p> */}

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-light text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-sm ${
                            i < Math.floor(product.rating)
                              ? "text-amber-400"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 font-light">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price Section */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-light text-gray-900">
                      {product.price} TK
                    </span>
                    {/* <span className="text-sm text-gray-500 line-through font-light">
                      {product.originalPrice} TK
                    </span> */}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold uppercase tracking-wider text-sm rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95">
                    Add to Cart
                  </button>

                  {/* Trust Badge */}
                  <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-center gap-2 text-xs text-gray-600 font-light">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Authentic & Verified</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="container mx-auto px-5 mt-8 sm:hidden">
        <p className="text-center text-sm text-gray-600 font-light">
          Swipe to explore more →
        </p>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Poppins:wght@300;400;500;600&display=swap");
      `}</style>
    </section>
  );
};

export default NewArrivals;
