import React from "react";

export default function About() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto py-20 px-4 text-center">
      <h2 className="text-3xl font-header mb-4 text-white">WE CAPTURE THE MOMENTS</h2>
      <p className="text-white leading-7 max-w-[900px] mx-auto mb-4">
        At Capturer, we specialize in freezing those fleeting moments in time that hold immense significance for you.
        With our passion for photography and keen eye for detail, we transform ordinary moments into extraordinary memories.
      </p>
      <p className="text-white leading-7 max-w-[900px] mx-auto mb-6">
        Whether it's a milestone event, a candid portrait, or the breathtaking beauty of nature, we strive to encapsulate the essence of every moment,
        ensuring that your cherished memories last a lifetime. Trust us to capture the magic of your life's journey, one frame at a time.
      </p>
      <img src="/assets/logo-dark.png" alt="logo" className="mx-auto w-[170px]" />
    </section>
  );
}
