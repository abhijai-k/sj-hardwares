import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <nav className="bg-white p-4 text-black shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={toggleMenu} className="md:hidden text-black focus:outline-none mr-4">
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <span className="text-2xl font-bold">SJ Hardwares</span> {/* Text Logo */}
      </div>
      <ul className={`flex-col md:flex md:flex-row space-x-6 md:space-x-8 md:static absolute bg-white w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'top-14' : '-top-48'}`}>
        <li>
          <a href="#hero" className="hover:text-purple-400 transition duration-300">Home</a>
        </li>
        <li>
          <a href="#products" className="hover:text-purple-400 transition duration-300">Products</a>
        </li>
        <li>
          <a href="#about" className="hover:text-purple-400 transition duration-300">About</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-purple-400 transition duration-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
