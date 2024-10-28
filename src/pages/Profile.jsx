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

  const textColorClass =
    backgroundColorClass === 'bg-dark' || backgroundColorClass === 'bg-terracota'
      ? 'text-white'
      : 'text-black';

  return (
    <div className={`min-h-screen flex justify-center items-center ${backgroundColorClass}`}>
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className={`text-3xl font-bold text-center mb-6 ${textColorClass}`}>Perfil del Profesor</h1>

        <div className="flex justify-center mb-6">
          <img
            src={profesor.fotoPerfil || 'src/assets/defaultProfile.jpg'}
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full shadow-md"
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
              <p className="text-gray-700">{profesor.nombreCompleto}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="font-semibold block">RUT:</label>
            <p className="text-gray-700">{profesor.rut}</p>
          </div>

          <div className="mb-4">
            <label className="font-semibold block">Correo Institucional:</label>
            <p className="text-gray-700">{profesor.emailInstitucional}</p>
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
              <p className="text-gray-700">{profesor.emailPersonal}</p>
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
              <p className="text-gray-700">{profesor.celular}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="font-semibold block">Cursos Actuales:</label>
            <ul className="list-disc list-inside text-left ml-6 text-gray-700">
              {profesor.cursos && profesor.cursos.map((curso, index) => (
                <li key={index}>
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
