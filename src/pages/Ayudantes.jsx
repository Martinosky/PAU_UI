import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Ayudantes.css';
import data from '../data.json';
import Footer from '../components/PaginaInicio/Footer';

function Ayudantes({ backgroundColorClass }) {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [applicants, setApplicants] = useState([]);
  const [courseInfo, setCourseInfo] = useState({ campus: '', asignatura: '' });
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [priorities, setPriorities] = useState({});
  const [selectionOrder, setSelectionOrder] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
const [hasChanges, setHasChanges] = useState(false);

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

  const openModal = (applicant) => setSelectedApplicant(applicant);
  const closeModal = () => setSelectedApplicant(null);

  const handleSelectApplicant = (index) => {
    setPriorities((prevPriorities) => {
      const currentPriority = prevPriorities[index];

      if (currentPriority !== null) {
        const updatedPriorities = { ...prevPriorities };
        for (const key in updatedPriorities) {
          if (updatedPriorities[key] > currentPriority) {
            updatedPriorities[key] -= 1;
          }
        }
        updatedPriorities[index] = null;
        setSelectionOrder(selectionOrder - 1);
        return updatedPriorities;
      } else {
        return { ...prevPriorities, [index]: selectionOrder };
      }
    });

    if (priorities[index] === null) {
      setSelectionOrder(selectionOrder + 1);
    }
  };

  const handleConfirmSelection = () => {
    setShowConfirmPopup(true);
    setTimeout(() => setShowConfirmPopup(false), 3000);
  };

  const handleDeleteApplicant = (index) => {
    setDeleteIndex(index);
    setShowDeletePopup(true);
  };

  const confirmDeleteApplicant = () => {
    setApplicants((prevApplicants) =>
      prevApplicants.filter((_, i) => i !== deleteIndex)
    );
    setShowDeletePopup(false);
    setDeleteIndex(null);
  };

  const downloadExcel = () => {
    // Aquí se implementará la lógica para descargar datos en formato Excel
    alert('Funcionalidad de descarga pendiente.');
  };

  const viewCriteria = () => {
    alert('Aquí se mostrarán los criterios para la selección de ayudantes.');
  };

  // Clases dinámicas
  const textColorClass =
    backgroundColorClass === 'bg-dark' || backgroundColorClass === 'bg-terracota'
      ? 'text-white'
      : 'text-black';
  const modalContentClass =
    backgroundColorClass === 'bg-dark'
      ? 'bg-gray-800 text-white'
      : backgroundColorClass === 'bg-terracota'
      ? 'bg-red-900 text-white'
      : backgroundColorClass === 'bg-khaki'
      ? 'bg-yellow-200 text-black'
      : 'bg-white text-black';

  return (
    <>
      <div className={`container ${backgroundColorClass} ${textColorClass}`}>
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
          <div className="actions">
            <button className="btn" onClick={downloadExcel}>Descargar Excel</button>
            <button className="btn" onClick={viewCriteria}>Ver Criterios</button>
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
                    <td>
                      <button className="icon-btn" onClick={() => openModal(applicant)}>🔍</button>
                      <button className="icon-btn delete-btn" onClick={() => handleDeleteApplicant(index)}>❌</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <button className="btn" onClick={handleConfirmSelection}>Confirmar Ayudantes</button>
        </div>
      </div>
      <Footer />

      {/* Pop-ups */}
      {showConfirmPopup && (
        <div className="modal-overlay">
          <div className={`modal-content ${modalContentClass}`}>
            <h3>¡Ayudantes seleccionados correctamente!</h3>
          </div>
        </div>
      )}

{showDeletePopup && (
  <div className="modal-overlay" onClick={() => setShowDeletePopup(false)}>
    <div
      className={`modal-content ${modalContentClass}`}
      onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic dentro
    >
      <h3>¿Estás seguro de que deseas eliminar este ayudante?</h3>
      <div className="modal-footer">
        <button className="confirm-btn" onClick={confirmDeleteApplicant}>
          ✅ Confirmar
        </button>
        <button
          className="cancel-btn centered-close-btn"
          onClick={() => setShowDeletePopup(false)}
        >
          ✖ Cancelar
        </button>
      </div>
    </div>
  </div>
)}

      {/* Modal de información del alumno */}
{selectedApplicant && (
  <div className="modal-overlay" onClick={closeModal}>
    <div
      className={`modal-content ${modalContentClass}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-header">
        <h3>{selectedApplicant.alumno}</h3>
      </div>
      <div className="modal-body">
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
      </div>
      <div className="modal-footer">
        <button className="close-btn centered-close-btn" onClick={closeModal}>
          ✖ Cerrar
        </button>

        </div>
      </div>
    </div>
)}

      
    </>
  );
}

export default Ayudantes;
