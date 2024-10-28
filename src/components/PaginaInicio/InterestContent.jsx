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
      <h2 className="text-3xl font-bold text-center mb-6">Contenido de interés</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-2xl w-64 h-48 shadow-3xl transition-shadow duration-500 transform hover:shadow-lg hover:-translate-y-0.5"> {/* Sombra al levantarse */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500" // Transición suave para la imagen
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default InterestContent;
