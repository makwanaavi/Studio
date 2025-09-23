import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GalleryPage = () => {
  const galleryRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const lightboxRef = useRef(null);

  const galleryItems = [
    { title: 'Bride Portrait', image: 'https://images.unsplash.com/photo-1715090622465-e068b074e635?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Pre Wedding' },
    { title: 'Classic Couple', image: 'https://images.unsplash.com/photo-1715090622465-e068b074e635?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Wedding' },
    { title: 'Warm Moments', image: 'https://images.unsplash.com/photo-1741462115984-bf9ac4b1719a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Pre Wedding', featured: true },
    { title: 'Golden Hour', image: 'https://images.unsplash.com/photo-1640744536137-f1ed12b2f79f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Wedding' },
    { title: 'Elegant Pose', image: 'https://images.unsplash.com/photo-1744804298523-9e4ddf5e6dc4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Pre Wedding' },
    { title: 'Romantic Picnic', image: 'https://images.unsplash.com/photo-1722952908681-944d47e45853?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Wedding', featured: true },
    { title: 'Quiet Stroll', image: 'https://images.unsplash.com/photo-1741441033468-abdc0a02b84f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Pre Wedding' },
    { title: 'Glamour', image: 'https://images.unsplash.com/photo-1611505254094-4b0ae99e6500?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Wedding' },
    { title: 'Soft Light', image: 'https://images.unsplash.com/photo-1587271636175-90d58cdad458?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Pre Wedding' },
    // Add more high-quality images
    ...Array.from({ length: 14 }, (_, i) => ({
      title: `Gallery Photo ${i + 9}`,
      image: `https://picsum.photos/1200/${700 + (i % 5) * 80}?random=${i + 1}`,
      category: i % 2 === 0 ? 'Wedding' : 'Pre Wedding',
      featured: i % 7 === 0
    }))
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredItems = selectedCategory === 'all' ? galleryItems : galleryItems.filter(g => g.category === selectedCategory);

  // Animation for gallery items on mount and category change
  useEffect(() => {
    if (galleryRef.current) {
      // Clear any existing animations
      const items = galleryRef.current.querySelectorAll('.gallery-item');
      gsap.killTweensOf(items);
      
      // Set initial state
      gsap.set(items, { y: 40, opacity: 0, scale: 0.9 });
      
      // Animate items in
      gsap.to(items, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: {
          amount: 0.5, // Distribute animations over 0.5 seconds
          grid: "auto",
          from: "center"
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 85%",
        },
      });
    }
  }, [selectedCategory]);

  // Lightbox animations
  useEffect(() => {
    if (isOpen && lightboxRef.current) {
      // Animate lightbox entrance
      gsap.fromTo(
        lightboxRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
      );
      
      // Animate thumbnails
      gsap.fromTo(
        lightboxRef.current.querySelectorAll('.thumb'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, delay: 0.2 }
      );
    }
  }, [isOpen, activeIndex]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    const body = document.body;
    const savedPaddingRight = body.style.paddingRight || '';
    const savedOverflow = body.style.overflow || '';
    if (isOpen) {
      // compute scrollbar width and compensate to avoid layout shift
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        body.style.paddingRight = `${scrollBarWidth}px`;
      }
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = savedOverflow;
      body.style.paddingRight = savedPaddingRight;
    }
    return () => {
      // restore original values
      body.style.overflow = savedOverflow;
      body.style.paddingRight = savedPaddingRight;
    };
  }, [isOpen]);

  // Keyboard navigation for modal
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % galleryItems.length);
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, galleryItems.length]);

  // Parallax effect on scroll
  useEffect(() => {
    if (!galleryRef.current) return;
    
    const items = galleryRef.current.querySelectorAll('.gallery-item');
    
    items.forEach((item, i) => {
      const speed = 1 + (i % 3) * 0.1; // Vary the speed slightly
      
      gsap.to(item, {
        y: () => speed * 30, // Move slightly based on scroll
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });
  }, [selectedCategory]);

  // Handlers
  const openAt = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };
  const goNext = () => setActiveIndex((i) => (i + 1) % galleryItems.length);
  const goPrev = () => setActiveIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-50 pt-24 pb-24">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-12">
        <div className="mb-4 inline-block relative">
          <h2 className="text-3xl md:text-5xl font-header mb-2 text-[#F9C801] inline-block">
            ~ PHOTO GALLERY ~
          </h2>
          <div className="absolute -bottom-2 left-1/2 w-16 h-1 bg-teal-600 transform -translate-x-1/2"></div>
        </div>
        
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Explore our handcrafted collection of moments that tell beautiful stories through the lens of our cameras.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {['all', 'Pre Wedding', 'Wedding'].map((cat) => {
            const label = cat === 'all' ? 'All' : cat;
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform ${
                  active 
                    ? 'bg-yellow-500 text-white shadow-lg scale-105' 
                    : 'bg-white text-stone-700 hover:bg-stone-50 hover:shadow'
                }`}
                aria-pressed={active}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Count indicator with animation */}
        <div className="text-sm text-gray-500 opacity-75 transition-all duration-300">
          {filteredItems.length} photos
        </div>
      </div>

      {/* Staggered Gallery Grid */}
      <div ref={galleryRef} className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {filteredItems.map((item, index) => {
            const isFeatured = item.featured;
            return (
              <div
                key={index}
                className={`gallery-item relative overflow-hidden rounded-xl shadow-md 
                  ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}
                  transform transition-all duration-500 hover:shadow-xl`}
                style={{
                  aspectRatio: isFeatured ? '4/5' : '3/4',
                  perspective: '1000px',
                }}
              >
                <div 
                  onClick={() => openAt(filteredItems.indexOf(item))}
                  className="cursor-pointer w-full h-full overflow-hidden group"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') openAt(filteredItems.indexOf(item)); }}
                >
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 bg-black/30 backdrop-blur-sm text-white text-xs rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Image with hover effect */}
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-700 
                        group-hover:scale-105 group-hover:rotate-1"
                    />
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-8 
                    group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-medium text-lg tracking-wide">{item.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4"
          onClick={() => setIsOpen(false)}
          aria-modal="true"
          role="dialog"
        >
          <div
            ref={lightboxRef}
            className="relative max-w-6xl w-full max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()} // prevent overlay close when clicking the content
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white z-20 bg-black/40 hover:bg-black/60 rounded-full p-2.5 transition-all"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main image container */}
            <div className="relative flex-grow flex items-center justify-center mb-4 overflow-hidden rounded-lg">
              {/* Navigation buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white 
                  bg-black/30 hover:bg-black/50 rounded-full p-3 transition-all z-10"
                aria-label="Previous"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white 
                  bg-black/30 hover:bg-black/50 rounded-full p-3 transition-all z-10"
                aria-label="Next"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Main image with animation */}
              <div className="w-full h-full max-h-[70vh] flex items-center justify-center">
                <img
                  key={activeIndex} // Re-render on change for animation
                  src={galleryItems[activeIndex].image}
                  alt={galleryItems[activeIndex].title}
                  className="max-h-full w-auto max-w-full object-contain rounded shadow-2xl"
                />
              </div>
            </div>
            
            {/* Caption */}
            <div className="text-white text-center mb-5">
              <h3 className="text-xl font-medium">{galleryItems[activeIndex].title}</h3>
              <p className="text-white/70 text-sm mt-1">{galleryItems[activeIndex].category}</p>
            </div>
            
            {/* Thumbnail navigation */}
            <div className="overflow-auto pb-2">
              <div className="flex gap-2 justify-center">
                {galleryItems.map((item, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`thumb h-16 flex-shrink-0 rounded overflow-hidden transition-all duration-300 
                        ${isActive ? 'ring-2 ring-offset-2 ring-teal-400 ring-offset-black/80' : 'opacity-60 hover:opacity-100'}`}
                      aria-label={`View ${item.title}`}
                    >
                      <img
                        src={item.image} 
                        alt="" 
                        className="h-full w-auto object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
