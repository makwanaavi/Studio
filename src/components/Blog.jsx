import React from "react";
import service from '../assets/service.jpg';

const Blog = () => {
  return (
    <>
      <h2 className="text-3xl font-header text-center mb-8 text-[#F9C801]">~  LATEST BLOG~</h2>
      <section
        id="blog"
        className="relative h-[560px] bg-cover bg-center"
        style={{ backgroundImage: `url(${service})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 relative z-10 flex items-center justify-center h-full">
          <div className="max-w-2xl text-center text-white">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Capturing Emotion in Every Frame</h2>
            <p className="text-gray-200 mb-6">
              This blog post delves into the importance of storytelling in photography and how Capturer
              approaches capturing emotion and narrative in their work. Readers will discover the
              techniques and strategies used by professional photographers to evoke emotion, convey
              meaning, and create compelling visual narratives that resonate with viewers on a deep
              level.
            </p>

            <a
              href="#"
              className="inline-block px-6 py-2 border border-white rounded text-white hover:bg-white hover:text-black transition"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </>

  );
};

export default Blog;
