import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Our Store Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Our Store</h2>
          <p className="text-sm text-gray-400">
            SJ Hardwares offers a wide range of tools, equipment, and materials for all your construction needs. Visit us for quality and reliability.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul>
            <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white">Our Store</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-sm text-gray-400">Gopal St, near Vydooriya Tourist Home, Kannur, Kerala</p>
          <p className="text-sm text-gray-400">Phone: +91 7736725488</p>
          <p className="text-sm text-gray-400">Email: sjhardwares@gmail.com</p>
        </div>

      </div>
      
      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2024 SJ Hardwares. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
