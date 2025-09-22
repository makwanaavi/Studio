import React, { useState, useEffect, useRef } from "react";
import hero1 from "../assets/header.jpg";

const Hero = () => {
  const slides = [hero1];
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  // Controls
  const nextSlide = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  const prevSlide = () => setCurrent((c) => (c === 0  ? slides.length - 1 : c - 1));
  const goTo = (i) => setCurrent(i);

  // Autoplay
  const startAutoplay = (delay = 4000) => {
    stopAutoplay();
    slideInterval.current = setInterval(nextSlide, delay);
  };
  const stopAutoplay = () => clearInterval(slideInterval.current);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onTouchStart={stopAutoplay}
      onTouchEnd={startAutoplay}
    >
      {/* CSS animations */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.08) translateY(-2%); }
          100% { transform: scale(1.05) translateY(-1%); }
        }
        @keyframes slideIn {
          0% { opacity: 0; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .slide-anim { 
          transition: opacity 1200ms ease-in-out, transform 1200ms ease-in-out; 
        }
        .hero-img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: optimize-quality;
        }
        @media (max-width: 768px) {
          .kenburns-mobile {
            animation: kenburns 12s ease-in-out infinite;
          }
        }
      `}</style>

      {/* Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full slide-anim ${
              idx === current ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img
              src={src}
              alt={`Studio slide ${idx + 1}`}
              className="w-full h-full object-cover hero-img"
              style={{
                width: "100vw",
                height: "100vh",
                minHeight: "100vh",
                maxWidth: "100%",
                objectFit: "cover",
                objectPosition: "center",
                animation: idx === current ? "kenburns 15s ease-in-out infinite" : "none",
              }}
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-white//10"></div>
            <div className="absolute inset-0 bg-white/10"></div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={() => { prevSlide(); stopAutoplay(); setTimeout(startAutoplay, 3000); }}
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 lg:p-4 rounded-full z-40 hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <i className="ri-arrow-left-s-line text-lg sm:text-xl lg:text-2xl"></i>
      </button>
      <button
        onClick={() => { nextSlide(); stopAutoplay(); setTimeout(startAutoplay, 3000); }}
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 lg:p-4 rounded-full z-40 hover:bg-white/30 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <i className="ri-arrow-right-s-line text-lg sm:text-xl lg:text-2xl"></i>
      </button>

      {/* Pagination dots */}
      <div className="absolute left-4 sm:left-6 lg:left-8 bottom-6 sm:bottom-8 z-40 flex items-center gap-2 sm:gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { goTo(idx); stopAutoplay(); setTimeout(startAutoplay, 3000); }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              idx === current ? "bg-white shadow-lg" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Enhanced for mobile */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-6 lg:right-8 z-40 flex flex-col items-center text-white">
        <div className="hidden sm:flex flex-col items-center animate-bounce">
          <span className="text-xs sm:text-sm mb-1 sm:mb-2 font-medium tracking-wide">SCROLL</span>
          <div className="w-px h-6 sm:h-8 bg-yellow-400"></div>
          <i className="ri-arrow-down-line text-lg sm:text-xl mt-1 sm:mt-2"></i>
        </div>
        <div className="sm:hidden animate-bounce">
          <i className="ri-arrow-down-line text-2xl"></i>
        </div>
      </div>

    </div>
  );
};

export default Hero;
