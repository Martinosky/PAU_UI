import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Ayudantes.css';
import data from '../data.json';
import Footer from '../components/PaginaInicio/Footer';

function Ayudantes() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);
  const [courseInfo, setCourseInfo] = useState({ campus: '', asignatura: '' });

  useEffect(() => {
    const selectedCourse = data.courses.find(course => course.sigla === courseId);
    if (selectedCourse) {
      setApplicants(selectedCourse.applicants);
      setCourseInfo({
        campus: selectedCourse.campus,
        asignatura: selectedCourse.asignatura
      });
    } else {
      setApplicants([]);
      setCourseInfo({ campus: '', asignatura: 'Curso no encontrado' });
    }
  }, [courseId]);

  return (
    <>
      <div className="container">
        <div className="ayudantes">
          <div className="header">
            <button className="back-btn" onClick={() => navigate('/Cursos')}>
              ← Volver a Cursos
            </button>
            <h2>Ayudantes</h2>
          </div>
          <p>Datos de la asignatura para la selección de ayudantes.</p>
          <div className="info">
            <p><strong>Campus:</strong> {courseInfo.campus}</p>
            <p><strong>Asignatura:</strong> {courseInfo.asignatura}</p>
          </div>
          <div className="buttons">
            <button className="btn">Descargar Excel</button>
            <button className="btn secondary">Ver/Modificar Criterios</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Sel</th>
                <th>Alumno</th>
                <th>Nivel</th>
                <th>PA</th>
                <th># Veces Ayu.</th>
                <th>Tipo</th>
                <th>Paralelo</th>
                <th>Prio. Post.</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {applicants.length === 0 ? (
                <tr>
                  <td colSpan="9">No hay datos disponibles</td>
                </tr>
              ) : (
                applicants.map((applicant, index) => (
                  <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td>{applicant.alumno}</td>
                    <td>{applicant.nivel}</td>
                    <td>{applicant.pa}</td>
                    <td>{applicant.vecesAyu}</td>
                    <td>{applicant.tipo}</td>
                    <td>{applicant.paralelo}</td>
                    <td>{applicant.prioPost}</td>
                    <td className="actions">
                      <button className="icon-btn">✖</button>
                      <button className="icon-btn">📘</button>
                      <button className="icon-btn">💬</button>
                      <button className="icon-btn">🔍</button>
                      <button className="icon-btn">📄</button>
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

export default Ayudantes;

