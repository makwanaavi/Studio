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
    text: `Capturer exceeded all our expectations! Their attention to detail and ability to capture the essence of our special day was truly remarkable...`,
    name: "Sarah and Michael"
  },
  {
    img: client2,
    text: `We couldn't be happier with our family portrait session with Capturer. They made us feel relaxed and comfortable...`,
    name: "The Johnson Family"
  },
  {
    img: client3,
    text: `Capturer's maternity and newborn sessions captured the most precious moments of our lives with such tenderness and care...`,
    name: "Emily and David"
  }
];

export default function Testimonials() {
  return (
    <section id="client" className="py-16 bg-black">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-header text-center mb-6 text-[#F9C801]">~ TESTIMONIALS ~</h2>

        <div className="mt-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500 }}
            slidesPerView={1}
            spaceBetween={20}
          >
            {slides.map((s, i) => (
              <SwiperSlide key={i}>
                <div className="client__card max-w-[900px] mx-auto text-center">
                  <img src={s.img} alt="client" className="mx-auto w-[120px] h-[120px] object-cover rounded-full shadow-lg mb-6" />
                  <p className="text-white mb-4 leading-7">{s.text}</p>
                  <h4 className="text-lg font-semibold text-white">{s.name}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
