import React from 'react'

const Hero = ({ slides = [], current = 0, nextSlide = () => {}, prevSlide = () => {}, goTo = () => {}, startAutoplay = () => {}, stopAutoplay = () => {} }) => {
  return (
    <>
      {/* Slides container */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full slide-anim transform-gpu ${idx === current ? 'opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none'}`}
            aria-hidden={idx === current ? 'false' : 'true'}
          >
            <picture>
              <img
                src={src}
                srcSet={`${src} 1x, ${src} 2x`}
                sizes="100vw"
                alt={`slide-${idx}`}
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className={`w-full h-full object-cover block will-change-transform ${idx === current ? 'animate-kenburns' : ''}`}
                style={{
                  minHeight: '100vh',
                  animation: idx === current ? 'kenburns 15s ease-in-out infinite' : 'none'
                }}
              />
            </picture>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={() => { prevSlide(); stopAutoplay(); setTimeout(() => startAutoplay(), 3000); }}
        aria-label="previous"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full shadow-xl z-40 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group"
      >
        <i className="ri-arrow-left-s-line text-2xl group-hover:animate-pulse"></i>
      </button>
      <button
        onClick={() => { nextSlide(); stopAutoplay(); setTimeout(() => startAutoplay(), 3000); }}
        aria-label="next"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full shadow-xl z-40 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 group"
      >
        <i className="ri-arrow-right-s-line text-2xl group-hover:animate-pulse"></i>
      </button>

      {/* Pagination dots */}
      <div className="absolute left-6 bottom-8 z-40 flex items-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { goTo(idx); stopAutoplay(); setTimeout(() => startAutoplay(), 3000); }}
            aria-label={`go-to-slide-${idx}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-40 hidden md:block">
        <div className="flex flex-col items-center text-white animate-bounce">
          <span className="text-sm mb-2 tracking-wider">SCROLL</span>
          <div className="w-px h-8 bg-white/50"></div>
          <i className="ri-arrow-down-line text-xl mt-2"></i>
        </div>
      </div>
    </>
  )
}

export default Hero
