
import './App.css'

//RUTAS
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Regresar from '../../components/crearPublicacion/Regreasar';
import SubirFotos from '../../components/crearPublicacion/subirfotos';
import Izquierda1 from '../../components/crearPublicacion/CarateristicasIzquierda';
import Derecha1 from '../../components/crearPublicacion/CarateristicasDerecha';
import PrecioTotal  from '../../components/crearPublicacion/PrecioTotal'
import Publicar from '../../components/crearPublicacion/Publicar';


function App() {
  return (

    <>
    <Regresar/>
    <SubirFotos/>
    <article class="flex">
      <Izquierda1/>
      <article>
          <Derecha1/>
          <PrecioTotal/>
      </article>
    </article>
    
    <Publicar/>






    <BrowserRouter>

        <nav>
          <ul>
            <li>
              
            </li>
          </ul>
        </nav>  
      


      <Routes>
        
      </Routes>

    </BrowserRouter>




    </>
  );
}

export default App;