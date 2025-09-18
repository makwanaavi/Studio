import React, { useState, useEffect, useRef } from "react";
import hero1 from "../assets/header.jpg";
import hero2 from "../assets/portfolio-2.jpg";
import hero3 from "../assets/image-6.jpg";

const Hero = () => {
  const slides = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  // Controls
  const nextSlide = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  const prevSlide = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
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
      className="min-h-screen relative overflow-hidden"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onTouchStart={stopAutoplay}
      onTouchEnd={startAutoplay}
    >
      {/* CSS animations */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.08) translateY(-3%); }
          100% { transform: scale(1.05) translateY(-1%); }
        }
        .slide-anim { transition: opacity 1200ms ease-in-out; }
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
              alt={`slide-${idx}`}
              className="w-full h-full object-cover block"
              style={{
                minHeight: "100vh",
                animation: idx === current ? "kenburns 15s ease-in-out infinite" : "none",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
          </div>
        ))}
      </div>

      {/* Prev/Next */}
      <button
        onClick={() => { prevSlide(); stopAutoplay(); setTimeout(startAutoplay, 3000); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 text-white p-4 rounded-full z-40 hover:bg-white/30"
      >
        <i className="ri-arrow-left-s-line text-2xl"></i>
      </button>
      <button
        onClick={() => { nextSlide(); stopAutoplay(); setTimeout(startAutoplay, 3000); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 text-white p-4 rounded-full z-40 hover:bg-white/30"
      >
        <i className="ri-arrow-right-s-line text-2xl"></i>
      </button>

      {/* Pagination dots */}
      <div className="absolute left-6 bottom-8 z-40 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { goTo(idx); stopAutoplay(); setTimeout(startAutoplay, 3000); }}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-40 hidden md:block">
        <div className="flex flex-col items-center text-white animate-bounce">
          <span className="text-sm mb-2">SCROLL</span>
          <div className="w-px h-8 bg-white/50"></div>
          <i className="ri-arrow-down-line text-xl mt-2"></i>
        </div>
      </div>
    </div>
  );
};

export default Hero;
