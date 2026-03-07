import React, { useState } from "react";
import { ArrowRight, Sparkles, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const collections = [
    {
      id: "clothes",
      title: "Clothing & Apparel",
      subtitle: "Discover Premium Fashion",
      description: "Elegant and comfortable clothing pieces designed for the modern woman",
      image: "https://i.ibb.co.com/twGBSrxq/Whats-App-Image-2026-03-05-at-8-14-54-PM.jpg",
      accent: "from-rose-500 to-pink-600",
      accentLight: "from-rose-100 to-pink-100",
      icon: ShoppingBag,
      tag: "New Arrivals",
      link: "/collections/all",
    },
    {
      id: "jewelry",
      title: "Women's New Collection",
      subtitle: "Timeless Elegance",
      description: "Exquisite jewelry pieces crafted with precision and luxury",
      image: "https://i.ibb.co.com/4gVwpWTg/Whats-App-Image-2026-03-05-at-8-22-18-PM-2.jpg",
      accent: "from-amber-500 to-yellow-600",
      accentLight: "from-amber-100 to-yellow-100",
      icon: Sparkles,
      tag: "Luxury Selection",
      link: "/collections/all",
    },
  ];

  return (
    <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Section Header */}
      <div className="container mx-auto px-5 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 tracking-tight">
          Explore Our Collections
        </h2>
        <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto">
          Discover two distinct worlds of style: premium apparel and exquisite jewelry
        </p>
      </div>

      {/* Collections Grid */}
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {collections.map((collection) => {
            const Icon = collection.icon;
            const isHovered = hoveredCard === collection.id;

            return (
              <Link
                key={collection.id}
                to={collection.link}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCard(collection.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-gray-200">
                    {/* Background Image */}
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-50 transition-opacity duration-500 ${isHovered ? "opacity-70" : "opacity-50"}`}></div>

                    {/* Floating Tag */}
                    <div className={`absolute top-6 right-6 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-500 ${
                      isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                    }`}>
                      <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${collection.accent} text-white`}>
                        {collection.tag}
                      </span>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                      {/* Icon */}
                      <div className={`mb-6 transition-all duration-500 transform ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${collection.accent} flex items-center justify-center`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Subtitle */}
                      <p className={`text-sm font-light uppercase tracking-widest text-gray-200 mb-3 transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-70"}`}>
                        {collection.subtitle}
                      </p>

                      {/* Title */}
                      <h3 className={`text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight transition-all duration-500 ${isHovered ? "translate-y-0" : "translate-y-0"}`}>
                        {collection.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-gray-300 text-base font-light mb-6 max-w-sm transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
                        {collection.description}
                      </p>

                      {/* CTA Button */}
                      <div className={`flex items-center gap-3 text-white font-semibold uppercase tracking-wider text-sm transition-all duration-500 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}`}>
                        <span>Shop Now</span>
                        <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-2" : ""}`} />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className={`h-1 bg-gradient-to-r ${collection.accent} transition-all duration-500 ${isHovered ? "h-2" : "h-1"}`}></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-5 w-64 h-64 bg-rose-100/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-5 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl -z-10"></div>

      {/* Global Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Poppins:wght@300;400;500;600&display=swap");
      `}</style>
    </section>
  );
};

export default GenderCollectionSection;