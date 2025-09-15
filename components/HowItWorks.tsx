import React from 'react';
import { TIMELINE_STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">Como Funciona</h2>
      <p className="text-center text-gray-400 mb-8 -mt-4">Um processo simples e inteligente em 14 passos.</p>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-5 bottom-5 w-0.5 bg-yellow-400/30 transform -translate-x-1/2"></div>
        
        {TIMELINE_STEPS.map((item, index) => (
          <div key={item.step} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
              <h3 className="font-bold text-yellow-400">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
            <div className="relative w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-2xl border-2 border-yellow-400 z-10">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
