import React, { useState } from 'react';
import { useApp } from '../context/AppContext'; // Ajusta la ruta si es necesaria

export default function Calculadora() {
  const { generarDespiecePDF, setError } = useApp();
  
  const [ancho, setAncho] = useState<number>(1000);
  const [alto, setAlto] = useState<number>(1200);
  const [cliente, setCliente] = useState<string>("Juan Pérez");

  const handleDescargar = () => {
    if (ancho < 300 || alto < 300) {
      setError("Las medidas del vano son demasiado pequeñas.");
      return;
    }
    // ¡Aquí ocurre la magia!
    generarDespiecePDF(cliente, ancho, alto);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Calculadora Euroalum 2500</h2>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Ancho del Vano (mm)</label>
          <input 
            type="number" 
            value={ancho} 
            onChange={(e) => setAncho(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Alto del Vano (mm)</label>
          <input 
            type="number" 
            value={alto} 
            onChange={(e) => setAlto(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Nombre del Cliente</label>
        <input 
          type="text" 
          value={cliente} 
          onChange={(e) => setCliente(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
        />
      </div>

      <button
        onClick={handleDescargar}
        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Descargar Hoja de Corte (PDF)
      </button>
    </div>
  );
}