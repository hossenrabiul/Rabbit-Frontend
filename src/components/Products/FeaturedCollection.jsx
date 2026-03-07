import React, { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedCollection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-5">
        {/* Main Featured Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden shadow-2xl bg-white">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white order-2 lg:order-1">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6 w-fit">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Featured Collection
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-tight leading-tight">
              Style That
              <span className="relative inline-block">
                <span className="absolute bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-rose-400 transform -skew-y-1"></span>
                <span className="relative">Inspires</span>
              </span>
              <br />
              Girls Everywhere
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-4 font-light tracking-wide">
              Trendy Girl Fashion Collection
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-400 mb-8 font-light leading-relaxed max-w-md">
              Discover our stunning collection of trendy clothing designed for
              modern girls. From casual everyday wear to statement pieces, find
              styles that express your personality with quality fabrics and
              contemporary designs.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="group">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-1 group-hover:text-amber-300 transition-colors">
                  Trendy Styles
                </h4>
                <p className="text-xs text-gray-500">Latest fashion trends</p>
              </div>
              <div className="group">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-1 group-hover:text-amber-300 transition-colors">
                  Comfortable Fit
                </h4>
                <p className="text-xs text-gray-500">Perfect all day wear</p>
              </div>
              <div className="group">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-1 group-hover:text-amber-300 transition-colors">
                  Quality Fabrics
                </h4>
                <p className="text-xs text-gray-500">Premium materials</p>
              </div>
              <div className="group">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-1 group-hover:text-amber-300 transition-colors">
                  Affordable Prices
                </h4>
                <p className="text-xs text-gray-500">Great value deals</p>
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/collections/all">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative inline-flex items-center gap-3 px-8 py-4 md:py-5 text-white font-semibold uppercase tracking-wider text-sm md:text-base bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/50 hover:scale-105"
              >
                <span>Shop Collection</span>
                <ArrowRight
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isHovered ? "translate-x-2" : ""
                  }`}
                />
              </button>
            </Link>

            {/* Decorative Line */}
            <div className="mt-12 pt-8 border-t border-gray-700 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <p className="text-xs text-gray-500 font-light">
                New styles added every week
              </p>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative h-96 md:h-full overflow-hidden group order-1 lg:order-2 bg-gradient-to-br from-gray-100 to-gray-200">
            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=800&fit=crop"
              alt="Girl Fashion Collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Image Badge */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-900">
              Exclusive Selection
            </div>

            {/* Floating Price Tag - Optional */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full text-sm font-semibold text-gray-900 shadow-lg">
              Starting from <span className="text-amber-600">$24.99</span>
            </div>
          </div>
        </div>

        {/* Secondary Collection Showcase - Optional */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {/* Secondary Card 1 */}
          <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100">
              <img
                src="https://i.ibb.co.com/4gVwpWTg/Whats-App-Image-2026-03-05-at-8-22-18-PM-2.jpg"
                alt="Luxury Jewelry"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Women's New Collection
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Timeless pieces crafted with precision and elegance
              </p>
              <Link
                to="/collections/all"
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm"
              >
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Secondary Card 2 */}
          <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-amber-100 to-yellow-100">
              <img
                src="https://i.ibb.co.com/twGBSrxq/Whats-App-Image-2026-03-05-at-8-14-54-PM.jpg"
                alt="Fashion Collection"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fashion & Apparel
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Premium clothing designed for comfort and style
              </p>
              <Link
                to="/collections/all"
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm"
              >
                Explore <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Poppins:wght@300;400;500;600&display=swap");
      `}</style>
    </section>
  );
};

export default FeaturedCollection;
