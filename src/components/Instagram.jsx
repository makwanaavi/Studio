import React from "react";
import img1 from '../assets/image-1.jpg';
import img2 from '../assets/image-2.jpg';
import img3 from '../assets/image-3.jpg';
import img4 from '../assets/image-4.jpg';
import img5 from '../assets/image-5.jpg';
import img6 from '../assets/image-6.jpg';
import img7 from '../assets/image-7.jpg';
import img8 from '../assets/image-8.jpg';

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function Instagram() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl font-header text-center mb-6 text-[#F9C801]">~ INSTAGRAM ~</h2>

        <div className="overflow-hidden">
          <div className="flex gap-4 w-max instagram-scroll">
            {imgs.concat(imgs).map((src, i) => (
              <img key={i} src={src} alt="instagram" className="w-[135px] h-[135px] object-cover" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
