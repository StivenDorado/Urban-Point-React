import './App.css'
import Footer from '../../components/footers/Footer';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderFotos from '../../components/header/headerFotos';
import SeccionFotos from '../../components/publicacion/SeccionFotos';
import Ofrecer from '../../components/publicacion/OfrecerReserva';
import Info from '../../components/publicacion/Infopublicacion';

function Appubli() {
  return (
    <>
      <h2 className='text-center font-bold text-2xl mt-4 text-black'>Infomación Habitación</h2>
      <HeaderFotos />
      <SeccionFotos />
      <br />
      <article className="Flex">
        <Info />
        <article>
          <Ofrecer />
        </article>
      </article>
      <br />
        <nav>
          <ul>
            <li>{/* Add your navigation items here */}</li>
          </ul>
        </nav>
        <Routes>
          {/* Define your routes here */}
        </Routes>
        <Footer/>
    </>
    
  );
}

export default Appubli;
