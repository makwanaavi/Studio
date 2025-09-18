import React, { useState, useEffect, useRef } from "react";
import LogoWhite from "../assets/logo-white.png";
import hero1 from "../assets/header.jpg";
import hero2 from "../assets/portfolio-2.jpg";
import hero3 from "../assets/image-6.jpg";
import Hero from "./Hero";

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
    <header id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="w-full">
          {/* Mobile header bar - Full width, no margins */}
          <div className="flex items-center justify-between h-16 px-4 bg-gradient-to-r from-black/95 via-black/90 to-black/95 backdrop-blur-lg border-b border-white/10 md:hidden">
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <img src={LogoWhite} alt="logo" className="w-14 h-12 object-contain" />
              </a>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="relative w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
              aria-label="menu"
            >
              <div className="relative">
                <i className={`${open ? 'ri-close-line' : 'ri-menu-line'} text-2xl transition-transform duration-200 ${open ? 'rotate-90' : ''}`}></i>
              </div>
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center justify-between py-4 lg:py-6 px-6 lg:px-12 bg-gradient-to-r from-black/90 via-black/80 to-black/90 backdrop-blur-lg border-b border-white/5">
            {/* Left nav items */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-medium tracking-wider">
              <li><a href="#home" className="text-white hover:text-orange-400 transition-all duration-300 relative group">
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#about" className="text-white hover:text-orange-400 transition-all duration-300 relative group">
                ABOUT US
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#service" className="text-white hover:text-orange-400 transition-all duration-300 relative group">
                SERVICES
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
            </ul>

            {/* Center logo */}
            <div className="mx-auto lg:mx-8">
              <a href="#" className="transform hover:scale-105 transition-transform duration-300">
                <img src={LogoWhite} alt="logo" className="w-16 h-16 lg:w-20 lg:h-20 object-contain" />
              </a>
            </div>

            {/* Right nav items */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-medium tracking-wider">
              <li><a href="#client" className="text-white hover:text-orange-400 transition-all duration-300 relative group">
                CLIENT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#blog" className="text-white hover:text-orange-400 transition-all duration-300 relative group">
                BLOG
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
              <li><a href="#contact" className="text-white hover:text-orange-400 transition-all duration-300 relative group">
                CONTACT US
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
              </a></li>
            </ul>

            {/* Compact nav for medium screens */}
            <div className="flex lg:hidden items-center gap-6 text-xs font-medium tracking-wider">
              <a href="#about" className="text-white hover:text-orange-400 transition-all duration-300">ABOUT</a>
              <a href="#service" className="text-white hover:text-orange-400 transition-all duration-300">SERVICES</a>
              <a href="#contact" className="text-white hover:text-orange-400 transition-all duration-300">CONTACT</a>
            </div>
          </div>

          {/* Mobile menu panel */}
          <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out ${
            open 
              ? 'opacity-100 translate-y-0 visible' 
              : 'opacity-0 -translate-y-4 invisible'
          }`}>
            <ul className="bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-lg text-center py-8 space-y-6 shadow-2xl border-b border-white/10">
              <li><a onClick={()=>setOpen(false)} href="#home" className="block text-white hover:text-orange-400 transition-all duration-300 text-lg font-medium tracking-wider py-3 transform hover:scale-105">HOME</a></li>
              <li><a onClick={()=>setOpen(false)} href="#about" className="block text-white hover:text-orange-400 transition-all duration-300 text-lg font-medium tracking-wider py-3 transform hover:scale-105">ABOUT US</a></li>
              <li><a onClick={()=>setOpen(false)} href="#service" className="block text-white hover:text-orange-400 transition-all duration-300 text-lg font-medium tracking-wider py-3 transform hover:scale-105">SERVICES</a></li>
              <li><a onClick={()=>setOpen(false)} href="#client" className="block text-white hover:text-orange-400 transition-all duration-300 text-lg font-medium tracking-wider py-3 transform hover:scale-105">CLIENT</a></li>
              <li><a onClick={()=>setOpen(false)} href="#blog" className="block text-white hover:text-orange-400 transition-all duration-300 text-lg font-medium tracking-wider py-3 transform hover:scale-105">BLOG</a></li>
              <li><a onClick={()=>setOpen(false)} href="#contact" className="block text-white hover:text-orange-400 transition-all duration-300 text-lg font-medium tracking-wider py-3 transform hover:scale-105">CONTACT US</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section with Enhanced Background Slider */}
      <div
        className="min-h-screen relative overflow-hidden"
        onMouseEnter={() => stopAutoplay()}
        onMouseLeave={() => startAutoplay()}
        onTouchStart={() => stopAutoplay()}
        onTouchEnd={() => startAutoplay()}
      >
        <style>{`
          @keyframes kenburns {
            0% { transform: scale(1) translateY(0); }
            50% { transform: scale(1.08) translateY(-3%); }
            100% { transform: scale(1.05) translateY(-1%); }
          }
          @keyframes heroFadeIn {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .slide-anim { transition: opacity 1200ms ease-in-out; }
          .hero-content { animation: heroFadeIn 1.5s ease-out 0.5s both; }
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
                <img
                  src={src}
                  srcSet={`${src} 1x, ${src} 2x`}
                  sizes="100vw"
                  alt={`slide-${idx}`}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={`w-full h-full object-cover block will-change-transform ${idx === current ? 'animate-kenburns' : ''}`}
                  style={{
                    minHeight: '100vh',
                    animation: idx === current ? 'kenburns 15s ease-in-out infinite' : 'none'
                  }}
                />
              </picture>

              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Render Hero presentational component and pass controls */}
        <Hero
          slides={slides}
          current={current}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          goTo={goTo}
          startAutoplay={startAutoplay}
          stopAutoplay={stopAutoplay}
        />
      </div>
    </header>
  );
}
