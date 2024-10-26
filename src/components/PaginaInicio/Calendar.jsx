// Calendar.js
import React from 'react';

function Calendar() {
  const events = [
    { title: "VACANTES", start: "24/06/2024", end: "30/08/2024" },
    { title: "POSTULACIONES 1er LLAMADO", start: "08/07/2024", end: "18/08/2024" },
    // Otros eventos...
  ];

  return (
    <div className="py-8 px-4">
      <h2 className="text-xl font-bold text-center mb-6">Calendario proceso Ayudantías Docentes</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded shadow-md">
            <h3 className="font-semibold text-blue-800 mb-2">{event.title}</h3>
            <p>Inicio: {event.start}</p>
            <p>Término: {event.end}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
