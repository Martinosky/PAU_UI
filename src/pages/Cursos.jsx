import React, { useState, useEffect } from 'react';
import './Cursos.css';
import data from '../data.json';
import Footer from '../components/PaginaInicio/Footer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Cursos = ({ backgroundColorClass }) => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate(); // Hook para navegar programáticamente

  useEffect(() => {
    setSubjects(data.courses);
  }, []);

  // Clases de color dinámicas según el fondo seleccionado
  const textColorClass = 
    backgroundColorClass === 'bg-dark' || backgroundColorClass === 'bg-terracota'
      ? 'text-white'
      : 'text-black';

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

  const handleRowClick = (sigla) => {
    navigate(`/Ayudantes/${sigla}`); // Navega a la página de Ayudantes
  };

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
                  <tr
                    key={index}
                    className={`hover:bg-gray-700 cursor-pointer ${tableCellClass}`}
                    onClick={() => handleRowClick(subject.sigla)} // Clickeable en toda la fila
                  >
                    <td>{subject.sigla}</td>
                    <td>{subject.asignatura}</td>
                    <td>{subject.creditos}</td>
                    <td>{subject.paralelo}</td>
                    <td>{subject.area}</td>
                    <td>{subject.campus}</td>
                    <td>
                      <Link 
                        to={`/Ayudantes/${subject.sigla}`} 
                        className={`font-semibold ${textColorClass} highlight-link`}
                      >
                        Ver Ayudantes
                      </Link>
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
};

export default Cursos;
