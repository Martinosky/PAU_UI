import React from 'react'
import Header from '../components/PaginaInicio/Header'
import Banner from '../components/PaginaInicio/Banner'
import Calendar from '../components/PaginaInicio/Calendar'
import InterestContent from '../components/PaginaInicio/InterestContent'
import Footer from '../components/PaginaInicio/Footer'

const PaginaInicio = () => {
    return (
        <>
          <Header/>
          <Banner/>
          <Calendar/>
          <InterestContent/>
          <Footer/>
        </>
    )
}

export default PaginaInicio