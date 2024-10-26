import React, { useState, useEffect } from 'react';
import profesorData from '../data/profesorData.json';

const Profile = ({ backgroundColorClass }) => {
  const [profesor, setProfesor] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    setProfesor(profesorData);
    setEditedData({
      nombreCompleto: profesorData.nombreCompleto,
      emailPersonal: profesorData.emailPersonal,
      celular: profesorData.celular,
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    setProfesor((prevProfesor) => ({ ...prevProfesor, ...editedData }));
    setEditMode(false);
  };

  const textColorClass = backgroundColorClass === 'bg-dark' || backgroundColorClass === 'bg-terracota' ? 'text-white' : 'text-black';

  return (
    <div className={`min-h-screen flex flex-col items-center ${textColorClass}`}>
      <h1 className="text-2xl font-bold mb-4 mt-8">Perfil del Profesor</h1>
      
      <img src={profesor.fotoPerfil} alt="Foto de perfil" className="w-24 h-24 rounded-full mb-6" />

      <label className="font-semibold">Nombre Completo:</label>
      {editMode ? (
        <>
          <input
            type="text"
            name="nombreCompleto"
            value={editedData.nombreCompleto}
            onChange={handleInputChange}
            className="border p-1 mb-2 rounded text-center"
          />
          <small className="text-gray-500">Anterior: {profesor.nombreCompleto}</small>
        </>
      ) : (
        <p className="mb-2">{profesor.nombreCompleto}</p>
      )}

      <label className="font-semibold">RUT:</label>
      <p className="mb-2">{profesor.rut}</p>

      <label className="font-semibold">Correo Institucional:</label>
      <p className="mb-2">{profesor.emailInstitucional}</p>

      <label className="font-semibold">Correo Personal:</label>
      {editMode ? (
        <>
          <input
            type="email"
            name="emailPersonal"
            value={editedData.emailPersonal}
            onChange={handleInputChange}
            className="border p-1 mb-2 rounded text-center"
          />
          <small className="text-gray-500">Anterior: {profesor.emailPersonal}</small>
        </>
      ) : (
        <p className="mb-2">{profesor.emailPersonal}</p>
      )}

      <label className="font-semibold">Celular:</label>
      {editMode ? (
        <>
          <input
            type="tel"
            name="celular"
            value={editedData.celular}
            onChange={handleInputChange}
            className="border p-1 mb-2 rounded text-center"
          />
          <small className="text-gray-500">Anterior: {profesor.celular}</small>
        </>
      ) : (
        <p className="mb-2">{profesor.celular}</p>
      )}

      <label className="font-semibold">Cursos Actuales:</label>
      <ul className="list-disc list-inside mb-4">
        {profesor.cursos && profesor.cursos.map((curso, index) => (
          <li key={index} className="text-left">{curso.nombre} - {curso.semestre}</li>
        ))}
      </ul>

      {editMode ? (
        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-1 rounded">Guardar Cambios</button>
      ) : (
        <button onClick={() => setEditMode(true)} className="bg-gray-500 text-white px-4 py-1 rounded">Editar Perfil</button>
      )}
    </div>
  );
};

export default Profile;
