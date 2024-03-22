import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="bg-black">
      <Navbar />
      <Hero />
      <HighLights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </section>
  );
}
export default App;
