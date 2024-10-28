import React, { useState } from 'react';

const Settings = ({ onBackgroundChange, onLanguageChange }) => {
  // Recuperar valores desde localStorage o usar un valor por defecto si no existen
  const initialBackground = localStorage.getItem('background') || 'bg-white';
  const initialLanguage = localStorage.getItem('language') || 'en';

  const [background, setBackground] = useState(initialBackground);
  const [language, setLanguage] = useState(initialLanguage);

  const handleBackgroundChange = (e) => {
    const selectedBackground = e.target.value;
    setBackground(selectedBackground);
    onBackgroundChange(selectedBackground);
    // Guardar el valor en localStorage
    localStorage.setItem('background', selectedBackground);
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
    // Guardar el valor en localStorage
    localStorage.setItem('language', selectedLanguage);
  };

  // Ajuste de clases para texto y fondo del contenedor según la selección
  const containerClass = `${background} p-8 rounded-lg shadow-lg w-full max-w-md mx-auto transition-all duration-300`;
  const textColorClass = background === 'bg-dark' || background === 'bg-terracota' ? 'text-white' : 'text-gray-900';
  const selectBackgroundClass = background === 'bg-dark' || background === 'bg-terracota' ? 'bg-gray-700 text-white' : 'bg-white text-black';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className={`${containerClass} ${textColorClass}`}>
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Background:</label>
          <select
            value={background}
            onChange={handleBackgroundChange}
            className={`w-full p-2 border rounded-lg ${selectBackgroundClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="bg-white" className="bg-white text-black">Light</option>
            <option value="bg-dark" className="bg-gray-700 text-white">Dark</option>
            <option value="bg-terracota" className="bg-red-800 text-white">Terracota</option>
            <option value="bg-khaki" className="bg-yellow-200 text-black">Khaki</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Language:</label>
          <select
            value={language}
            onChange={handleLanguageChange}
            className={`w-full p-2 border rounded-lg ${selectBackgroundClass} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="en" className="bg-white text-black">English</option>
            <option value="es" className="bg-white text-black">Español</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Settings;
