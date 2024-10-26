// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-4">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-bold mb-2">Universidad</h3>
            <ul>
              <li>Nuestra Historia</li>
              <li>Política de Privacidad</li>
              {/* Otros elementos */}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Extensión y Cultura</h3>
            <ul>
              <li>Dirección General de Comunicaciones</li>
              {/* Otros elementos */}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Servicios</h3>
            <ul>
              <li>Aula USM</li>
              {/* Otros elementos */}
            </ul>
          </div>
        </div>
        <p className="text-center text-sm">
          © 2024 Universidad Técnica Federico Santa María - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;
