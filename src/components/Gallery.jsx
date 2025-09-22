import React, { useState, useEffect } from "react";
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
  const [lightbox, setLightbox] = useState({ open: false, src: null, alt: "" });

  // lock body scroll when lightbox open
  useEffect(() => {
    const body = document.body;
    if (lightbox.open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = "hidden";
      if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox({ open: false, src: null, alt: "" });
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [lightbox.open]);

  // desktop grid template areas (3 columns × 4 rows)
  const desktopTemplate = `
    "a b c"
    "d b e"
    "d f e"
    "g f h"
  `;

  const tiles = [
    { src: imgs[0], key: "a", title: "Ceremonial Elegance" },
    { src: imgs[1], key: "b", title: "Intimate Portrait" },
    { src: imgs[2], key: "c", title: "Golden Walk" },
    { src: imgs[3], key: "d", title: "Natural Moments" },
    { src: imgs[4], key: "e", title: "Warm Glow" },
    { src: imgs[5], key: "f", title: "Playful Stroll" },
    { src: imgs[6], key: "g", title: "Quiet Pause" },
    { src: imgs[7], key: "h", title: "Timeless Love" }
  ];

  return (
    <section className="py-16 px-4 max-w-[1200px] mx-auto">
      <h2 className="text-3xl font-header text-center mb-8 text-[#F9C801]">~ GALLERY ~</h2>

      {/* Mosaic grid */}
      <div
        className="relative mx-auto w-full"
        style={{
          display: "grid",
          gap: "18px",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(4, 150px)",
          gridTemplateAreas: desktopTemplate
        }}
      >
        {tiles.map((t) => (
          <button
            key={t.key}
            onClick={() => setLightbox({ open: true, src: t.src, alt: t.title })}
            aria-label={`Open image ${t.title}`}
            className={`
              group focus:outline-none transition-transform duration-300
              rounded-lg overflow-hidden shadow-md border border-white/6
            `}
            style={{
              gridArea: t.key,
              alignSelf: "stretch",
              justifySelf: "stretch",
            }}
          >
            <img
              src={t.src}
              alt={t.title}
              loading="lazy"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="#f3f3f3"/><text x="50%" y="50%" fill="#9ca3af" font-size="20" dominant-baseline="middle" text-anchor="middle">Image</text></svg>')}`;
              }}
            />
          </button>
        ))}
      </div>

      {/* Responsive fallback: switch to 2-column on small screens */}
      <style>{`
        @media (max-width: 767px) {
          /* convert template grid to 2-column masonry-like layout on small screens */
          div[style] {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: none !important;
            grid-template-areas: none !important;
          }
          div[style] > button {
            height: auto !important;
            aspect-ratio: 3 / 4;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          div[style] {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: repeat(4, 180px) !important;
            grid-template-areas:
              "a b"
              "c b"
              "d e"
              "f g";
          }
        }
      `}</style>

      {/* Caption */}
      <p className="text-center italic text-gray-500 mt-10">Luxury Wedding Moments in Timeless Palaces.</p>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox({ open: false, src: null, alt: "" })}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setLightbox({ open: false, src: null, alt: "" })}
              aria-label="Close"
              className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg hover:scale-105 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
