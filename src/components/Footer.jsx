import LogoWhite from "../assets/logo-white.png";
import { Link } from "react-router-dom";

export default function Footer() {

  // NEW: helper to scroll to top (smooth)
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" role="contentinfo" className="relative bg-black text-white overflow-hidden">

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-4 md:grid-cols-2">

          {/* Brand Section */}
          <div className="lg:col-span-1 text-center md:text-left">
            <div className="mb-6">
              <img
                src={LogoWhite}
                alt="Studio Logo"
                className="mx-auto md:mx-0 w-[180px] lg:w-[200px] hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
              Capturing life's most precious moments with artistry, passion, and professional excellence.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              {[
                { icon: "ri-facebook-fill", href: "#", color: "hover:text-blue-500" },
                { icon: "ri-instagram-line", href: "#", color: "hover:text-pink-500" },
                { icon: "ri-twitter-fill", href: "#", color: "hover:text-blue-400" },
                { icon: "ri-youtube-fill", href: "#", color: "hover:text-red-500" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:bg-white/20 hover:scale-110 ${social.color} backdrop-blur-sm`}
                  aria-label={`Follow us on ${social.icon.split('-')[1]}`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-yellow-400 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 md:left-0 right-0 md:right-auto w-12 h-0.5 bg-yellow-400 mx-auto md:mx-0"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  onClick={() => scrollToTop()}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium"
                >
                  HOME
                </Link>
              </li>

               <li>
                <Link
                  to="/outwork"
                  onClick={() => scrollToTop()}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium"
                >
                  OUR WORK
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={() => scrollToTop()}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium"
                >
                 GALLERY
                </Link> 
              </li>
              <li>
                <a
                  href="/aboutus"
                  onClick={() => scrollToTop()}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium"
                >
                  ABOUT US
                </a>
              </li>
           
              <li>
                <a
                  href="/service"
                  onClick={() => scrollToTop()}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium"
                >
                SERVICES
                </a>
              </li>
              <li>
                <Link
                  to="/contactus"
                  onClick={() => scrollToTop()}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 inline-block font-medium"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-yellow-400 relative">
              Our Services
              <div className="absolute bottom-0 left-0 md:left-0 right-0 md:right-auto w-12 h-0.5 bg-yellow-400 mx-auto md:mx-0"></div>
            </h4>
            <ul className="space-y-3">
              {[
                "Wedding Photography",
                "Portrait Sessions",
                "Event Coverage",
                "Commercial Shoots",
                "Photo Editing",
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 text-yellow-400 relative">
              Stay Connected
              <div className="absolute bottom-0 left-0 md:left-0 right-0 md:right-auto w-12 h-0.5 bg-yellow-400 mx-auto md:mx-0"></div>
            </h4>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <i className="ri-mail-line text-yellow-400"></i>
                <span className="text-gray-300 text-sm">hello@studio.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <i className="ri-phone-line text-yellow-400"></i>
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start justify-center md:justify-start gap-3">
                <i className="ri-map-pin-line text-yellow-400 mt-1"></i>
                <span className="text-gray-300 text-sm">123 Photography St.<br />Creative City, CC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 lg:mt-20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm order-2 lg:order-1">
              © 2024 Studio Photography. All rights reserved. | Designed with ❤️
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm order-1 lg:order-2">
              <a href="#" onClick={() => scrollToTop()} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 hover:underline">Privacy Policy</a>
              <a href="#" onClick={() => scrollToTop()} className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 hover:underline">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
