import React, { useEffect, useRef, useState } from 'react';
import { Instagram, Youtube } from 'lucide-react';
import gsap from 'gsap';

const ContactPage = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    coupleName: '',
    email: '',
    phoneNumber: '',
    weddingDate: '',
    location: '',
    hearAbout: '',
    moodBoard: '',
    otherInfo: ''
  });

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.querySelectorAll('.form-section'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.3,
          ease: "power2.out"
        }
      );
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      hearAbout: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <div className="container mx-auto px-4 text-center mb-12">
         <h2 className="text-3xl font-header text-center mb-8 text-[#F9C801]">~ LET’S CONNECT ~</h2>
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-teal-700 font-light mb-8"></h1>
        <p className="text-stone-600 text-lg mb-16"> Share your story with us and let’s create cinematic magic together.</p>
      </div>

      {/* Contact Form */}
      <div ref={formRef} className="container mx-auto px-4 max-w-4xl mb-20">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="form-section grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-stone-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-stone-300 rounded-none bg-white focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-stone-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-stone-300 rounded-none bg-white focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="form-section">
            <label htmlFor="coupleName" className="block text-stone-700 mb-2">
              Couple Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="coupleName"
              name="coupleName"
              value={formData.coupleName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-stone-300 rounded-none bg-white focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none transition-colors"
            />
          </div>

          <div className="form-section grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-stone-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-stone-300 rounded-none bg-white focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-stone-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-stone-300 rounded-none bg-white focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="form-section grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="weddingDate" className="block text-stone-700 mb-2">
                Wedding Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="weddingDate"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-stone-300 rounded-none bg-white focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-stone-700 mb-2">
                Location & Venue <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-stone-300 rounded-none bg-white focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none transition-colors"
              />
            </div>
          </div>

          <div className="form-section">
            <label className="block text-stone-700 mb-4">How did you hear about us?</label>
            <div className="flex flex-wrap gap-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="hearAbout"
                  value="Instagram"
                  checked={formData.hearAbout === 'Instagram'}
                  onChange={handleCheckboxChange}
                  className="mr-2 text-teal-700 focus:ring-teal-700"
                />
                Instagram
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="hearAbout"
                  value="YouTube"
                  checked={formData.hearAbout === 'YouTube'}
                  onChange={handleCheckboxChange}
                  className="mr-2 text-teal-700 focus:ring-teal-700"
                />
                YouTube
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="hearAbout"
                  value="Friend Referral"
                  checked={formData.hearAbout === 'Friend Referral'}
                  onChange={handleCheckboxChange}
                  className="mr-2 text-teal-700 focus:ring-teal-700"
                />
                Friend Referral
              </label>
            </div>
          </div>

          <div className="form-section">
            <label htmlFor="moodBoard" className="block text-stone-700 mb-2">
              Mood Board / Inspiration / Vision
            </label>
            <textarea
              id="moodBoard"
              name="moodBoard"
              value={formData.moodBoard}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 border border-stone-300 rounded-none bg-white focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none transition-colors resize-vertical"
            />
          </div>

          <div className="form-section">
            <label htmlFor="otherInfo" className="block text-stone-700 mb-2">
              Any other information to share?
            </label>
            <textarea
              id="otherInfo"
              name="otherInfo"
              value={formData.otherInfo}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 border border-stone-300 rounded-none bg-white focus:border-teal-700 focus:ring-1 focus:ring-teal-700 outline-none transition-colors resize-vertical"
            />
          </div>

          <div className="form-section text-center">
            <button
              type="submit"
              className="bg-yellow-500 text-white px-12 py-3 font-medium transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Follow Us Section */}
      <section className="bg-yellow-500 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-light mb-6">FOLLOW US</h3>
          <p className="mb-8 max-w-2xl mx-auto">
            Join our Instagram and immerse yourself in our stunning stories.<br />
            Watch our breathtaking videos on YouTube, showcasing love captured with elegance worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">INSTAGRAM</h4>
              <a 
                href="#" 
                className="inline-flex items-center text-sm uppercase tracking-wide hover:text-stone-200 transition-colors"
              >
                FOLLOW ALONG →
              </a>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-2">YOUTUBE</h4>
              <a 
                href="#" 
                className="inline-flex items-center text-sm uppercase tracking-wide hover:text-stone-200 transition-colors"
              >
                WE ARE REAL INTO VIDEOGRAPHY →
              </a>
            </div>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 max-w-4xl mx-auto">
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} className="aspect-square">
                <img
                  src={`https://images.pexels.com/photos/102419${item}/pexels-photo-102419${item}.jpeg?auto=compress&cs=tinysrgb&w=300`}
                  alt={`Instagram post ${item}`}
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;



// import React, { useEffect, useRef, useState } from "react";
// import { Instagram, Youtube } from "lucide-react";
// import gsap from "gsap";

// const ContactPage = () => {
//   const formRef = useRef(null);
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     coupleName: "",
//     email: "",
//     phoneNumber: "",
//     weddingDate: "",
//     location: "",
//     hearAbout: "",
//     moodBoard: "",
//     otherInfo: "",
//   });

