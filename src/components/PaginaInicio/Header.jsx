// Header.js
import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white-700 text-white">
      <div className="flex items-center space-x-2">
        <img src="src\assets\Logo-USM.svg" alt="Logo Universidad Técnica Federico Santa María" className="h-10" />
      </div>
      <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded">Acceso</button>
    </header>
  );
}

export default Header;
