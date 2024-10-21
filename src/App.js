import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Contact from './Components/Contact/Contact';
import Brands from './Components/Brands/Brands';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <Brands/>
      <About/>
      <Contact/>
    </div>
  );
};

export default App;
