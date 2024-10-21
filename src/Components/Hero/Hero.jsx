import React, { useState, useEffect } from 'react';

// Import your images directly
import image1 from '../Assets/hero1.jpg';
import image2 from '../Assets/hero2.jpg';
import image3 from '../Assets/hero3.jpg';

const Hero = () => {
  const images = [image1, image2, image3]; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycles through images
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [images.length]);

  return (
    <section
      className={`flex items-center justify-center h-screen bg-cover bg-center transition-all duration-500`}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }} // Dynamically update background image
    >
      <div className="bg-black bg-opacity-60 p-6 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-white">Welcome To SJ Hardwares</h1>
        <p className="mt-4 text-lg text-gray-200">
          We provide the best quality hardware tools and equipments.
        </p>
        <button className="mt-6 px-4 py-2 bg-gray-900 text-white rounded transition duration-200 hover:bg-purple-700">
          Shop Now
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
