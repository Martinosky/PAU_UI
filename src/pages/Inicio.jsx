import React from 'react';
import Calendar from '../components/PaginaInicio/Calendar';
import InterestContent from '../components/PaginaInicio/InterestContent';
import Footer from '../components/PaginaInicio/Footer';

const Inicio = ({ backgroundColorClass }) => {
    return (
        <>
          <Calendar backgroundColorClass={backgroundColorClass} />
          <InterestContent backgroundColorClass={backgroundColorClass} />
          <Footer />
        </>
    );
}

export default Inicio;
