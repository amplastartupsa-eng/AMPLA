import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 p-6 text-center border-b-4 border-yellow-400">
      <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 font-xspace tracking-wider">
        AMPLAEXPRESS
      </h1>
      <p className="text-gray-300 mt-2 max-w-md mx-auto text-sm">
        A revolução na entrega de encomendas aos correios. Tecnologia inteligente, processo automatizado e total segurança para seus envios.
      </p>
    </header>
  );
};

export default Header;
