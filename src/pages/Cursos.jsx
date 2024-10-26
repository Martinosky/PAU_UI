import React, { useState, useEffect } from 'react';
import './Cursos.css';

function Cursos() {
  // Estados para los datos personales y las asignaturas
  const [personalInfo, setPersonalInfo] = useState({
    nombre: "",
    oficina: "",
    correo: "",
    anexo: "",
    departamento: "",
    ultimaActualizacion: ""
  });
  const [subjects, setSubjects] = useState([]);

  // useEffect para simular una llamada a la API en el futuro
  useEffect(() => {
    // Aquí puedes hacer las llamadas a la API real
    // Ejemplo:
    // fetch('/api/personal-info').then(response => response.json()).then(data => setPersonalInfo(data));
    // fetch('/api/subjects').then(response => response.json()).then(data => setSubjects(data));
  }, []);

  return (
    <div className="container">
      <div className="personal-info">
        <h2>Datos personales</h2>
        <div className="info-row">
          <span><strong>Nombre:</strong> {personalInfo.nombre || "No disponible"}</span>
          <span><strong>Oficina:</strong> {personalInfo.oficina || "No disponible"}</span>
        </div>
        <div className="info-row">
          <span><strong>Correo:</strong> {personalInfo.correo || "No disponible"}</span>
          <span><strong>Anexo:</strong> {personalInfo.anexo || "No disponible"}</span>
        </div>
        <div className="info-row">
          <span><strong>Departamento:</strong> {personalInfo.departamento || "No disponible"}</span>
          <span><strong>Última actualización:</strong> {personalInfo.ultimaActualizacion || "No disponible"}</span>
        </div>
        <button>Modificar datos</button>
      </div>

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
            </tr>
          </thead>
          <tbody>
            {subjects.length === 0 ? (
              <tr>
                <td colSpan="6">No hay datos disponibles</td>
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
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cursos;