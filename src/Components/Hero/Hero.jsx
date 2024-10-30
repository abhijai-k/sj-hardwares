import React from 'react';
import logoImage from '../Assets/lock.png';

const Hero = () => {
  const scrollToProducts = () => {
    const section = document.getElementById('products'); // Ensure this ID matches the product section
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-white text-center">
      <div className="flex flex-col items-center">
        {/* Letter-by-Letter Animation for Welcome Text */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
          {Array.from("Welcome to SJ Hardwares").map((letter, index) => (
            <span
              key={index}
              className="inline-block animate-letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        {/* Fade-in Animation for Second Text */}
        <p className="text-lg md:text-xl mb-8 text-gray-600 fade-in-text">Unlock Quality Tools and Materials</p>

        {/* Apply the new shaking effect class to the image */}
        <img 
          src={logoImage} 
          alt="SJ Hardwares Logo" 
          className="w-50 h-80 mb-6 shake-subtle-image" 
        />
        
        <button 
          className="px-6 py-3 bg-black hover:bg-gray-700 rounded-lg text-white font-semibold"
          onClick={scrollToProducts} // Call the scroll function on click
        >
          Unlock Products
        </button>
      </div>
    </section>
  );
};

export default Hero;
