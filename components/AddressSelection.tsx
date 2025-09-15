import React from 'react';

const AddressSelection: React.FC = () => {
    return (
        <section className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-center text-yellow-400 mb-4">Endereços de Coleta e Entrega</h2>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Endereço de Coleta</label>
                    <input 
                        type="text" 
                        placeholder="Digite seu endereço completo" 
                        className="w-full bg-gray-800 border border-gray-600 rounded-md p-2"
                    />
                     <p className="text-xs text-gray-400 mt-1">Este é o local onde nosso entregador irá buscar sua encomenda.</p>
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Agência dos Correios (Entrega)</label>
                    <input 
                        type="text" 
                        disabled
                        placeholder="Encontraremos a agência mais próxima para você" 
                        className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 disabled:opacity-70"
                    />
                     <p className="text-xs text-gray-400 mt-1">
                        Utilizamos um sistema integrado para otimizar sua entrega. {' '}
                        <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">
                           Consulte endereços aqui.
                        </a>
                     </p>
                </div>
            </div>
        </section>
    );
}

export default AddressSelection;
