import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

export default function App() {
  return (
    <>
      <Header />
      <main className="bg-black">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Gallery />
        <Blog />
        <Instagram />
      </main>
      <Footer />
    </>
  );
}
