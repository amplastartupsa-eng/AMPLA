import React from 'react';

const advantages = [
    { icon: '⚡', title: 'Velocidade Extrema', description: 'Processo 10x mais rápido que métodos tradicionais. Do pedido à entrega em minutos, não horas.' },
    { icon: '🛡️', title: 'Segurança Total', description: 'Comprovantes digitais, rastreamento em tempo real e seguro opcional para máxima proteção.' },
    { icon: '🤖', title: 'IA Inteligente', description: 'Algoritmos avançados escolhem o melhor veículo e rota para cada tipo de encomenda.' },
    { icon: '💰', title: 'Preço Justo', description: 'Cotação transparente e competitiva. Sem taxas ocultas ou surpresas no final.' },
    { icon: '📱', title: 'App Intuitivo', description: 'Interface moderna e fácil de usar. Qualquer pessoa consegue fazer um envio em segundos.' },
];

const Advantages: React.FC = () => {
    return (
        <section className="bg-gray-700/50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-center text-yellow-400 mb-2">❤️ Vantagens Exclusivas</h2>
            <p className="text-center text-gray-300 mb-6">Descubra por que milhares de pessoas escolhem AMPLAEXPRESS para seus envios. Envios inteligentes, sem filas!</p>

            <div className="space-y-6">
                {advantages.map(adv => (
                    <div key={adv.title} className="flex items-start gap-4">
                        <div className="text-4xl">{adv.icon}</div>
                        <div>
                            <h3 className="font-bold text-white">{adv.title}</h3>
                            <p className="text-gray-400 text-sm">{adv.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Advantages;
