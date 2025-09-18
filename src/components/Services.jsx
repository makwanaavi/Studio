import React from "react";

const services = [
  {
    title: "Portrait Sessions",
    desc: "Our portrait sessions are designed to showcase your personality and style in stunning imagery."
  },
  {
    title: "Maternity Sessions",
    desc: "Embrace the beauty and miracle of new life with our maternity and newborn photography sessions."
  },
  {
    title: "Family Sessions",
    desc: "Cherish the bond of family with our custom-designed playful candid moments and portrait sessions."
  }
];

export default function Services() {
  return (
    <section id="service" className="service-bg py-20 px-4">
      <div className="max-w-[1200px] mx-auto text-center text-white">
        <h2 className="text-3xl font-header mb-4 text-[#F9C801]">~ SERVICES ~</h2>
        <p className="max-w-[600px] mx-auto text-gray-300">
          At Capturer, we offer a range of professional photography services tailored to meet your unique needs.
          With a commitment to excellence and creativity, we strive to exceed your expectations.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 mt-12">
          {services.map((s, i) => (
            <div key={i} className="text-center">
              <h4 className="text-2xl font-header mb-4 relative after:content-['~'] after:block after:text-2xl after:-mt-3">
                {s.title}
              </h4>
              <p className="text-gray-300 leading-7">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
