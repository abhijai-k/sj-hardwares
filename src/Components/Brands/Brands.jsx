import React from 'react';
import brand1 from '../Assets/br1.png';
import brand2 from '../Assets/br2.png';
import brand4 from '../Assets/br4.png';
import brand5 from '../Assets/br5.jpg';

const Brands = () => {
  return (
    <section id="brands" className="bg-gray-100 py-10 text-center">
      <h2 className="text-3xl font-semibold mb-6">Brands We Offer</h2>
      <p className="mb-8">
        At <strong>SJ Hardwares</strong>, we offer a wide range of high-quality products from trusted brands in the industry.
      </p>

      <div className="relative w-full overflow-hidden">
        {/* Flex layout with responsive stacking */}
        <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4 md:space-y-0">
          <div className="flex-shrink-0 text-center">
            <img src={brand1} alt="Ebco" className="h-16 mx-auto" />
            <p>Ebco</p>
          </div>
          <div className="flex-shrink-0 text-center">
            <img src={brand2} alt="Itc" className="h-16 mx-auto" />
            <p>Itc</p>
          </div>
          <div className="flex-shrink-0 text-center">
            <img src={brand4} alt="Fevicol" className="h-16 mx-auto" />
            <p>Fevicol</p>
          </div>
          <div className="flex-shrink-0 text-center">
            <img src={brand5} alt="Bosch" className="h-16 mx-auto" />
            <p>Bosch</p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Brands;
