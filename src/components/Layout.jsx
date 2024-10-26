import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicio from '../pages/PaginaInicio';
import Inicio from '../pages/Inicio';
import Ayudantes from '../pages/Ayudantes';
import Cursos from '../pages/Cursos';
import Navbar from './Navbar';
import Settings from '../pages/Settings';
import Profile from '../pages/Profile';

const Layout = ({ backgroundColorClass, setBackgroundColor }) => {
  return (
    <BrowserRouter>
      <div className={`layout ${backgroundColorClass} min-h-screen w-full`}>
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/Inicio" element={<><Navbar /><Inicio /></>} />
          <Route path="/Ayudantes/:courseId" element={<><Navbar /><Ayudantes /></>} /> {/* Ruta dinámica */}
          <Route path="/Cursos" element={<><Navbar /><Cursos /></>} />
          <Route path="/settings" element={<><Navbar /><Settings onBackgroundChange={setBackgroundColor} /></>} />
          <Route path="/profile" element={<><Navbar /><Profile backgroundColorClass={backgroundColorClass} /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Layout;

