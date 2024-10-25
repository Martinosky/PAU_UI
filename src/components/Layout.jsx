import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from '../pages/Inicio'
import Ayudantes from '../pages/Ayudantes'
import Cursos from '../pages/Cursos'
import Navbar from './Navbar'

const Layout = () => {
    return (
      <BrowserRouter>
          <div className='layout'>
          <Navbar/>
          <div className='layout__page'>
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/Ayudantes' element={<Ayudantes/>} />
              <Route path='/Cursos' element={<Cursos/>} />
            </Routes>
          </div>
          </div>
      </BrowserRouter>
    )
}

export default Layout