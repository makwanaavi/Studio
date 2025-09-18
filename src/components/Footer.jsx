import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="mt-8">
      <div className="max-w-[1200px] mx-auto px-4 py-12 grid gap-8 md:grid-cols-3 items-center">
        <div className="text-center md:text-left">
          <img src="/assets/logo-dark.png" alt="logo" className="mx-auto md:mx-0 w-[170px] mb-4" />
          <div className="flex items-center justify-center md:justify-start gap-4 text-2xl">
            <a href="#" className="text-black"><i className="ri-facebook-fill"></i></a>
            <a href="#" className="text-black"><i className="ri-instagram-line"></i></a>
            <a href="#" className="text-black"><i className="ri-twitter-fill"></i></a>
            <a href="#" className="text-black"><i className="ri-youtube-fill"></i></a>
            <a href="#" className="text-black"><i className="ri-pinterest-line"></i></a>
          </div>
        </div>

        <div>
          <ul className="grid grid-cols-2 gap-2 text-center">
            <li><a href="#home" className="font-semibold text-white">HOME</a></li>
            <li><a href="#about" className="font-semibold text-white">ABOUT US</a></li>
            <li><a href="#service" className="font-semibold text-white">SERVICES</a></li>
            <li><a href="#client" className="font-semibold text-white">CLIENT</a></li>
            <li><a href="#blog" className="font-semibold text-white">BLOG</a></li>
            <li><a href="#contact" className="font-semibold text-white">CONTACT US</a></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-2 text-white">STAY IN TOUCH</h4>
          <p className="text-white leading-7">Keep up-to-date with all things Capturer! Join our community and never miss a moment!</p>
        </div>
      </div>

      <div className="bg-brand-black text-white text-center py-3">
        Copyright © 2024 Studio. All rights reserved.
      </div>
    </footer>
  );
}
