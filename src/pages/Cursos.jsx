import React, { useState, useEffect } from 'react';
import './Cursos.css';
import data from '../data.json';
import Footer from '../components/PaginaInicio/Footer';
import { Link } from 'react-router-dom';

function Cursos() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    setSubjects(data.courses);
  }, []);

  return (
    <>
      <div className="container">
        <div className="subjects">
          <h2>Asignaturas dictando</h2>
          <table>
            <thead>
              <tr>
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
                  <tr key={index}>
                    <td>{subject.sigla}</td>
                    <td>{subject.asignatura}</td>
                    <td>{subject.creditos}</td>
                    <td>{subject.paralelo}</td>
                    <td>{subject.area}</td>
                    <td>{subject.campus}</td>
                    <td>
                      <Link to={`/Ayudantes/${subject.sigla}`}>Ver Ayudantes</Link>
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
