import React, { useState } from 'react';

const vehicles = [
  { name: 'Moto', icon: '🏍️' },
  { name: 'Carro', icon: '🚗' },
  { name: 'Furgão', icon: '🚐' },
  { name: 'Caminhão', icon: '🚚' },
];

const VehicleSelection: React.FC = () => {
    const [selected, setSelected] = useState('Carro');

    return (
        <section>
            <h2 className="text-2xl font-bold text-center text-yellow-400 mb-4">Escolha o Veículo Ideal</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {vehicles.map(vehicle => (
                    <button 
                        key={vehicle.name} 
                        onClick={() => setSelected(vehicle.name)}
                        className={`p-4 rounded-lg text-center transition-all duration-200 ${selected === vehicle.name ? 'bg-yellow-400 text-gray-900 ring-2 ring-offset-2 ring-offset-gray-800 ring-yellow-400' : 'bg-gray-700 hover:bg-gray-600'}`}
                    >
                        <span className="text-4xl">{vehicle.icon}</span>
                        <p className="font-bold mt-2">{vehicle.name}</p>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default VehicleSelection;
