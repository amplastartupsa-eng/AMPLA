import React, { useState } from 'react';

const paymentOptions = ['Pix', 'Crédito', 'Débito', 'Dinheiro', 'TED/DOC'];

const Payment: React.FC = () => {
    const [selected, setSelected] = useState('Pix');

    return (
        <section>
            <h2 className="text-2xl font-bold text-center text-yellow-400 mb-4">Forma de Pagamento</h2>
            <div className="flex flex-wrap justify-center gap-3">
                {paymentOptions.map(option => (
                    <button 
                        key={option}
                        onClick={() => setSelected(option)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${selected === option ? 'bg-yellow-400 text-gray-900' : 'bg-gray-700 hover:bg-gray-600'}`}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div className="text-center mt-6">
                 <button className="w-full max-w-xs bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors">
                    Confirmar Pedido e Pagar
                </button>
            </div>
        </section>
    );
}

export default Payment;
