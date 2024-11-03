import React, { useState, useEffect } from 'react';
import './Cursos.css';
import data from '../data.json';
import Footer from '../components/PaginaInicio/Footer';
import { Link } from 'react-router-dom';

const Cursos = ({ backgroundColorClass }) => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    setSubjects(data.courses);
  }, []);

  // Definir clases de color según el fondo seleccionado
  const textColorClass = 
    backgroundColorClass === 'bg-dark' || backgroundColorClass === 'bg-terracota'
      ? 'text-white'
      : 'text-black'; // Asegúrate de que el texto sea negro si no es oscuro

  const tableHeaderClass = 
    backgroundColorClass === 'bg-dark'
      ? 'bg-gray-800 text-white'
      : backgroundColorClass === 'bg-terracota'
      ? 'bg-red-900 text-white'
      : backgroundColorClass === 'bg-khaki'
      ? 'bg-yellow-200 text-black'
      : 'bg-gray-100 text-black';

  const tableCellClass = 
    backgroundColorClass === 'bg-dark'
      ? 'bg-gray-700'
      : backgroundColorClass === 'bg-terracota'
      ? 'bg-red-800'
      : backgroundColorClass === 'bg-khaki'
      ? 'bg-yellow-300'
      : 'bg-white';

  return (
    <>
      <div className={`container ${backgroundColorClass}`}>
        <div className="subjects">
          <h2 className={textColorClass}>Asignaturas dictando</h2>
          <table>
            <thead>
              <tr className={tableHeaderClass}>
                <th>Sigla</th>
                <th>Asignatura</th>
                <th>Créditos</th>
                <th>Paralelo</th>
                <th>Área</th>
                <th>Campus</th>
                <th>Ayudantes</th>
              </tr>
            </thead>
            <tbody>
              {subjects.length === 0 ? (
                <tr>
                  <td colSpan="7">No hay datos disponibles</td>
                </tr>
              ) : (
                subjects.map((subject, index) => (
                  <tr key={index} className="hover:bg-gray-700">
                    <td className={tableCellClass}>{subject.sigla}</td>
                    <td className={tableCellClass}>{subject.asignatura}</td>
                    <td className={tableCellClass}>{subject.creditos}</td>
                    <td className={tableCellClass}>{subject.paralelo}</td>
                    <td className={tableCellClass}>{subject.area}</td>
                    <td className={tableCellClass}>{subject.campus}</td>
                    <td className={tableCellClass}>
                      <Link to={`/Ayudantes/${subject.sigla}`} className={`font-semibold ${textColorClass} highlight-link`}>Ver Ayudantes</Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cursos;
