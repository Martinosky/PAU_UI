import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function Header() {
  const navigate = useNavigate(); // Hook para navegación

  return (
    <header className="flex justify-between items-center p-4 bg-white-700 text-white">
      <div className="flex items-center space-x-2">
        <img src="src/assets/Logo-USM.svg" alt="Logo Universidad Técnica Federico Santa María" className="h-10" />
      </div>
      <button 
        onClick={() => navigate('/Inicio')} // Navega a la página de Inicio al hacer clic
        className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded"
      >
        Acceso
      </button>
    </header>
  );
}

export default Header;
