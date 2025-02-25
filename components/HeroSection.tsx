import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center justify-center">
      <div className="absolute inset-0 bg-workbg bg-cover bg-center bg-no-repeat">
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      <div className="relative z-0 flex flex-col items-center justify-center gap-2 px-4 text-center text-white">
        <h1 className="text-5xl font-bold">
          Transform Your Vision into Reality
        </h1>
        <h4 className="text-xl">
          สร้างเว็บไซต์ที่เร็ว แรง และตอบโจทย์ธุรกิจของคุณ
        </h4>
        <a href="#" className="cta mt-12">
          Get Start
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
