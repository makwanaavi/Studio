// import React, { useEffect, useRef } from 'react';
// import { ArrowRight } from 'lucide-react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const GalleryPage = () => {
//   const galleryRef = useRef(null);

//   useEffect(() => {
//     if (galleryRef.current) {
//       gsap.fromTo(
//         galleryRef.current.querySelectorAll('.gallery-item'),
//         { y: 80, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           stagger: 0.2,
//           scrollTrigger: {
//             trigger: galleryRef.current,
//             start: 'top 70%',
//           },
//         }
//       );
//     }
//   }, []);

//   const galleryItems = [
//     {
//       title: 'JIGNESH & PALLAVI',
//       image:
//         'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'Wedding',
//     },
//     {
//       title: 'ABHI & RIYA',
//       image:
//         'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'Destination',
//     },
//     {
//       title: 'NEEL & SALONI',
//       image:
//         'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'Pre Wedding',
//     },
//     {
//       title: 'RIZWAN & ASHIYANA',
//       image:
//         'https://images.pexels.com/photos/1617618/pexels-photo-1617618.jpeg?auto=compress&cs=tinysrgb&w=800',
//       category: 'Wedding',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-stone-100 pt-24">
//       {/* Header */}
//       <div className="container mx-auto px-4 text-center mb-12">
      
//           <h2 className="text-3xl font-header text-center mb-6 text-[#F9C801]">~ PHOTO GALLERY ~</h2>
      
//         {/* Filter Tabs */}
//         <div className="flex justify-center space-x-8 mb-16">
//           <button className="text-stone-800 border-b-2 border-teal-700 pb-2 font-medium">
//             All
//           </button>
//           <button className="text-stone-600 hover:text-stone-800 transition-colors pb-2">
//             Pre Wedding
//           </button>
//           <button className="text-stone-600 hover:text-stone-800 transition-colors pb-2">
//             Wedding
//           </button>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <div ref={galleryRef} className="container mx-auto px-4 mb-20">
//         <div className="space-y-8">
//           {galleryItems.map((item, index) => (
//             <div key={index} className="gallery-item group">
//               <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg mb-4">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//                 {/* Overlay Text */}
//                 <div className="absolute bottom-6 left-6 text-white">
//                   <h3 className="text-2xl md:text-4xl font-light tracking-wider">
//                     {item.title}
//                   </h3>
//                 </div>
//               </div>

//               <div className="flex justify-between items-center">
//                 <h4 className="text-lg font-medium text-teal-700">
//                   {item.title}
//                 </h4>
//                 <ArrowRight className="w-5 h-5 text-teal-700 group-hover:translate-x-1 transition-transform" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

    
//     </div>
//   );
// };

// export default GalleryPage;


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GalleryPage = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      gsap.fromTo(
        galleryRef.current.querySelectorAll('.gallery-item'),
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  const galleryItems = Array.from({ length: 25 }, (_, i) => ({
    title: `Gallery Photo ${i + 1}`,
    image: `https://picsum.photos/800/600?random=${i + 1}`,
    category: i % 2 === 0 ? 'Wedding' : 'Pre Wedding'
  }));

  return (
    <div className="min-h-screen bg-stone-100 pt-24 pb-24">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-header mb-6 text-[#F9C801] border-b-2 border-black inline-block px-4">
          ~ PHOTO GALLERY ~
        </h2>

        {/* Filter Tabs */}
        <div className="flex justify-center space-x-8 mt-8">
          <button className="text-stone-800 border-b-2 border-teal-700 pb-2 font-medium">
            All
          </button>
          <button className="text-stone-600 hover:text-stone-800 transition-colors pb-2">
            Pre Wedding
          </button>
          <button className="text-stone-600 hover:text-stone-800 transition-colors pb-2">
            Wedding
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <div ref={galleryRef} className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg md:text-xl font-semibold tracking-wide">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
