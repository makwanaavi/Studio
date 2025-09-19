import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <>
      <Header />
      <main className="bg-white text-black">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}
