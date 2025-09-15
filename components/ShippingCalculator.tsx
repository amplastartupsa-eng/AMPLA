import React, { useState, useEffect } from 'react';
import { PRODUCT_CATEGORIES, CORREIOS_PRESETS } from '../constants';
import type { CorreiosPreset } from '../types';

const ShippingCalculator: React.FC = () => {
    const [preset, setPreset] = useState<string>('custom');
    const [height, setHeight] = useState<string>('');
    const [width, setWidth] = useState<string>('');
    const [length, setLength] = useState<string>('');
    const [weight, setWeight] = useState<string>('');
    const [weightUnit, setWeightUnit] = useState<'kg' | 'g'>('kg');
    const [dimUnit, setDimUnit] = useState<'cm' | 'm'>('cm');
    const [category, setCategory] = useState<string>(PRODUCT_CATEGORIES[0]);
    const [otherCategory, setOtherCategory] = useState<string>('');
    const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

    useEffect(() => {
        if (preset === 'custom') {
            setEstimatedPrice(null);
        } else {
            const selectedPreset = CORREIOS_PRESETS.find(p => p.id === preset);
            if (selectedPreset) {
                setHeight(selectedPreset.h.toString());
                setWidth(selectedPreset.w.toString());
                setLength(selectedPreset.l.toString());
                setWeight(selectedPreset.kg.toString());
                setDimUnit('cm');
                setWeightUnit('kg');
                setEstimatedPrice(selectedPreset.price);
            }
        }
    }, [preset]);

    const handleCalculate = () => {
        if (preset !== 'custom') return; // Price is already set for presets
        const h = parseFloat(height) || 0;
        const w = parseFloat(width) || 0;
        const l = parseFloat(length) || 0;
        const kg = weightUnit === 'kg' ? (parseFloat(weight) || 0) : (parseFloat(weight) || 0) / 1000;
        // Simple mock calculation: Base fee + volume + weight
        const price = 10 + (h*w*l*0.0001) + (kg * 2.5);
        setEstimatedPrice(price);
    }

    const renderPrice = () => {
        if (!estimatedPrice) return null;
        return (
            <div className="mt-4 p-4 bg-yellow-400 text-gray-900 rounded-lg text-center">
                <span className="text-sm">Valor Estimado:</span>
                <p className="text-2xl font-bold">R$ {estimatedPrice.toFixed(2).replace('.', ',')}</p>
            </div>
        );
    }

    return (
        <section className="bg-gray-700 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-center text-yellow-400 mb-4">Calcule a Sua Entrega</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Escolha um pacote padrão (opcional)</label>
                <select value={preset} onChange={(e) => setPreset(e.target.value)} className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 text-white focus:ring-yellow-400 focus:border-yellow-400">
                    <option value="custom">-- Dimensões Personalizadas --</option>
                    {CORREIOS_PRESETS.map((p: CorreiosPreset) => (
                        <option key={p.id} value={p.id}>{`${p.name} - R$ ${p.price.toFixed(2)}`}</option>
                    ))}
                </select>
            </div>
            
            {renderPrice()}

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Altura *</label>
                    <input type="number" value={height} onChange={e => setHeight(e.target.value)} disabled={preset !== 'custom'} className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 disabled:opacity-50"/>
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Largura *</label>
                    <input type="number" value={width} onChange={e => setWidth(e.target.value)} disabled={preset !== 'custom'} className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 disabled:opacity-50"/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Comprimento *</label>
                    <input type="number" value={length} onChange={e => setLength(e.target.value)} disabled={preset !== 'custom'} className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 disabled:opacity-50"/>
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Peso *</label>
                    <input type="number" value={weight} onChange={e => setWeight(e.target.value)} disabled={preset !== 'custom'} className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 disabled:opacity-50"/>
                </div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-400">
                <div className="flex gap-2">
                    <button onClick={() => setDimUnit('cm')} className={`${dimUnit === 'cm' ? 'text-yellow-400 font-bold' : ''}`}>cm</button>
                    <span>/</span>
                    <button onClick={() => setDimUnit('m')} className={`${dimUnit === 'm' ? 'text-yellow-400 font-bold' : ''}`}>m</button>
                </div>
                 <div className="flex gap-2">
                    <button onClick={() => setWeightUnit('kg')} className={`${weightUnit === 'kg' ? 'text-yellow-400 font-bold' : ''}`}>kg</button>
                    <span>/</span>
                    <button onClick={() => setWeightUnit('g')} className={`${weightUnit === 'g' ? 'text-yellow-400 font-bold' : ''}`}>g</button>
                </div>
            </div>

            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Categoria do produto</label>
                <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-gray-800 border border-gray-600 rounded-md p-2">
                    {PRODUCT_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                {category === 'Outros' && (
                    <input 
                        type="text" 
                        placeholder="Especifique o produto" 
                        maxLength={20}
                        value={otherCategory}
                        onChange={e => setOtherCategory(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 mt-2"
                    />
                )}
            </div>

            {preset === 'custom' && (
                <button onClick={handleCalculate} className="w-full bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg mt-6 hover:bg-yellow-300 transition-colors">
                    Calcular
                </button>
            )}

        </section>
    );
};

export default ShippingCalculator;
