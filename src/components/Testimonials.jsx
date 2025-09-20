import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import client1 from "../assets/client-1.jpg";
import client2 from "../assets/client-2.jpg";
import client3 from "../assets/client-3.jpg";

const slides = [
  {
    img: client1,
    text: `Capturer exceeded all our expectations! Their attention to detail and ability to capture the essence of our special day was truly remarkable. Every shot was perfectly composed and told our unique love story.`,
    name: "Sarah and Michael",
    role: "Wedding Clients",
    rating: 5
  },
  {
    img: client2,
    text: `We couldn't be happier with our family portrait session with Capturer. They made us feel relaxed and comfortable, especially with our young children. The photos are absolutely stunning!`,
    name: "The Johnson Family",
    role: "Family Portrait Session",
    rating: 5
  },
  {
    img: client3,
    text: `Capturer's maternity and newborn sessions captured the most precious moments of our lives with such tenderness and care. These photos will be treasured forever by our family forever by our family.`,
    name: "Emily and David",
    role: "Maternity & Newborn",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="client" className="py-20  relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 rounded-full mb-4">
           
        <h2 className="text-3xl font-header mb-4 text-yellow-500">~  CLIENT TESTIMONIALS ~</h2>

          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why families and couples trust us to capture their most precious moments
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-yellow-500',
              bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-100'
            }}
            autoplay={{ 
              delay: 5000,
              disableOnInteraction: false
            }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            className="pb-16"
          >
            {slides.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                    {/* Quote Icon */}
                    {/* <div className="flex justify-center mb-6">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                    </div> */}

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-center leading-relaxed mb-8 flex-grow italic">
                      "{testimonial.text}"
                    </p>

                    {/* Rating Stars */}
                    {/* <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div> */}

                    {/* Client Info */}
                    <div className="text-center">
                      <div className="relative inline-block mb-4">
                        <img 
                          src={testimonial.img} 
                          alt={testimonial.name}
                          className="w-16 h-16 object-cover rounded-full shadow-lg ring-4 ring-white mx-auto"
                          onError={(e) => {
                            e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><circle fill="#f3f4f6" cx="32" cy="32" r="32"/><text x="50%" y="50%" fill="#6b7280" font-size="24" dominant-baseline="middle" text-anchor="middle">👤</text></svg>')}`;
                          }}
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 border-2 border-white rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-black rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Create Your Story?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join our family of satisfied clients and let us capture your most precious moments
            </p>
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Book Your Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
