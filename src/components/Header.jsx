import React, { useState } from "react";
import LogoWhite from "../assets/logo-white.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id="home" className="relative  w-full overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="w-full">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center justify-center py-4 lg:py-6 px-6 lg:px-12 bg-gradient-to-r from-black/90 via-black/80 to-black/90 backdrop-blur-lg border-b border-white/5">
            <div className="flex w-full max-w-7xl items-center justify-between mx-auto">
              {/* Left nav */}
              <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-medium tracking-wider text-white">
                <li><a href="#home" className="nav-link">HOME</a></li>
                <li><a href="#about" className="nav-link">ABOUT US</a></li>
                <li><a href="#service" className="nav-link">SERVICES</a></li>
              </ul>

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center justify-center mx-8">
                <a href="#">
                  <img
                    src={LogoWhite}
                    alt="logo"
                    className="object-contain"
                    style={{ width: "80px", height: "48px" }}
                  />
                </a>
              </div>

              {/* Right nav */}
              <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm font-medium tracking-wider text-white">
                <li><a href="#client" className="nav-link">CLIENT</a></li>
                <li><a href="#blog" className="nav-link">BLOG</a></li>
                <li><a href="#contact" className="nav-link">CONTACT US</a></li>
              </ul>
            </div>
          </div>

          {/* Mobile nav */}
          <div className="flex items-center justify-between h-16 px-4 bg-gradient-to-r from-black/95 via-black/90 to-black/95 backdrop-blur-lg border-b border-white/10 md:hidden">
            <a href="#">
              <img src={LogoWhite} alt="logo" className="w-16 h-10 object-contain" />
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-all"
              aria-label="menu"
            >
              <i className={`${open ? "ri-close-line" : "ri-menu-line"} text-2xl`} />
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
              open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
            }`}
          >
            <ul className="bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-lg text-center py-8 space-y-6 shadow-2xl border-b border-white/10">
              {["home", "about", "service", "client", "blog", "contact"].map((item) => (
                <li key={item}>
                  <a
                    onClick={() => setOpen(false)}
                    href={`#${item}`}
                    className="block text-white hover:text-orange-400 text-lg font-medium tracking-wider py-3 transform hover:scale-105"
                  >
                    {item.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}

