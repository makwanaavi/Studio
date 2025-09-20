import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUsPage = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    // Hero Animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelectorAll('.story-content > *'),
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

    // Story Animation
    if (storyRef.current) {
      gsap.fromTo(
        storyRef.current.querySelectorAll('.story-section'),
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 70%',
          },
        }
      );
    }

    // Team Animation
    if (teamRef.current) {
      gsap.fromTo(
        teamRef.current.querySelectorAll('.team-member'),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: teamRef.current,
            start: 'top 70%',
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-12">
        <p className="text-teal-700 text-sm uppercase tracking-wider mb-4"></p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-teal-700 font-light mb-16"></h1>

          <h2 className="text-3xl font-header text-center mb-6 text-[#F9C801]">~ OUR STORY ~</h2>
      </div>

      {/* Main Story Section */}
      <section ref={heroRef} className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="story-content">
            <img
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="SAI Photo Studio Team"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="story-content">
            <div className="bg-yellow-500 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-light mb-6">HOW WE STARTED</h2>
              <p className="leading-relaxed mb-6">
                SAI Photo Studio was born from a simple moment: a borrowed camera and a passion
                for storytelling. Our founder, Bipin Kotadiya, discovered his love for photography
                while capturing his sister's wedding and that spark quickly turned into a full-time
                journey.
              </p>
              <p className="leading-relaxed">
                As the studio grew, Bipin was joined by longtime friends Pradip and Nilesh, who
                brought their own creative strengths in cinematography and editing. Together, the
                trio built a studio rooted in passion, trust, and a shared love for capturing real
                moments.
              </p>
              <br />
              <p className="leading-relaxed">
                What started as a solo dream has now become one of Surat's most trusted photography
                teams, known for blending artistry with emotion. At SAI Photo Studio, we don't just
                take pictures; we preserve memories that last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Story Section */}
      <section ref={storyRef} className="container mx-auto px-4 mb-20 bg-white">
        <h2 className="text-3xl md:text-4xl text-yellow-500 text-center font-light mb-16">
          OVER A DECADE CAPTURING MOMENTS WITH LUXURY DESTINATION WEDDING PHOTOGRAPHY
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="story-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              At SAI Photo Studio, we believe every moment holds a story worth preserving. With
              over a decade of experience in wedding and portrait photography, we have dedicated
              ourselves to capturing the emotions, connections, and beauty that makes your most
              important life unfolding. Based in Surat, we've had the privilege of being part of
              countless love stories and celebrations across Gujarat and beyond.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Our passion lies in creating timeless images that reflect the essence of your event.
              Whether it's a vibrant traditional wedding, a modern pre-wedding shoot, or a
              cherished family gathering, we approach every project with a blend of creativity and
              precision. Our style combines modern elegance with classic portraiture, focusing on
              the details that matter most; those candid moments, subtle expressions, and shared
              glances.
            </p>
          </div>

          <div className="story-section">
            <p className="text-stone-600 leading-relaxed mb-6">
              Over the years, we've drawn inspiration from diverse cultures and real human
              emotions, allowing us to connect deeply with every couple we have the honor to with.
              From the initial consultation to the final album, we prioritize comfort,
              communication, and quality, ensuring with. From the initial consultation to the final
              album, we prioritize comfort, communication, and quality, ensuring that also cherish
              the results for a lifetime.
            </p>
            <p className="text-stone-600 leading-relaxed">
              At SAI Photo Studio, our mission is simple: to turn your special moments into lasting
              memories. Let us guide you through a seamless photography journey where your story is
              at the heart of every frame.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl md:text-4xl text-yellow-500 text-center font-light mb-16 mt-16">
          MEET THE CREATIVE MINDS OF SAI STUDIO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white">
          <div className="team-member text-center">
            <img
              src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Bipin Kotadiya"
              className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-xl font-medium text-black mb-2">BIPIN KOTADIYA</h3>
            <p className="text-black">Founder & Lead Photographer</p>
          </div>

          <div className="team-member text-center">
            <img
              src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Pradip Lakhani"
              className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-xl font-medium text-stone-800 mb-2">PRADIP LAKHANI</h3>
            <p className="text-stone-600">Cinematographer</p>
          </div>

          <div className="team-member text-center">
            <img
              src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Nilesh Kotadiya"
              className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
            />
            <h3 className="text-xl font-medium text-stone-800 mb-2">NILESH KOTADIYA</h3>
            <p className="text-stone-600">Editor & Creative Director</p>
          </div>
        </div>
      </section>

      {/* Instagram Follow Section */}
      <section className="bg-white py-16 text-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-12">FOLLOW US ON INSTAGRAM</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h4 className="text-lg font-medium mb-4 text-black">BIPIN KOTADIYA</h4>
              <a
                href="#"
                className="inline-flex items-center text-sm uppercase tracking-wide text-black transition-colors"
              >
                FOLLOW ALONG →
              </a>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium mb-4 text-black">PRADIP LAKHANI</h4>
              <a
                href="#"
                className="inline-flex items-center text-sm uppercase tracking-wide text-black transition-colors"
              >
                FOLLOW ALONG →
              </a>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-medium mb-4 text-black">NILESH KOTADIYA</h4>
              <a
                href="#"
                className="inline-flex items-center text-sm uppercase tracking-wide text-black transition-colors"
              >
                FOLLOW ALONG →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
