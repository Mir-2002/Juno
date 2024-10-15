import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <div className="w-full h-full flex flex-col overflow-x-hidden">
        <Navigation />
        <Hero />
        <Features />
        <Pricing />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
