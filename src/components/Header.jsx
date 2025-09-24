import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import LogoWhite from "../assets/logo-white.png";
import { Menu, X } from "lucide-react"; // icons

export default function Header() {
  const [open, setOpen] = useState(false);
  const firstMobileLinkRef = useRef(null);

  const MOBILE_BG_SRC = "/path/to/your/mobile-bg.jpg";

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      if (firstMobileLinkRef.current) firstMobileLinkRef.current.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // NEW: helper to scroll to top (smooth)
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header id="home" className="w-full">
      <style>{`
        .link-underline {
          position: relative;
        }
        .link-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 2px;
          width: 100%;
          background: #FACC15;
          transform-origin: left;
          transform: scaleX(0);
          transition: transform 240ms ease;
        }
        .link-underline:hover::after,
        .link-underline:focus::after,
        .link-underline.active::after {
          transform: scaleX(1);
        }

        .mobile-item { opacity: 0; transform: translateY(12px); transition: all 360ms cubic-bezier(.2,.9,.2,1); }
        .mobile-open .mobile-item { opacity: 1; transform: translateY(0); }
        .mobile-open .mobile-item:nth-child(1) { transition-delay: 80ms; }
        .mobile-open .mobile-item:nth-child(2) { transition-delay: 140ms; }
        .mobile-open .mobile-item:nth-child(3) { transition-delay: 200ms; }
        .mobile-open .mobile-item:nth-child(4) { transition-delay: 260ms; }
        .mobile-open .mobile-item:nth-child(5) { transition-delay: 320ms; }
        .mobile-open .mobile-item:nth-child(6) { transition-delay: 380ms; }

        .logo-hover { transition: transform 220ms ease, box-shadow 220ms ease; }
        .logo-hover:hover { transform: scale(1.04) rotate(-1deg); box-shadow: 0 6px 20px rgba(0,0,0,0.35); }

        .mobile-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.14; filter: blur(2px); transform: scale(1.02); }
      `}</style>

      <nav className="fixed top-0 md:top-4 left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-40 w-full md:w-[95%] max-w-7xl rounded-none md:rounded-xl bg-black/70 text-white backdrop-blur-md border border-white/5 shadow-xl">
        <div className="flex items-center justify-between h-20 px-4 md:px-6 w-full">
          {/* Desktop left links */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <li>
              <NavLink
                to="/"
                end
                onClick={() => scrollToTop()}
                className={({ isActive }) => `link-underline ${isActive ? "active text-yellow-400" : "hover:text-yellow-400"}`}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/outwork"
                onClick={() => scrollToTop()}
                className={({ isActive }) => `link-underline ${isActive ? "active text-yellow-400" : "hover:text-yellow-400"}`}
              >
                OUR WORK
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                onClick={() => scrollToTop()}
                className={({ isActive }) => `link-underline ${isActive ? "active text-yellow-400" : "hover:text-yellow-400"}`}
              >
                GALLERY
              </NavLink>
            </li>
          </ul>

          {/* Center logo */}
          <Link to="/" aria-label="Home" className="mx-auto lg:mx-0" onClick={() => scrollToTop()}>
            <img
              src={LogoWhite}
              alt="Studio logo"
              className="object-contain w-12 h-12 md:w-14 md:h-14 logo-hover"
              loading="lazy"
            />
          </Link>

          {/* Right side: desktop links + mobile menu button */}
          <div className="flex items-center gap-4">
            <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold">
              <li>
                <NavLink
                  to="/aboutus"
                  onClick={() => scrollToTop()}
                  className={({ isActive }) => `link-underline ${isActive ? "active text-yellow-400" : "hover:text-yellow-400"}`}
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  onClick={() => scrollToTop()}
                  className={({ isActive }) => `link-underline ${isActive ? "active text-yellow-400" : "hover:text-yellow-400"}`}
                >
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  onClick={() => scrollToTop()}
                  className={({ isActive }) => `link-underline ${isActive ? "active text-yellow-400" : "hover:text-yellow-400"}`}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>

            {/* Mobile hamburger on the right */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className={`fixed inset-0 z-50 flex flex-col bg-black/95 text-white px-8 pt-24 space-y-6 mobile-open`}
        >
          <img src={MOBILE_BG_SRC} alt="bg" className="mobile-bg" />

          {/* Close button */}
          <button
            className="absolute top-6 right-6 p-2 text-white"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <NavLink
            to="/"
            end
            ref={firstMobileLinkRef}
            onClick={() => {
              setOpen(false);
              scrollToTop();
            }}
            className="mobile-item text-xl font-semibold link-underline"
          >
            HOME
          </NavLink>
          <NavLink
            to="/outwork"
            onClick={() => {
              setOpen(false);
              scrollToTop();
            }}
            className="mobile-item text-xl font-semibold link-underline"
          >
            OUR WORK
          </NavLink>
          <NavLink
            to="/gallery"
            onClick={() => {
              setOpen(false);
              scrollToTop();
            }}
            className="mobile-item text-xl font-semibold link-underline"
          >
            GALLERY
          </NavLink>
          <NavLink
            to="/aboutus"
            onClick={() => {
              setOpen(false);
              scrollToTop();
            }}
            className="mobile-item text-xl font-semibold link-underline"
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/service"
            onClick={() => {
              setOpen(false);
              scrollToTop();
            }}
            className="mobile-item text-xl font-semibold link-underline"
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/contactus"
            onClick={() => {
              setOpen(false);
              scrollToTop();
            }}
            className="mobile-item text-xl font-semibold link-underline"
          >
            CONTACT
          </NavLink>
        </div>
      )}
    </header>
  );
}
