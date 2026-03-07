import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Carousel slides with different content
  const slides = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/twGBSrxq/Whats-App-Image-2026-03-05-at-8-14-54-PM.jpg",
      title: "Timeless Elegance",
      subtitle: "Discover our curated collection of premium jewelry pieces",
      cta: "Shop Collection",
      gradient: "from-slate-900 via-slate-800 to-slate-900",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/ZRVP10ZG/Whats-App-Image-2026-03-05-at-8-14-53-PM-2.jpg",
      title: "Vacation Ready",
      subtitle:
        "Explore our vacation-ready outfits with fast worldwide shipping",
      cta: "Shop Now",
      gradient: "from-rose-900 via-pink-800 to-rose-900",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=1200&h=750&fit=crop",
      title: "Summer Vibes",
      subtitle: "Embrace the season with our stunning summer collection",
      cta: "Explore Now",
      gradient: "from-amber-900 via-orange-800 to-amber-900",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1599643478820-8a82f69b0146?w=1200&h=750&fit=crop",
      title: "Luxury Essentials",
      subtitle: "Premium quality pieces for the modern woman",
      cta: "View Details",
      gradient: "from-purple-900 via-indigo-800 to-purple-900",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [isAutoPlay, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    // Resume autoplay after 10 seconds of user interaction
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Carousel Container */}
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[750px]">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-55`}
            ></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12">
              {/* Animated Title */}
              <div
                className={`transition-all duration-700 transform ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: "200ms",
                }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-light text-white mb-4 tracking-wider uppercase">
                  {slide.title}
                </h1>
              </div>

              {/* Animated Subtitle */}
              <div
                className={`transition-all duration-700 transform max-w-2xl ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: "400ms",
                }}
              >
                <p className="text-sm md:text-lg lg:text-xl text-gray-100 mb-8 font-light">
                  {slide.subtitle}
                </p>
              </div>

              {/* Animated CTA Button */}
              <div
                className={`transition-all duration-700 transform ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: "600ms",
                }}
              >
                <Link
                  to="/collections/all"
                  className="inline-block px-8 py-3 md:px-10 md:py-4 text-sm md:text-base font-semibold uppercase tracking-widest bg-white text-black rounded-none hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 md:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "bg-white w-8 md:w-10 h-2 md:h-2.5"
                  : "bg-white/50 hover:bg-white/75 w-2 md:w-2.5 h-2 md:h-2.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter - Optional */}
        <div className="absolute top-6 md:top-8 right-6 md:right-8 z-30 text-white/60 text-sm font-light">
          <span className="text-white font-semibold">{currentSlide + 1}</span> /{" "}
          {slides.length}
        </div>
      </div>

      {/* Global Styles for Carousel */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap");
      `}</style>
    </section>
  );
};

export default Hero;
