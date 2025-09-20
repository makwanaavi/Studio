import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import GalleryPage from "./Pages/GalleryPage";
import ContactPage from "./Pages/ContactPage";
import AboutUsPage from "./Pages/AboutUsPage";
import OurWorkPage from "./Pages/OurWorkPage";
import ServicesPage from "./Pages/ServicesPage";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="bg-white text-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contactus" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/outwork" element={<OurWorkPage />} />
          <Route path="/service" element={<ServicesPage />} />

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
