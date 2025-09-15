import React from 'react';
import { PARTNERS } from '../constants';

interface FooterProps {
    onAdminClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
    return (
        <footer className="bg-gray-900 p-6 text-center border-t border-gray-700">
            <h3 className="text-xl font-bold text-gray-400 mb-4">Parceiros em Potencial para Expansão</h3>
            <div className="flex justify-center items-center gap-6 flex-wrap">
                {PARTNERS.slice(0, 4).map(partner => (
                    <a key={partner.name} href={partner.website} target="_blank" rel="noopener noreferrer" title={partner.name}>
                        <img src={partner.logo} alt={partner.name} className="h-10 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" />
                    </a>
                ))}
            </div>
            <div className="mt-6 text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} AMPLAEXPRESS. Todos os direitos reservados.</p>
                <button onClick={onAdminClick} className="opacity-10 hover:opacity-100 transition-opacity mt-2">Admin</button>
            </div>
        </footer>
    );
};

export default Footer;
