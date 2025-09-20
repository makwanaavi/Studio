import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/logo-white.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => setOpen(false);
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <header id="home" className="relative w-full overflow-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="w-full">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center justify-center px-4 lg:px-6">
            <div className="flex w-full max-w-7xl items-center justify-between mx-auto">
              {/* Left nav */}
              <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium tracking-wide text-white">
                <li>
                  <Link to="/" className="nav-link hover:text-yellow-600 transition-colors duration-200">HOME</Link>
                </li>
                <li>
                  <Link to="/outwork" className="nav-link transition-colors duration-200">OUR WORK</Link>
                </li>
                <li>
                  <Link to="/gallery" className="nav-link transition-colors duration-200">GALLERY</Link>
                </li>
              </ul>

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center justify-center mx-4 lg:mx-8">
                <Link to="/" aria-label="Home" className="block transition-transform duration-300 hover:scale-105">
                  <div className="bg-black rounded-full p-1 flex items-center justify-center shadow-lg">
                    <img
                      src={LogoWhite}
                      alt="Studio logo"
                      className="object-contain"
                      style={{ width: "80px", height: "80px" }}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><circle cx="40" cy="40" r="40" fill="%23000"/><text x="50%" y="50%" fill="%23fff" font-size="16" font-family="Arial" font-weight="bold" dominant-baseline="middle" text-anchor="middle">Studio</text></svg>')}`;
                      }}
                    />
                  </div>
                </Link>
              </div>

              {/* Right nav */}
              <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium tracking-wide text-white">
                <li>
                  <Link to="/aboutu transition-colors duration-200">ABOUT US</Link>
                </li>
                <li>
                  <Link to="/servic transition-colors duration-200">SERVICES</Link>
                </li>
                <li>
                  <Link to="/contactu transition-colors duration-200">CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile nav */}
          <div className={`flex items-center justify-between h-16 px-4 text-gray-900 md:hidden ${isScrolled ? "bg-white text-black" : "bg-white text-black"}`}>
            <Link to="/" aria-label="Home" className="z-50">
              <div className="bg-black rounded-full p-1 flex items-center justify-center">
                <img
                  src={LogoWhite}
                  alt="Studio logo"
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><circle cx="24" cy="24" r="24" fill="%23000"/><text x="50%" y="50%" fill="%23fff" font-size="10" font-family="Arial" font-weight="bold" dominant-baseline="middle" text-anchor="middle">Studio</text></svg>')}`;
                  }}
                />
              </div>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex items-center justify-center text-black rounded-lg transition-all z-50"
              aria-label="menu"
              aria-expanded={open}
            >
              <div className="relative w-6 h-6 flex flex-col justify-center">
                <span className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ${open ? 'rotate-45 translate-y-0' : '-translate-y-1'}`}></span>
                <span className={`bg-black block h-0.5 w-6 rounded-sm my-1.5 transition-all duration-300 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ${open ? '-rotate-45 -translate-y-0' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`md:hidden fixed inset-0 transition-all duration-300 ease-in-out bg-white z-40 ${
              open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-full invisible"
            }`}
            style={{ paddingTop: '4rem' }}
          >
            <ul className="text-center py-8 space-y-2 h-full flex flex-col justify-center">
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  to="/"
                  className="block text-gray-900 text-xl font-medium tracking-wider py-4 transition-colors duration-200 hover:text-yellow-600"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  to="/aboutus"
                  className="block text-gray-900 text-xl font-medium tracking-wider py-4 transition-colors duration-200 hover:text-yellow-600"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  to="/gallery"
                  className="block text-gray-900 text-xl font-medium tracking-wider py-4 transition-colors duration-200 hover:text-yellow-600"
                >
                  GALLERY
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  to="/outwork"
                  className="block text-gray-900 text-xl font-medium tracking-wider py-4 transition-colors duration-200 hover:text-yellow-600"
                >
                  OUR WORK
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  to="/service"
                  className="block text-gray-900 text-xl font-medium tracking-wider py-4 transition-colors duration-200 hover:text-yellow-600"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setOpen(false)}
                  to="/contactus"
                  className="block text-gray-900 text-xl font-medium tracking-wider py-4 transition-colors duration-200 hover:text-yellow-600"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}