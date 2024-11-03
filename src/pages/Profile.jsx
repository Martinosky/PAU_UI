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

  // Definir clases de color según el fondo seleccionado
const textColorClass = 
backgroundColorClass === 'bg-dark' || backgroundColorClass === 'bg-terracota'
  ? 'text-white'
  : backgroundColorClass === 'bg-khaki'
  ? 'text-black'
  : 'text-black';

const containerBackgroundClass = 
backgroundColorClass === 'bg-dark'
  ? 'bg-gray-800'
  : backgroundColorClass === 'bg-terracota'
  ? 'bg-red-900'
  : backgroundColorClass === 'bg-khaki'
  ? 'bg-yellow-200'
  : 'bg-white';

const borderColorClass = 
backgroundColorClass === 'bg-dark'
  ? 'border-gray-400'
  : backgroundColorClass === 'bg-terracota'
  ? 'border-yellow-500'
  : backgroundColorClass === 'bg-khaki'
  ? 'border-gray-500'
  : 'border-gray-300';

  return (
    <div className={`min-h-screen flex justify-center items-center ${backgroundColorClass}`}>
      <div className={`max-w-md w-full shadow-lg rounded-lg p-8 border-4 ${borderColorClass} ${containerBackgroundClass}`}>
        <h1 className={`text-3xl font-bold text-center mb-6 ${textColorClass}`}>Perfil del Profesor</h1>

        <div className="flex justify-center mb-6">
          <img
            src={profesor.fotoPerfil || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'}
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full shadow-md border-2 border-gray-300"
          />
        </div>

        <div className="text-center">
          <div className="mb-4">
            <label className="font-semibold block">Nombre Completo:</label>
            {editMode ? (
              <>
                <input
                  type="text"
                  name="nombreCompleto"
                  value={editedData.nombreCompleto}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full text-center mb-1"
                />
                <small className="text-gray-500">Anterior: {profesor.nombreCompleto}</small>
              </>
            ) : (
              <p className={`${textColorClass}`}>{profesor.nombreCompleto}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="font-semibold block">RUT:</label>
            <p className={`${textColorClass}`}>{profesor.rut}</p>
          </div>

          <div className="mb-4">
            <label className="font-semibold block">Correo Institucional:</label>
            <p className={`${textColorClass}`}>{profesor.emailInstitucional}</p>
          </div>

          <div className="mb-4">
            <label className="font-semibold block">Correo Personal:</label>
            {editMode ? (
              <>
                <input
                  type="email"
                  name="emailPersonal"
                  value={editedData.emailPersonal}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full text-center mb-1"
                />
                <small className="text-gray-500">Anterior: {profesor.emailPersonal}</small>
              </>
            ) : (
              <p className={`${textColorClass}`}>{profesor.emailPersonal}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="font-semibold block">Celular:</label>
            {editMode ? (
              <>
                <input
                  type="tel"
                  name="celular"
                  value={editedData.celular}
                  onChange={handleInputChange}
                  className="border p-2 rounded w-full text-center mb-1"
                />
                <small className="text-gray-500">Anterior: {profesor.celular}</small>
              </>
            ) : (
              <p className={`${textColorClass}`}>{profesor.celular}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="font-semibold block">Cursos Actuales:</label>
            <ul className="list-disc list-inside text-left ml-6">
              {profesor.cursos && profesor.cursos.map((curso, index) => (
                <li key={index} className={`${textColorClass}`}>
                  {curso.nombre} - {curso.semestre}
                </li>
              ))}
            </ul>
          </div>

          {editMode ? (
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-600 focus:outline-none"
            >
              Guardar Cambios
            </button>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-600 focus:outline-none"
            >
              Editar Perfil
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
