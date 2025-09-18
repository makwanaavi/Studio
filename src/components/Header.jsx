import React, { useState, useEffect, useRef } from "react";
import LogoWhite from "../assets/logo-white.png";
import hero1 from "../assets/header.jpg";
import hero2 from "../assets/portfolio-2.jpg";
import hero3 from "../assets/image-6.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);
  
  // Slider state
  const slides = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  const prevSlide = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const goTo = (index) => setCurrent(index);

  // Autoplay helpers
  const startAutoplay = (delay = 4500) => {
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrent(c => (c === slides.length - 1 ? 0 : c + 1));
    }, delay);
  };
  const stopAutoplay = () => clearInterval(slideInterval.current);

  useEffect(() => {
    // initialize autoplay with a local interval to satisfy the hook linter
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrent(c => (c === slides.length - 1 ? 0 : c + 1));
    }, 4000);
    return () => clearInterval(slideInterval.current);
  }, [slides.length]);

  return (
    <header id="home" className="header-bg header-minh relative">
      {/* Nav wrapper max-width */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mobile header bar */}
          <div className="flex items-center justify-between py-3 sm:py-4 bg-brand-black/90 md:hidden">
            <div className="nav__logo">
              <a href="#">
                <img src="" alt="logo" className="w-[60px] sm:w-[70px]" />
              </a>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl text-brand-white hover:text-gray-300 transition-colors p-2"
              aria-label="menu"
            >
              <i className={`${open ? 'ri-close-line' : 'ri-menu-line'}`}></i>
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center justify-between py-4 lg:py-6 bg-transparent">
            {/* Left nav items - hidden on smaller desktop screens */}
            <ul className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium">
              <li><a href="#home" className="text-brand-white hover:text-gray-300 transition-colors">HOME</a></li>
              <li><a href="#about" className="text-brand-white hover:text-gray-300 transition-colors">ABOUT US</a></li>
              <li><a href="#service" className="text-brand-white hover:text-gray-300 transition-colors">SERVICES</a></li>
            </ul>

            {/* Center logo */}
            <div className="mx-auto lg:mx-4">
              <a href="#">
                <img src="" alt="logo" className="w-[120px] lg:w-[140px] xl:w-[150px]" />
              </a>
            </div>

            {/* Right nav items - hidden on smaller desktop screens */}
            <ul className="hidden lg:flex items-center gap-4 xl:gap-6 text-sm font-medium">
              <li><a href="#client" className="text-brand-white hover:text-gray-300 transition-colors">CLIENT</a></li>
              <li><a href="#blog" className="text-brand-white hover:text-gray-300 transition-colors">BLOG</a></li>
              <li><a href="#contact" className="text-brand-white hover:text-gray-300 transition-colors">CONTACT US</a></li>
            </ul>

            {/* Compact nav for medium screens */}
            <div className="flex lg:hidden items-center gap-4 text-xs font-medium">
              <a href="#about" className="text-brand-white hover:text-gray-300 transition-colors">ABOUT</a>
              <a href="#service" className="text-brand-white hover:text-gray-300 transition-colors">SERVICES</a>
              <a href="#contact" className="text-brand-white hover:text-gray-300 transition-colors">CONTACT</a>
            </div>
          </div>

          {/* Mobile menu panel */}
          <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
            open 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible'
          }`}>
            <ul className="bg-brand-black/95 backdrop-blur-sm text-center py-6 space-y-4 shadow-lg">
              <li><a onClick={()=>setOpen(false)} href="#home" className="block text-brand-white hover:text-gray-300 transition-colors py-2">HOME</a></li>
              <li><a onClick={()=>setOpen(false)} href="#about" className="block text-brand-white hover:text-gray-300 transition-colors py-2">ABOUT US</a></li>
              <li><a onClick={()=>setOpen(false)} href="#service" className="block text-brand-white hover:text-gray-300 transition-colors py-2">SERVICES</a></li>
              <li><a onClick={()=>setOpen(false)} href="#client" className="block text-brand-white hover:text-gray-300 transition-colors py-2">CLIENT</a></li>
              <li><a onClick={()=>setOpen(false)} href="#blog" className="block text-brand-white hover:text-gray-300 transition-colors py-2">BLOG</a></li>
              <li><a onClick={()=>setOpen(false)} href="#contact" className="block text-brand-white hover:text-gray-300 transition-colors py-2">CONTACT US</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Slider inserted here - layered crossfade + Ken Burns */}
      <div
        className="min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] relative overflow-hidden"
        onMouseEnter={() => stopAutoplay()}
        onMouseLeave={() => startAutoplay()}
        onTouchStart={() => stopAutoplay()}
        onTouchEnd={() => startAutoplay()}
      >
        <style>{`
          @keyframes kenburns {
            0% { transform: scale(1) translateY(0); }
            50% { transform: scale(1.06) translateY(-2%); }
            100% { transform: scale(1) translateY(0); }
          }
          .slide-anim { transition: opacity 1000ms ease-in-out; }
        `}</style>

        {/* Layered slides for smooth crossfade + Ken Burns */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((src, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full slide-anim transform-gpu ${idx === current ? 'opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none'}`}
              aria-hidden={idx === current ? 'false' : 'true'}
            >
              <picture>
                {/* srcSet can be extended with high-res images if available */}
                <img
                  src={src}
                  srcSet={`${src} 1x, ${src} 2x`}
                  sizes="100vw"
                  alt={`slide-${idx}`}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`w-full h-full object-cover block will-change-transform ${idx === current ? 'animate-kenburns' : ''}`}
                  style={{
                    minHeight: '400px',
                    animation: idx === current ? 'kenburns 12s ease-in-out both' : 'none'
                  }}
                />
              </picture>

              {/* overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40 pointer-events-none"></div>

              {/* optional centered content */}
              {idx === current && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center text-white max-w-[90%] md:max-w-[700px]">
                    {/* Add headline or CTA here if desired */}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={() => { prevSlide(); stopAutoplay(); setTimeout(() => startAutoplay(), 2000); }}
          aria-label="previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full shadow-lg z-30 hover:bg-black/60 transition"
        >
          <i className="ri-arrow-left-s-line text-xl"></i>
        </button>
        <button
          onClick={() => { nextSlide(); stopAutoplay(); setTimeout(() => startAutoplay(), 2000); }}
          aria-label="next"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full shadow-lg z-30 hover:bg-black/60 transition"
        >
          <i className="ri-arrow-right-s-line text-xl"></i>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { goTo(idx); stopAutoplay(); setTimeout(() => startAutoplay(), 2000); }}
              className={`w-3.5 h-3.5 rounded-full transition-all ${idx === current ? 'bg-white scale-110' : 'bg-white/40'}`}
              aria-label={`go-to-${idx}`}
            ></button>
          ))}
        </div>
      </div>
    </header>
  );
}
