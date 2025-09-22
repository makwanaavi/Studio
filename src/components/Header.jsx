import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import LogoWhite from "../assets/logo-white.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const firstMobileLinkRef = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  // Respect reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

  // Close on Escape and manage focus when opening mobile menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    // Focus first link for keyboard users
    if (firstMobileLinkRef.current) {
      firstMobileLinkRef.current.focus();
    }

    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Scroll to top and manage header/footer focus/tabindex on route change
  useEffect(() => {
    // close mobile menu on any navigation
    setOpen(false);

    if (typeof window === "undefined") return;

    // Scroll to top respecting reduced motion
    if (prefersReducedMotion) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Accessibility: focus header after navigation
    const headerEl = document.getElementById("home");
    if (headerEl) {
      headerEl.setAttribute("tabindex", "-1");
      headerEl.focus();
      // remove tabindex shortly after so it doesn't stay in the tab order
      setTimeout(() => headerEl.removeAttribute("tabindex"), 1000);
    }

    // Make footer programmatically reachable (but don't move focus)
    const footerEl = document.getElementById("contact");
    if (footerEl) {
      footerEl.setAttribute("tabindex", "-1");
      // remove after a short delay
      setTimeout(() => footerEl.removeAttribute("tabindex"), 1000);
    }
  }, [location.pathname]); // run effect on route changes

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    const body = document.body;

    const lockScroll = () => {
      // compensate for scrollbar to avoid layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = "hidden";
      if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    };

    const unlockScroll = () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };

    if (open) {
      lockScroll();
    } else {
      unlockScroll();
    }

    // cleanup on unmount
    return () => {
      unlockScroll();
    };
  }, [open]);

  // ensure fixed header doesn't cover content or anchored sections
  useEffect(() => {
    if (typeof document === "undefined") return;
    const docEl = document.documentElement;
    const body = document.body;
    const prevScrollPaddingTop = docEl.style.scrollPaddingTop || "";
    const prevBodyPaddingTop = body.style.paddingTop || "";

    const updateHeaderOffset = () => {
      const nav = navRef.current;
      if (!nav) return;
      const height = Math.ceil(nav.getBoundingClientRect().height);
      docEl.style.scrollPaddingTop = `${height}px`;
      body.style.paddingTop = `${height}px`;
    };

    // initial set and resize handling
    updateHeaderOffset();
    window.addEventListener("resize", updateHeaderOffset);

    return () => {
      window.removeEventListener("resize", updateHeaderOffset);
      // restore previous values
      docEl.style.scrollPaddingTop = prevScrollPaddingTop;
      body.style.paddingTop = prevBodyPaddingTop;
    };
  }, []); // run once on mount

  return (
    <header id="home" className="relative w-full overflow-hidden">
      {/* Navigation */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-sm shadow-md py-2"
            : "py-4 bg-black/80"
        }`}
      >
        {/* Keep wrapper transparent so backdrop blur is visible */}
        <div className="w-full text-white">
          {/* Desktop nav */}
          <div className="hidden md:flex items-center justify-center px-4 lg:px-6">
            <div className="flex w-full max-w-7xl items-center justify-between mx-auto">
              {/* Left nav */}
              <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium tracking-wide">
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                      `nav-link hover:text-yellow-400 transition-colors duration-200 ${isActive ? "text-yellow-400" : ""}`
                    }
                  >
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/outwork"
                    className={({ isActive }) =>
                      `nav-link transition-colors duration-200 ${isActive ? "text-yellow-400" : ""}`
                    }
                  >
                    OUR WORK
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      `nav-link transition-colors duration-200 ${isActive ? "text-yellow-400" : ""}`
                    }
                  >
                    GALLERY
                  </NavLink>
                </li>
              </ul>

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center justify-center mx-4 lg:mx-8">
                <Link to="/" aria-label="Home" className="block transition-transform duration-300 hover:scale-105">
                  <div
                    className="rounded-full p-1 flex items-center justify-center shadow-lg"
                  >
                    <div className="bg-black rounded-full p-1 flex items-center justify-center">
                      <img
                        src={LogoWhite}
                        alt="Studio logo"
                        className="object-contain"
                        style={{ width: "80px", height: "80px" }}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent(
                            '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><text x="50%" y="50%" fill="%23fff" font-size="16" font-family="Arial" font-weight="bold" dominant-baseline="middle" text-anchor="middle">Studio</text></svg>'
                          )}`;
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Right nav */}
              <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium tracking-wide">
                <li>
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      `transition-colors duration-200 ${isActive ? "text-yellow-400" : ""}`
                    }
                  >
                    ABOUT US
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      `transition-colors duration-200 ${isActive ? "text-yellow-400" : ""}`
                    }
                  >
                    SERVICES
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contactus"
                    className={({ isActive }) =>
                      `transition-colors duration-200 ${isActive ? "text-yellow-400" : ""}`
                    }
                  >
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile nav */}
          <div
            className={`flex items-center justify-between h-16 px-4 text-white md:hidden ${
              isScrolled ? "bg-black/0" : "bg-transparent"
            }`}
          >
            <Link to="/" aria-label="Home" className="z-50">
              <div
                className="rounded-full p-1 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(250,204,21,1), rgba(249,115,22,1))",
                }}
              >
                <div className="bg-black rounded-full p-1 flex items-center justify-center">
                  <img
                    src={LogoWhite}
                    alt="Studio logo"
                    className="w-12 h-12 object-contain"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent(
                        '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><circle cx="24" cy="24" r="24" fill="%23000"/><text x="50%" y="50%" fill="%23fff" font-size="10" font-family="Arial" font-weight="bold" dominant-baseline="middle" text-anchor="middle">Studio</text></svg>'
                      )}`;
                    }}
                  />
                </div>
              </div>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex items-center justify-center text-white rounded-lg transition-all z-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6 flex flex-col justify-center">
                <span
                  className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                    open ? "rotate-45 translate-y-0" : "-translate-y-1"
                  }`}
                ></span>
                <span
                  className={`bg-white block h-0.5 w-6 rounded-sm my-1.5 transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                    open ? "-rotate-45 -translate-y-0" : "translate-y-1"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          <div
            id="mobile-menu"
            className={`md:hidden fixed inset-0 transition-all ${
              prefersReducedMotion ? "" : "duration-300 ease-in-out"
            } bg-white/95 z-40 ${
              open
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-full invisible"
            }`}
            style={{ paddingTop: "4rem", backdropFilter: "blur(6px)" }}
            aria-hidden={!open}
            role="dialog"
            aria-modal="true"
          >
            <ul className="text-center py-8 space-y-2 h-full flex flex-col justify-center">
              <li>
                <NavLink
                  to="/"
                  end
                  onClick={() => setOpen(false)}
                  ref={firstMobileLinkRef}
                  className="block text-gray-900 text-xl font-medium tracking-wider py-4 transition-colors duration-200 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  onClick={() => setOpen(false)}
                  className="block text-gray-900 text-xl font-medium tracking-wider py-4 transition-colors duration-200 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  onClick={() => setOpen(false)}
                  className="block text-gray-900 text-xl font-medium tracking-wider py-4 transition-colors duration-200 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  GALLERY
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/outwork"
                  onClick={() => setOpen(false)}
                  className="block text-gray-900 text-xl font-medium tracking-wider py-4 transition-colors duration-200 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  OUR WORK
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  onClick={() => setOpen(false)}
                  className="block text-gray-900 text-xl font-medium tracking-wider py-4 transition-colors duration-200 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  onClick={() => setOpen(false)}
                  className="block text-gray-900 text-xl font-medium tracking-wider py-4 transition-colors duration-200 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}