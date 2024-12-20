// Settings.js
import React, { useState } from 'react';

const Settings = ({ onBackgroundChange }) => {
  const initialBackground = localStorage.getItem('background') || 'bg-white';
  const [background, setBackground] = useState(initialBackground); // Fondo actual
  const [tempBackground, setTempBackground] = useState(initialBackground); // Fondo temporal

  const handleTempBackgroundChange = (e) => {
    const selectedBackground = e.target.value;
    setTempBackground(selectedBackground); // Cambia solo el fondo temporal
  };

  const confirmBackgroundChange = () => {
    setBackground(tempBackground); // Cambia el fondo definitivo
    onBackgroundChange(tempBackground);
    localStorage.setItem('background', tempBackground);
  };

  const textColorClass =
    background === 'bg-dark' || background === 'bg-terracota'
      ? 'text-white'
      : 'text-gray-900';
  const selectBackgroundClass =
    tempBackground === 'bg-dark' || tempBackground === 'bg-terracota'
      ? 'bg-gray-700 text-white'
      : 'bg-white text-black';

  return (
    <div className={`min-h-screen flex items-center justify-center ${background} transition-all duration-300`}>
      <div
        className={`p-8 rounded-lg shadow-lg w-full max-w-md mx-auto ${textColorClass} border-4 ${
          background === 'bg-dark' ? 'border-yellow-500' : 'border-gray-300'
        }`}
      >
        <h1 className="text-2xl font-semibold mb-6">Configuración</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Tema de fondo:</label>
          <select
            value={tempBackground}
            onChange={handleTempBackgroundChange}
            className={`w-full p-2 border rounded-lg ${selectBackgroundClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="bg-white" className="bg-white text-black">
              Claro
            </option>
            <option value="bg-dark" className="bg-gray-700 text-white">
              Oscuro
            </option>
            <option value="bg-terracota" className="bg-red-800 text-white">
              Terracota
            </option>
            <option value="bg-khaki" className="bg-yellow-200 text-black">
              Khaki
            </option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Idioma:</label>
          <select
            value="es"
            disabled
            className={`w-full p-2 border rounded-lg ${selectBackgroundClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="es" className="bg-white text-black">
              Español
            </option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            onClick={confirmBackgroundChange}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Confirmar cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
