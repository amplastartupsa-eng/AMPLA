import React from 'react';

const Hero: React.FC = () => {
  return (
    <div 
      className="h-56 bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://picsum.photos/seed/deliveryVan/800/400')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-white text-center px-4">Seus envios, sem filas e sem complicações.</h2>
      </div>
    </div>
  );
};

export default Hero;
