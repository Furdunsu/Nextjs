'use client';
import { useState } from 'react';

export default function Card() {
  // Estado para o número e o percentual
  const [numero, setNumero] = useState(18765);
  const [percentual, setPercentual] = useState(2.6);

  // Estado para armazenar os valores temporários enquanto o usuário digita
  const [tempNumero, setTempNumero] = useState(18765);
  const [tempPercentual, setTempPercentual] = useState(2.6);

  // Função para atualizar o número temporário com base na entrada
  const handleNumeroChange = (e: { target: { value: string; }; }) => {
    const newValue = e.target.value;
    if (newValue !== '') {
      setTempNumero(Number(newValue));
    }
  };

  // Função para atualizar o percentual temporário com base na entrada
  const handlePercentualChange = (e: { target: { value: string; }; }) => {
    const newPercentual = e.target.value;
    if (newPercentual !== '') {
      setTempPercentual(Number(newPercentual));
    }
  };

  // Função para atualizar o número e percentual definitivos
  const handleAtualizar = () => {
    setNumero(tempNumero);
    setPercentual(tempPercentual);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Total de Usuários Ativos</h2>
        <p className="text-green-500 text-lg mb-4">+ {percentual}%</p>
        <h3 className="text-4xl font-bold text-gray-800 mb-6">{numero}</h3>
        
        {/* Input para mudar o número temporariamente */}
        <input
          type="number"
          value={tempNumero}
          onChange={handleNumeroChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        
        {/* Input para mudar o percentual temporariamente */}
        <input
          type="number"
          value={tempPercentual}
          onChange={handlePercentualChange}
          step="0.1"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        
        {/* Botão para aplicar as alterações */}
        <button
          onClick={handleAtualizar}
          className="w-full p-2 bg-green-500 text-white rounded-md text-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Atualizar
        </button>
      </div>
    </div>
  );
}