//   useEffect(() => {
//     if (formRef.current) {
//       gsap.fromTo(
//         formRef.current.querySelectorAll(".form-section"),
//         { y: 40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 0.9,
//           stagger: 0.2,
//           delay: 0.3,
//           ease: "power3.out",
//         }
//       );
//     }
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleCheckboxChange = (e) => {
//     const { value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       hearAbout: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Thank you for your inquiry! We will get back to you soon.");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-stone-100 via-white to-stone-100 pt-24">
//       {/* Header */}
//       <div className="container mx-auto px-4 text-center mb-16">
//         <p className="text-teal-600 text-sm uppercase tracking-[4px] mb-3">
//           Send Inquiry
//         </p>
//         <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-stone-800 mb-6">
//           
//         </h1>
//         <p className="text-stone-600 text-lg max-w-2xl mx-auto">
//           Share your story with us and let’s create cinematic magic together.
//         </p>
//       </div>

//       {/* Contact Form */}
//       <div
//         ref={formRef}
//         className="container mx-auto px-4 max-w-3xl mb-24"
//       >
//         <form
//           onSubmit={handleSubmit}
//           className="space-y-8 bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-stone-200"
//         >
//           {/* First & Last Name */}
//           <div className="form-section grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-stone-700 mb-2">
//                 First Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-stone-700 mb-2">
//                 Last Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
//               />
//             </div>
//           </div>

//           {/* Couple Name */}
//           <div className="form-section">
//             <label className="block text-sm font-medium text-stone-700 mb-2">
//               Couple Name <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="coupleName"
//               value={formData.coupleName}
//               onChange={handleInputChange}
//               required
//               className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
//             />
//           </div>

//           {/* Email + Phone */}
//           <div className="form-section grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-stone-700 mb-2">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-stone-700 mb-2">
//                 Phone Number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
//               />
//             </div>
//           </div>

//           {/* Wedding Date + Location */}
//           <div className="form-section grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-stone-700 mb-2">
//                 Wedding Date <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="date"
//                 name="weddingDate"
//                 value={formData.weddingDate}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-stone-700 mb-2">
//                 Location & Venue <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
//               />
//             </div>
//           </div>

//           {/* Hear About Us */}
//           <div className="form-section">
//             <label className="block text-sm font-medium text-stone-700 mb-4">
//               How did you hear about us?
//             </label>
//             <div className="flex flex-wrap gap-6">
//               {["Instagram", "YouTube", "Friend Referral"].map((option) => (
//                 <label key={option} className="flex items-center text-stone-600">
//                   <input
//                     type="checkbox"
//                     value={option}
//                     checked={formData.hearAbout === option}
//                     onChange={handleCheckboxChange}
//                     className="mr-2 accent-teal-600"
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Mood Board */}
//           <div className="form-section">
//             <label className="block text-sm font-medium text-stone-700 mb-2">
//               Mood Board / Inspiration
//             </label>
//             <textarea
//               name="moodBoard"
//               value={formData.moodBoard}
//               onChange={handleInputChange}
//               rows="4"
//               className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none resize-vertical"
//             />
//           </div>

//           {/* Other Info */}
//           <div className="form-section">
//             <label className="block text-sm font-medium text-stone-700 mb-2">
//               Any other information to share?
//             </label>
//             <textarea
//               name="otherInfo"
//               value={formData.otherInfo}
//               onChange={handleInputChange}
//               rows="4"
//               className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none resize-vertical"
//             />
//           </div>

//           {/* Submit */}
//           <div className="form-section text-center">
//             <button
//               type="submit"
//               className="bg-teal-600 text-white px-10 py-3 rounded-full font-medium hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl"
//             >
//               Send Inquiry
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Follow Us */}
//       <section className="bg-gradient-to-r from-teal-700 to-teal-600 py-20 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h3 className="text-3xl font-light mb-6">Follow Us</h3>
//           <p className="mb-10 max-w-2xl mx-auto text-stone-100">
//             Join our journey on Instagram and YouTube to explore cinematic love
//             stories captured worldwide.
//           </p>

//           <div className="flex justify-center gap-8 mb-12">
//             <a
//               href="#"
//               className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition"
//             >
//               <Instagram /> Instagram
//             </a>
//             <a
//               href="#"
//               className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-white/20 transition"
//             >
//               <Youtube /> YouTube
//             </a>
//           </div>

//           {/* Instagram Grid */}
//           <div className="grid grid-cols-3 md:grid-cols-6 gap-2 max-w-4xl mx-auto">
//             {[1, 2, 3, 4, 5, 6].map((item) => (
//               <div
//                 key={item}
//                 className="aspect-square overflow-hidden rounded-lg shadow-md"
//               >
//                 <img
//                   src={`https://images.pexels.com/photos/102419${item}/pexels-photo-102419${item}.jpeg?auto=compress&cs=tinysrgb&w=300`}
//                   alt={`Instagram post ${item}`}
//                   className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactPage;
