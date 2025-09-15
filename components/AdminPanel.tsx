import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { PARTNERS } from '../constants';
import type { Partner } from '../types';

const chartData = [
  { name: 'Segunda', Corridas: 30, Faturamento: 2400 },
  { name: 'Terça', Corridas: 45, Faturamento: 3800 },
  { name: 'Quarta', Corridas: 60, Faturamento: 5200 },
  { name: 'Quinta', Corridas: 51, Faturamento: 4500 },
  { name: 'Sexta', Corridas: 80, Faturamento: 7100 },
  { name: 'Sábado', Corridas: 95, Faturamento: 8200 },
  { name: 'Domingo', Corridas: 40, Faturamento: 3500 },
];

const pieData = [
  { name: 'Moto', value: 400 },
  { name: 'Carro', value: 300 },
  { name: 'Furgão', value: 300 },
  { name: 'Caminhão', value: 200 },
];

const COLORS = ['#FFED1C', '#FBBF24', '#F59E0B', '#D97706'];

interface AdminPanelProps {
    onExit: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onExit }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login
        if (username === 'admin' && password === 'password') {
            setLoggedIn(true);
            setError('');
        } else {
            setError('Credenciais inválidas. Use admin/password');
        }
    };
    
    if(!loggedIn) {
        return (
             <div className="p-6 bg-gray-900 min-h-screen flex flex-col items-center justify-center">
                <div className="w-full max-w-sm">
                    <h2 className="text-3xl font-bold text-center text-yellow-400 mb-6 font-xspace">PAINEL ADMIN</h2>
                    <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">Usuário</label>
                            <input value={username} onChange={e => setUsername(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-yellow-400" id="username" type="text" placeholder="admin"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">Senha</label>
                            <input value={password} onChange={e => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-700 text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-yellow-400" id="password" type="password" placeholder="password"/>
                        </div>
                        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                        <div className="flex items-center justify-between">
                            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Entrar
                            </button>
                            <button onClick={onExit} type="button" className="inline-block align-baseline font-bold text-sm text-gray-400 hover:text-white">
                                Sair
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-yellow-400 font-xspace">PAINEL DE CONTROLE</h2>
                <button onClick={onExit} className="text-sm text-gray-400 hover:text-white">Sair do Painel</button>
            </div>

            {/* CHARTS */}
            <div className="bg-gray-900 p-4 rounded-lg mb-8">
                <h3 className="font-bold mb-4 text-center">Desempenho Semanal</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
                        <XAxis dataKey="name" stroke="#A0AEC0" />
                        <YAxis stroke="#A0AEC0" />
                        <Tooltip contentStyle={{ backgroundColor: '#1A202C', border: '1px solid #4A5568' }} />
                        <Legend />
                        <Bar dataKey="Corridas" fill="#FFED1C" />
                        <Bar dataKey="Faturamento" fill="#FBBF24" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
            <div className="bg-gray-900 p-4 rounded-lg mb-8">
                <h3 className="font-bold mb-4 text-center">Corridas por Veículo</h3>
                 <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={pieData} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                         <Tooltip contentStyle={{ backgroundColor: '#1A202C' }} />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* PARTNERS */}
            <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="font-bold mb-4 text-center">Contatos de Parceiros Investidores</h3>
                <div className="space-y-4">
                    {PARTNERS.map((partner: Partner) => (
                        <div key={partner.name} className="bg-gray-800 p-4 rounded-md flex items-start gap-4">
                            <img src={partner.logo} alt={partner.name} className="h-16 w-16 object-contain bg-white p-1 rounded"/>
                            <div>
                                <h4 className="font-bold text-yellow-400">{partner.name}</h4>
                                <p className="text-sm text-gray-300 mb-2">{partner.description}</p>
                                <p className="text-xs text-gray-400"><strong>Telefone:</strong> {partner.phone}</p>
                                <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-xs text-yellow-500 hover:underline">
                                    <strong>Website:</strong> {partner.website}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
