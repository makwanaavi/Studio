import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import LogoWhite from "../assets/logo-white.png";

export default function Header() {
  // keep mobile open state and first link ref
  const [open, setOpen] = useState(false);
  const firstMobileLinkRef = useRef(null);

  // Replace this with your attached image path (or data URL) to use as mobile panel background
  const MOBILE_BG_SRC = "/path/to/your/mobile-bg.jpg";

  // close on Escape and focus first mobile link when opened
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      if (firstMobileLinkRef.current) firstMobileLinkRef.current.focus();
      // prevent background scrolling while menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header id="home" className="w-full">
      {/* Styles for animated underline and mobile stagger */}
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

        /* mobile menu item stagger */
        .mobile-item { opacity: 0; transform: translateY(12px); transition: all 360ms cubic-bezier(.2,.9,.2,1); }
        .mobile-open .mobile-item { opacity: 1; transform: translateY(0); }
        .mobile-open .mobile-item:nth-child(1) { transition-delay: 80ms; }
        .mobile-open .mobile-item:nth-child(2) { transition-delay: 140ms; }
        .mobile-open .mobile-item:nth-child(3) { transition-delay: 200ms; }
        .mobile-open .mobile-item:nth-child(4) { transition-delay: 260ms; }
        .mobile-open .mobile-item:nth-child(5) { transition-delay: 320ms; }
        .mobile-open .mobile-item:nth-child(6) { transition-delay: 380ms; }

        /* subtle logo hover */
        .logo-hover { transition: transform 220ms ease, box-shadow 220ms ease; }
        .logo-hover:hover { transform: scale(1.04) rotate(-1deg); box-shadow: 0 6px 20px rgba(0,0,0,0.35); }

        /* mobile bg image styling (low opacity decorative) */
        .mobile-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.14; filter: blur(2px); transform: scale(1.02); }
      `}</style>

      {/* polished fixed header: full-width on small screens, centered floating on md+ */}
      <nav className="fixed top-0 md:top-4 left-0 md:left-1/2 md:transform md:-translate-x-1/2 z-40 w-full md:w-[95%] max-w-7xl rounded-none md:rounded-xl bg-black/70 text-white backdrop-blur-md border border-white/5 shadow-xl">
        <div className="flex items-center justify-between h-20 px-4 md:px-6">
          {/* Left desktop links */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <li>
              <NavLink to="/" end className={({ isActive }) => `link-underline ${isActive ? "active text-yellow-400" : "hover:text-yellow-400"}`}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/outwork" className={({ isActive }) => `link-underline ${isActive ? "active text-yellow-400" : "hover:text-yellow-400"}`}>
                OUR WORK
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={({ isActive }) => `link-underline ${isActive ? "active text-yellow-400" : "hover:text-yellow-400"}`}>
                GALLERY
              </NavLink>
            </li>
          </ul>

          {/* Center logo */}
          <div className="flex items-center justify-center mx-2">
            <Link to="/" aria-label="Home" className="block">
              <div className="rounded-full p-1 flex items-center justify-center logo-hover">
                <div className="bg-black rounded-full p-1 flex items-center justify-center">
                  <img
                    src={LogoWhite}
                    alt="Studio logo"
                    className="object-contain w-14 h-14 md:w-14 md:h-14 lg:w-16 lg:h-16"
                    style={{ width: 56, height: 56 }}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent(
                        '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56"><text x="50%" y="50%" fill="%23fff" font-size="12" font-family="Arial" font-weight="bold" dominant-baseline="middle" text-anchor="middle">Studio</text></svg>'
                      )}`;
                    }}
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Right desktop links */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold">
            <li>
              <NavLink to="/aboutus" className={({ isActive }) => `link-underline ${isActive ? "active text-yellow-400" : "hover:text-yellow-400"}`}>
                ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className={({ isActive }) => `link-underline ${isActive ? "active text-yellow-400" : "hover:text-yellow-400"}`}>
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactus" className={({ isActive }) => `link-underline ${isActive ? "active text-yellow-400" : "hover:text-yellow-400"}`}>
                CONTACT
              </NavLink>
            </li>
          </ul>

          {/* Mobile controls */}
          <div className="flex items-center lg:hidden gap-2">
            <button
              onClick={() => setOpen(prev => !prev)}
              className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile full-screen overlay menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
           aria-hidden={!open}
           role="dialog"
           aria-modal="true"
         >
          {/* dark translucent backdrop */}
          <div
            className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* panel */}
          <div
             // stop clicks inside the panel from bubbling to the backdrop
             onClick={(e) => e.stopPropagation()}
            className={`relative z-60 origin-center w-[92%] max-w-2xl bg-gradient-to-b from-white/5 to-white/3 rounded-3xl border border-white/5 p-4 sm:p-8 text-white shadow-2xl transform transition-all duration-300 ${open ? "translate-y-0 scale-100" : "translate-y-2 scale-95"} max-h-[86vh] overflow-auto`}
             style={{ transformOrigin: "center" }}
           >
             {/* decorative mobile background image (replace MOBILE_BG_SRC above) */}
             {MOBILE_BG_SRC && (
               <img src={MOBILE_BG_SRC} alt="" className="mobile-bg hidden sm:block" aria-hidden="true" />
             )}

            {/* close button */}
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/6 hover:bg-white/12 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className={`mt-4 ${open ? "mobile-open" : ""}`}>
              <ul className="flex flex-col gap-4 pt-3 pb-5 px-4 sm:px-6">
                <li className="mobile-item">
                  <NavLink
                    to="/"
                    end
                    ref={firstMobileLinkRef}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `block text-2xl sm:text-3xl md:text-2xl font-semibold ${isActive ? "text-yellow-400" : "text-white"}`}
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="mobile-item">
                  <NavLink to="/aboutus" onClick={() => setOpen(false)} className={({ isActive }) => `block text-2xl sm:text-3xl md:text-2xl font-semibold ${isActive ? "text-yellow-400" : "text-white"}`}>ABOUT US</NavLink>
                </li>
                <li className="mobile-item">
                  <NavLink to="/gallery" onClick={() => setOpen(false)} className={({ isActive }) => `block text-2xl sm:text-3xl md:text-2xl font-semibold ${isActive ? "text-yellow-400" : "text-white"}`}>GALLERY</NavLink>
                </li>
                <li className="mobile-item">
                  <NavLink to="/outwork" onClick={() => setOpen(false)} className={({ isActive }) => `block text-2xl sm:text-3xl md:text-2xl font-semibold ${isActive ? "text-yellow-400" : "text-white"}`}>OUR WORK</NavLink>
                </li>
                <li className="mobile-item">
                  <NavLink to="/service" onClick={() => setOpen(false)} className={({ isActive }) => `block text-2xl sm:text-3xl md:text-2xl font-semibold ${isActive ? "text-yellow-400" : "text-white"}`}>SERVICES</NavLink>
                </li>
                <li className="mobile-item">
                  <NavLink to="/contactus" onClick={() => setOpen(false)} className={({ isActive }) => `block text-2xl sm:text-3xl md:text-2xl font-semibold ${isActive ? "text-yellow-400" : "text-white"}`}>CONTACT</NavLink>
                </li>
              </ul>

              <div className="mt-6 border-t border-white/5 pt-4 text-sm text-white/80">
                <p className="mb-2">Need help? <a href="/contactus" className="underline text-yellow-400" onClick={() => setOpen(false)}>Contact us</a></p>
                <p className="text-xs">© {new Date().getFullYear()} Studio</p>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
}
