import React from "react";
import portfolio1 from "../assets/portfolio-1.jpg";
import portfolio2 from "../assets/portfolio-2.jpg";
import portfolio3 from "../assets/portfolio-3.jpg";

const items = [
  { img: portfolio1, label: "Portraits" },
  { img: portfolio2, label: "Weddings" },
  { img: portfolio3, label: "Fashions" },
];

export default function Portfolio() {
  return (
    <section className="max-w-[1200px] mx-auto py-20 px-4 bg-black">
      <h2 className="text-3xl font-header text-center mb-8 text-[#F9C801]">~ PORTFOLIO ~</h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <div key={idx} className="relative overflow-hidden group">
            <img src={it.img} alt="portfolio" className="w-full h-full object-cover" />
            {/* label */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl font-header text-brand-white pointer-events-none">
              {it.label}
            </div>

            {/* overlay with button */}
            <div className="portfolio-overlay absolute inset-0 flex items-center justify-center">
              <button className="px-6 py-3 rounded-md font-medium bg-brand-yellow text-black hover:opacity-90">
                VIEW PPORTFOLIO
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
