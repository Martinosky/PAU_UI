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
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [priorities, setPriorities] = useState({});
  const [selectionOrder, setSelectionOrder] = useState(1); // Contador global

  useEffect(() => {
    const selectedCourse = data.courses.find(course => course.sigla === courseId);
    if (selectedCourse) {
      setApplicants(selectedCourse.applicants);
      setCourseInfo({
        campus: selectedCourse.campus,
        asignatura: selectedCourse.asignatura
      });
      const initialPriorities = selectedCourse.applicants.reduce((acc, _, index) => {
        acc[index] = null;
        return acc;
      }, {});
      setPriorities(initialPriorities);
    } else {
      setApplicants([]);
      setCourseInfo({ campus: '', asignatura: 'Curso no encontrado' });
    }
  }, [courseId]);

  const openModal = (applicant) => {
    setSelectedApplicant(applicant);
  };

  const closeModal = () => {
    setSelectedApplicant(null);
  };

  const handleDeleteApplicant = (index) => {
    const updatedApplicants = applicants.filter((_, i) => i !== index);
    setApplicants(updatedApplicants);
    const updatedPriorities = { ...priorities };
    delete updatedPriorities[index];
    setPriorities(updatedPriorities);
  };

  const handleSelectApplicant = (index) => {
    setPriorities((prevPriorities) => {
      const currentPriority = prevPriorities[index];

      if (currentPriority !== null) {
        // Si el ayudante ya estaba seleccionado, se deselecciona
        const updatedPriorities = { ...prevPriorities };

        // Restar 1 a la prioridad de todos los ayudantes seleccionados con prioridad mayor al actual
        for (const key in updatedPriorities) {
          if (updatedPriorities[key] > currentPriority) {
            updatedPriorities[key] -= 1;
          }
        }

        updatedPriorities[index] = null;
        setSelectionOrder(selectionOrder - 1); // Disminuir el contador global
        return updatedPriorities;
      } else {
        // Si el ayudante no está seleccionado, se asigna la prioridad actual y se incrementa el contador global
        return { ...prevPriorities, [index]: selectionOrder };
      }
    });

    if (priorities[index] === null) {
      setSelectionOrder(selectionOrder + 1); // Incrementar el contador global solo si se selecciona
    }
  };

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
                <th>Prioridad Selección</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {applicants.length === 0 ? (
                <tr>
                  <td colSpan="10">No hay datos disponibles</td>
                </tr>
              ) : (
                applicants.map((applicant, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        checked={priorities[index] !== null}
                        onChange={() => handleSelectApplicant(index)}
                      />
                    </td>
                    <td>{applicant.alumno}</td>
                    <td>{applicant.nivel}</td>
                    <td>{applicant.pa}</td>
                    <td>{applicant.vecesAyu}</td>
                    <td>{applicant.tipo}</td>
                    <td>{applicant.paralelo}</td>
                    <td>{applicant.prioPost}</td>
                    <td>{priorities[index] || ''}</td>
                    <td className="actions">
                      <button className="icon-btn" onClick={() => handleDeleteApplicant(index)}>✖</button>
                      <button className="icon-btn" onClick={() => openModal(applicant)}>🔍</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />

      {/* Modal */}
      {selectedApplicant && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedApplicant.alumno}</h3>
            <div className="modal-section">
              <h4>Datos académicos</h4>
              <p><strong>Carrera:</strong> {selectedApplicant.carrera}</p>
              <p><strong>Campus:</strong> {courseInfo.campus}</p>
              <p><strong>Año ingreso:</strong> {selectedApplicant.añoIngreso}</p>
              <p><strong>Rol:</strong> {selectedApplicant.rol}</p>
            </div>
            <hr />
            <div className="modal-section">
              <h4>Datos personales</h4>
              <p><strong>Celular:</strong> {selectedApplicant.celular}</p>
              <p><strong>Dirección:</strong> {selectedApplicant.direccion}</p>
              <p><strong>Correo:</strong> {selectedApplicant.correo}</p>
            </div>
            <button className="close-btn" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Ayudantes;


