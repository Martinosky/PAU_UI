import React, { useState } from 'react';

const Settings = ({ onBackgroundChange, onLanguageChange }) => {
  const [background, setBackground] = useState('bg-white'); // Cambia a bg-white para que coincida con la clase CSS
  const [language, setLanguage] = useState('en');

  const handleBackgroundChange = (e) => {
    const selectedBackground = e.target.value;
    setBackground(selectedBackground);
    onBackgroundChange(selectedBackground); // Llamada a la función pasada como prop
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage); // Llamada a la función pasada como prop
  };

  // Clase CSS para el color de texto en función del fondo
  const textColorClass = background === 'bg-dark' || background === 'bg-terracota' ? 'text-white' : 'text-black';

  return (
    <div className={`p-4 ${textColorClass}`}> {/* Aplica clase de texto */}
      <h1 className="text-xl font-bold">Settings</h1>
      <div className="mt-4">
        <label className="block">Background:</label>
        <select value={background} onChange={handleBackgroundChange} className={`mt-2 p-2 border rounded ${textColorClass} bg-transparent`}>
          <option value="bg-white">Light</option>
          <option value="bg-dark">Dark</option>
          <option value="bg-terracota">Terracota</option>
          <option value="bg-khaki">Khaki</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block">Language:</label>
        <select value={language} onChange={handleLanguageChange} className={`mt-2 p-2 border rounded ${textColorClass} bg-transparent`}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
