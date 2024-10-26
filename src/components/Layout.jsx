import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from '../pages/Inicio';
import Ayudantes from '../pages/Ayudantes';
import Cursos from '../pages/Cursos';
import Navbar from './Navbar';
import Settings from '../pages/Settings';
import Profile from '../pages/Profile'; // Nueva página de perfil

const Layout = ({ backgroundColorClass, setBackgroundColor }) => { // Recibe las props
  return (
    <BrowserRouter>
      <div className={`layout ${backgroundColorClass}`}> {/* Usa el estado pasado */}
        <Navbar />
        <div className="layout__page">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Ayudantes" element={<Ayudantes />} />
            <Route path="/Cursos" element={<Cursos />} />
            <Route path="/settings" element={<Settings onBackgroundChange={setBackgroundColor} />} /> {/* Pasa setBackgroundColor */}
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
