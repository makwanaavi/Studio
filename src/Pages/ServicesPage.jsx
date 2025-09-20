import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);

  useEffect(() => {
    // Hero Animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.hero-content > *'),
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          delay: 0.5,
          ease: 'power2.out',
        }
      );
    }

    // Services Animation
    if (servicesRef.current) {
      gsap.fromTo(
        servicesRef.current.querySelectorAll('.service-card'),
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Process Animation
    if (processRef.current) {
      gsap.fromTo(
        processRef.current.querySelectorAll('.process-step'),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-12">
        <p className="text-black text-sm uppercase tracking-wider mb-4">Our Services</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-black font-light mb-16">
          Capturing Your Moments, Creating Memories
        </h1>
        <h2 className="text-3xl font-header text-center mb-6 text-[#F9C801]">~ WHAT WE OFFER ~</h2>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content">
            <img
              src="https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Photography Service"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="hero-content">
            <div className="bg-yellow-500 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-light mb-6">PROFESSIONAL PHOTOGRAPHY & VIDEOGRAPHY</h2>
              <p className="leading-relaxed mb-6">
                From grand weddings to intimate portraits, SAI Photo Studio delivers a full suite of photography and videography services. Our experienced team blends creativity with technical expertise to ensure every moment is beautifully preserved.
              </p>
              <p className="leading-relaxed">
                We specialize in luxury destination weddings, pre-wedding shoots, candid photography, cinematic films, and more. Let us turn your special day into timeless art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="container mx-auto px-4 mb-20 bg-white">
        <h2 className="text-3xl md:text-4xl text-yellow-500 text-center font-light mb-16">
          OUR SIGNATURE SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="service-card bg-white rounded-lg shadow-lg p-8 text-center">
            <img
              src="https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Wedding Photography"
              className="w-full h-48 object-cover rounded mb-6"
            />
            <h3 className="text-xl font-medium text-black mb-2">Wedding Photography</h3>
            <p className="text-stone-600">
              Artistic coverage of your big day, capturing every emotion, ritual, and candid moment with elegance.
            </p>
          </div>
          <div className="service-card bg-white rounded-lg shadow-lg p-8 text-center">
            <img
              src="https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Cinematic Videography"
              className="w-full h-48 object-cover rounded mb-6"
            />
            <h3 className="text-xl font-medium text-black mb-2">Cinematic Videography</h3>
            <p className="text-stone-600">
              Story-driven wedding films and highlight reels, crafted with cinematic flair and attention to detail.
            </p>
          </div>
          <div className="service-card bg-white rounded-lg shadow-lg p-8 text-center">
            <img
              src="https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Portraits & Events"
              className="w-full h-48 object-cover rounded mb-6"
            />
            <h3 className="text-xl font-medium text-black mb-2">Portraits & Events</h3>
            <p className="text-stone-600">
              Family portraits, pre-wedding shoots, and event coverage tailored to your unique story and style.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl md:text-4xl text-yellow-500 text-center font-light mb-16 mt-16">
          OUR CREATIVE PROCESS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white">
          <div className="process-step text-center">
            <div className="text-5xl mb-4 text-yellow-500">1</div>
            <h4 className="text-lg font-medium mb-2 text-black">Consultation</h4>
            <p className="text-stone-600">
              We listen to your vision and plan every detail to ensure a seamless experience.
            </p>
          </div>
          <div className="process-step text-center">
            <div className="text-5xl mb-4 text-yellow-500">2</div>
            <h4 className="text-lg font-medium mb-2 text-black">Capture</h4>
            <p className="text-stone-600">
              Our team documents your event with artistry, professionalism, and care.
            </p>
          </div>
          <div className="process-step text-center">
            <div className="text-5xl mb-4 text-yellow-500">3</div>
            <h4 className="text-lg font-medium mb-2 text-black">Deliver</h4>
            <p className="text-stone-600">
              Receive beautifully edited photos and films that you'll cherish forever.
            </p>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="bg-white py-16 text-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-12">READY TO BOOK YOUR SESSION?</h3>
          <a
            href="/contact"
            className="inline-block bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg transition-colors hover:bg-yellow-600"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
