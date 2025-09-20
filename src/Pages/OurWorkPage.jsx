import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurWorkPage = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const resultsRef = useRef(null);

  useEffect(() => {
    // Hero Animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.workshop-content > *'),
        { y: 60, opacity: 0 },
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

    // Stats Animation
    if (statsRef.current) {
      gsap.fromTo(
        statsRef.current.querySelectorAll('.stat-item'),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 70%',
          },
        }
      );
    }

    // Results Animation
    if (resultsRef.current) {
      gsap.fromTo(
        resultsRef.current.querySelectorAll('.result-item'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: resultsRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section ref={heroRef} className="container mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <p className="text-teal-700 text-sm uppercase tracking-wider mb-4"></p>
           <h2 className="text-3xl font-header text-center mb-6 text-[#F9C801]">~  OURWORKSHOP  ~</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="workshop-content">
            <div className="bg-yellow-500 text-white p-8 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-light mb-6">
                Come... Join our fastest growing Creator Community
              </h2>
              <p className="leading-relaxed">
                With over four exclusive workshops, Sai Photo Studio&apos;s Creator Community grows
                to help you to master the art of wedding and pre-wedding photography and videography
                professionally similar expert mentorship, learning perfect digital and innovative
                techniques, and the business education that defines Sai Photo Studio&apos;s global
                success.
              </p>
            </div>
          </div>

          <div className="workshop-content">
            <img
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Workshop session"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="workshop-content mt-16 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl text-black font-light mb-8">
            ...UNLOCK THE SECRETS OF CINEMATIC MAGIC!
          </h3>
          <p className="text-stone-600 leading-relaxed">
            Dive into the art of storytelling with Sai Photo Studio&apos;s exclusive workshops,
            where over four sessions have empowered passionate creatives to capture love like never
            before. Guided by expert cinematographers and photographers, you&apos;ll uncover the
            secrets to crafting breathtaking wedding and pre-wedding visuals, from perfect angles to
            innovative lighting techniques, all designed to enhance your artistic maturity on global
            grounds.
          </p>
          <br />
          <p className="text-stone-600 leading-relaxed">
            Join our vibrant community of 32,000+ Instagram followers and YouTube viewers to master
            cinematic magic in a hands-on, inspiring environment. Whether you&apos;re an aspiring
            professional or a creative enthusiast, our workshops offer personalized mentorship and
            practical skills to elevate your work. Don&apos;t miss your chance - reserve your spot
            for our next workshop and start creating unforgettable stories with Sai Photo Studio!
          </p>
        </div>
      </section>

    
      {/* Workshop Images */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Workshop moment 1"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Workshop moment 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Workshop moment 3"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section ref={resultsRef} className="py-16 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-black text-sm uppercase tracking-wider mb-4">PREVIOUS WORKSHOP&apos;S</p>
          <h2 className="text-3xl font-header text-center mb-10 text-[#F9C801]">~  RESULT  ~</h2>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
  {/* Card 1 */}
  <div className="result-item bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
    <div className="relative aspect-video bg-black group">
      <iframe
        className="w-full h-full rounded-t-2xl"
        src="https://www.youtube.com/embed/ScMzIvxBSi4"
        title="Workshop Highlight 01"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
    </div>
    <div className="p-6 flex-1 flex flex-col justify-between">
      <h3 className="font-semibold text-lg mb-2 text-gray-800">Workshop Highlight Video</h3>
      <p className="text-gray-500 mb-4">
        Experience the energy and creativity from our latest workshop. Watch the cinematic recap!
      </p>
      <a
        href="https://www.youtube.com/channel/UCwXdFgeE9KYzlDdR7TG9cMw"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#F9C801] text-white px-6 py-2 rounded-full font-medium shadow hover:bg-yellow-400 transition"
      >
        Watch More on YouTube →
      </a>
    </div>
  </div>

  {/* Card 2 */}
  <div className="result-item bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
    <div className="relative aspect-video bg-black group">
      <iframe
        className="w-full h-full rounded-t-2xl"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        title="Workshop Highlight 02"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
    </div>
    <div className="p-6 flex-1 flex flex-col justify-between">
      <h3 className="font-semibold text-lg mb-2 text-gray-800">Behind the Scenes</h3>
      <p className="text-gray-500 mb-4">
        Get a sneak peek into the setup and planning of our cinematic wedding workshops.
      </p>
      <a
        href="https://www.youtube.com/channel/UCwXdFgeE9KYzlDdR7TG9cMw"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#F9C801] text-white px-6 py-2 rounded-full font-medium shadow hover:bg-yellow-400 transition"
      >
        Watch More on YouTube →
      </a>
    </div>
  </div>

  {/* Card 3 */}
  <div className="result-item bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300">
    <div className="relative aspect-video bg-black group">
      <iframe
        className="w-full h-full rounded-t-2xl"
        src="https://www.youtube.com/embed/ysz5S6PUM-U"
        title="Workshop Highlight 03"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition"></div>
    </div>
    <div className="p-6 flex-1 flex flex-col justify-between">
      <h3 className="font-semibold text-lg mb-2 text-gray-800">Creative Techniques</h3>
      <p className="text-gray-500 mb-4">
        Learn unique photography and videography techniques demonstrated by our expert instructors.
      </p>
      <a
        href="https://www.youtube.com/channel/UCwXdFgeE9KYzlDdR7TG9cMw"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#F9C801] text-white px-6 py-2 rounded-full font-medium shadow hover:bg-yellow-400 transition"
      >
        Watch More on YouTube →
      </a>
    </div>
  </div>
</div>

        </div>
      </section>


    </div>
  );
};

export default OurWorkPage;
