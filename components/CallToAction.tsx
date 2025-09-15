import React from 'react';

const CallToAction: React.FC = () => {
    return (
        <section className="text-center py-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4 font-xspace">Revolucione Seus Envios Hoje!</h2>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">Junte-se a milhares de usuários que já descobriram a forma mais inteligente de enviar encomendas aos correios.</p>
            <button className="bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors text-lg">
                Começar Agora
            </button>
        </section>
    );
};

export default CallToAction;
