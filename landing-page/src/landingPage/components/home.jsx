import React from 'react';
import homeBg from '../assets/bg-image.jpeg'
const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${homeBg})`, 
      }}
    >
   
      <div className="absolute inset-0 bg-black opacity-60"></div>

  
      <div className="relative z-10 max-w-4xl text-center px-4">
        <h2 className="text-xl sm:text-2xl mb-2">The Best WorkSpace in Kigali</h2>

        <h1 className="text-3xl wrap-normal font-bold mb-2">
          <span className="text-[var(--color-brand)]">Professional</span>,
          <span className="text-white">Creative</span>,<br />
          <span className="text-white">Flexible</span>,
          <span className="text-white">Scalable</span>,<br />
          <span className="text-[var(--color-brand)]">Workspace</span>
        </h1>

        <p className="text-gray-200 text-base sm:text-lg mb-6 px-6">
          Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office
          spaces. Elevate your business with flexible solutions tailored to your needs. Find your
          perfect office today!
        </p>

        <button className="bg-[var(--color-brand)] px-6 py-3 rounded font-semibold text-white hover:bg-teal-700 transition cursor-pointer">
          Explore
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
