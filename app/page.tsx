import Contact from "@/components/Contact";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
