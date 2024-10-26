// InterestContent.js
import React from 'react';

function InterestContent() {
  const items = [
    { title: "Calendario Académico", image: "src/assets/calendario-academico.jpg" },
    { title: "Transparencia USM", image: "src/assets/transparencia-usm.jpg" },
    { title: "Revisa nuestros concursos académicos y docentes disponibles", image: "src/assets/banner-concursos.jpg" },
    { title: "Transparencia USM", image: "src/assets/banner-manual-normas.jpg" },
  ];

  return (
    <div className="py-8 px-4">
      <h2 className="text-xl font-bold text-center mb-6">Contenido de interés</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md text-center w-40">
            <img src={item.image} alt={item.title} className="w-full h-20 object-cover mb-2 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterestContent;
