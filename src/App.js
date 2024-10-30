import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Brands from './Components/Brands/Brands';
import Footer from './Components/Footer/Footer';
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <Brands/>
      <About/>
      <Footer/>
    </div>
  );
};

export default App;
