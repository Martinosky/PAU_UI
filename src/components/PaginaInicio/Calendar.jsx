// Calendar.js
import React from 'react';

function Calendar({ backgroundColorClass }) {
  const events = [
    { title: "VACANTES", start: "24/06/2024", end: "30/08/2024" },
    { title: "POSTULACIONES 1er LLAMADO", start: "08/07/2024", end: "18/08/2024" },
    // Otros eventos...
  ];

  // Definir clases de color según el background
  const containerColorClass =
    backgroundColorClass === 'bg-dark' ? 'bg-gray-800' :
    backgroundColorClass === 'bg-terracota' ? 'bg-terracota-light' : // Define esta clase en tu CSS
    'bg-gray-100';

  const textColorClass =
    backgroundColorClass === 'bg-dark' || backgroundColorClass === 'bg-terracota'
      ? 'text-white'
      : 'text-black';

  return (
    <div className={`py-8 px-4 ${backgroundColorClass}`}>
      <h2 className={`text-3xl font-bold text-center mb-6 ${textColorClass}`}>
        Calendario proceso Ayudantías Docentes
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div key={index} className={`p-4 rounded shadow-md ${containerColorClass}`}>
            <h3 className={`font-semibold text-xl mb-2 ${textColorClass}`}>{event.title}</h3>
            <p className={`text-xl ${textColorClass}`}>Inicio: {event.start}</p>
            <p className={`text-xl ${textColorClass}`}>Término: {event.end}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
