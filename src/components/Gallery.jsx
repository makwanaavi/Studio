import React from "react";
import img1 from "../assets/image-1.jpg";
import img2 from "../assets/image-2.jpg";
import img3 from "../assets/image-3.jpg";
import img4 from "../assets/image-4.jpg";
import img5 from "../assets/image-5.jpg";
import img6 from "../assets/image-6.jpg";
import img7 from "../assets/image-7.jpg";
import img8 from "../assets/image-8.jpg";


const imgs = [
  img1,img2,img3,img4,
  img5,img6,img7,img8
];

export default function Gallery() {
  return (
    <section className="py-16 max-w-[1200px] mx-auto px-4">
      <h2 className="text-3xl font-header text-center mb-8 text-[#F9C801]">~ GALLERY ~</h2>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imgs.map((src, i) => (
          <img key={i} src={src} alt="gallery" className="w-full h-40 object-cover transition-opacity duration-300 hover:opacity-100 opacity-90" />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-3 rounded-md bg-brand-yellow text-white font-medium">VIEW GALLERY</button>
      </div>
    </section>
  );
}
