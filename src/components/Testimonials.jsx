import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.jpg";

const slides = [
  {
    img: client1,
    text: `Capturer exceeded all our expectations! Their attention to detail and ability to capture the essence of our special day was truly remarkable.`,
    name: "Sarah & Michael",
    role: "Wedding Clients",
    rating: 5
  },
  {
    img: client2,
    text: `We couldn't be happier with our family portrait session. They made us feel relaxed and the photos are simply stunning.`,
    name: "The Johnson Family",
    role: "Family Portrait",
    rating: 5
  },
  {
    img: client3,
    text: `Tender, patient, and creative — the maternity/newborn photos are treasures we'll keep forever.`,
    name: "Emily & David",
    role: "Maternity & Newborn",
    rating: 5
  }
];

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="client" className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-gradient-to-b from-yellow-50/40 via-transparent to-gray-50">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 -top-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -right-20 -bottom-10 w-80 h-80 bg-orange-400 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-yellow-600 tracking-wider mb-3">OUR HAPPY CLIENTS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Real stories from families, couples and brands who trusted us to capture their moments.</p>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            onSwiper={(s) => (swiperRef.current = s)}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !mx-2',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-yellow-500',
            }}
            navigation={false}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 }
            }}
            className="pb-12"
            aria-live="polite"
          >
            {slides.map((t, idx) => (
              <SwiperSlide key={idx} aria-label={`Testimonial ${idx + 1}`}>
                <article className="h-full flex flex-col bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-transform duration-400 hover:-translate-y-2">
                  {/* Large decorative quotes */}
                  <div className="relative p-6 lg:p-8 flex-grow">
                    <div className="absolute -top-6 -left-6 text-9xl text-yellow-50 opacity-90 pointer-events-none select-none">“</div>

                    <div className="flex flex-col h-full">
                      <div className="mb-4">
                        <div className="flex items-center gap-2">
                          {/* rating */}
                          <div className="flex items-center">
                            {[...Array(t.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.335 24 12 20.201 4.665 24 6 15.595 0 9.748l8.332-1.73z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed italic mb-6 flex-grow">“{t.text}”</p>

                      <div className="flex items-center mt-4">
                        <img
                          src={t.img}
                          alt={t.name}
                          className="w-14 h-14 object-cover rounded-full shadow-md ring-2 ring-white mr-4 flex-shrink-0"
                          onError={(e) => {
                            e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56"><circle fill="#f3f4f6" cx="28" cy="28" r="28"/><text x="50%" y="50%" fill="#9ca3af" font-size="20" dominant-baseline="middle" text-anchor="middle">👤</text></svg>')}`;
                          }}
                        />
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">{t.name}</h3>
                          <p className="text-xs text-yellow-600 font-medium">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer CTA inside card */}
                  <div className="px-6 lg:px-8 py-4 border-t border-gray-100 bg-white/60">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-600">Loved this? Book a session.</span>
                      <a href="/contactus" className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-black px-3 py-2 rounded-md text-sm font-semibold transition">
                        Book Now
                      </a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-yellow-500 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-yellow-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperRef.current?.slideTo(i)}
                  className={`w-3 h-3 rounded-full transition-all ${activeIndex === i ? "bg-yellow-500 w-8 rounded-full" : "bg-gray-300"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-yellow-500 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-yellow-300"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to Create Your Story?</h3>
              <p className="text-gray-200">Join our family of satisfied clients and let us capture your most precious moments.</p>
            </div>
            <div>
              <a href="/contactus" className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold transition">
                Book Your Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
