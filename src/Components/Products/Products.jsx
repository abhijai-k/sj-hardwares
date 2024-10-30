import React from 'react';
import logo1 from '../Assets/pr1.jpg';
import logo2 from '../Assets/pr2.jpg';
import logo3 from '../Assets/pr3.jpg';
import logo4 from '../Assets/pr4.jpg';
import logo5 from '../Assets/pr5.jpg';
import logo6 from '../Assets/pr6.jpg';
import logo7 from '../Assets/pr7.jpeg';
import logo8 from '../Assets/pr8.jpg';
import logo9 from '../Assets/pr9.jpg';
import logo10 from '../Assets/pr10.jpg';

const Products = () => {
  const categories = [
    { id: 1, name: 'Tower bolts', logo: logo1 },
    { id: 2, name: 'Mortise Lock', logo: logo2 },
    { id: 3, name: 'Hinges', logo: logo3 },
    { id: 4, name: 'Tri bolt', logo: logo4 },
    { id: 5, name: 'Screws', logo: logo5 },
    { id: 6, name: 'Hook and Eyes', logo: logo6 },
    { id: 7, name: 'Cupboard lock', logo: logo7 },
    { id: 8, name: 'Aldrop', logo: logo8 },
    { id: 9, name: 'Fevicol', logo: logo9 },
    { id: 10, name: 'Sealant', logo: logo10 },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="bg-white text-gray-900 p-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Product Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => scrollToSection('products')} // Make sure this ID matches the section ID
          >
            <img
              src={category.logo}
              alt={category.name}
              className="h-16 w-16 object-contain mb-4"
            />
            <h3 className="text-lg font-medium text-center">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
