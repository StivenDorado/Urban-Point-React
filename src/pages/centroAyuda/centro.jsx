import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';

const CentroDeAyuda = () => {
  return (
    <div>
    <div className="grid grid-cols-3 gap-8 p-8 text-black">
      <div>
        <h2 className="text-lg font-semibold mb-4 text-center">Búsqueda y reservación</h2>
        <ul className="space-y-2 text-center">
          <li><Link className="text-gray-600 hover:underline" to="/ConsejoBusqueda">Consejos de Búsqueda</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/ReservarAlojamiento">Reservar alojamientos</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/ReservarCitas">Reservar citas</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/EnviarMensajes">Enviar mensajes</Link></li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4 text-center">Seguridad y accesibilidad</h2>
        <ul className="space-y-2 text-center">
          <li><Link className="text-gray-600 hover:underline" to="/TemasSeguridad">Temas de seguridad</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/ProblemasReportes">Cómo reportar problemas</Link></li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4 text-center">Acerca de Urban Point</h2>
        <ul className="space-y-2 text-center">
          <li><Link className="text-gray-600 hover:underline" to="/QuienesSomos">¿Quiénes somos?</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/Funcionamiento">¿Cómo funciona UrbanPoint?</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/Reglas">Políticas y reglas de comunidad</Link></li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4 text-center">Tu cuenta</h2>
        <ul className="space-y-2 text-center">
          <li><Link className="text-gray-600 hover:underline" to="/administrar-tu-cuenta">Administrar tu cuenta</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/identificacion-o-verificacion">Identificación o Verificación</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/nivel-de-seguridad">Nivel de Seguridad</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/resenas">Reseñas</Link></li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4 text-center">Tus reservaciones</h2>
        <ul className="space-y-2 text-center">
          <li><Link className="text-gray-600 hover:underline" to="/Estado">Estado de tu reserva</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/Cancelaciones">Cancelaciones</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/Problemas">Solución de Problemas</Link></li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4 text-center">Ofertas y contra ofertas</h2>
        <ul className="space-y-2 text-center">
          <li><Link className="text-gray-600 hover:underline" to="/ComoFunciona">¿Cómo funciona?</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/Implementado">¿Por qué fue Implementado?</Link></li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4 text-center">Políticas y reglas</h2>
        <ul className="space-y-2 text-center">
          <li><Link className="text-gray-600 hover:underline" to="/Politicas">Políticas de Uso</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/Incumplimiento">Incumplimiento de reglas</Link></li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4 text-center">Cancelaciones</h2>
        <ul className="space-y-2 text-center">
          <li><Link className="text-gray-600 hover:underline" to="/cancelaciones">Cancelaciones</Link></li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4 text-center">Pagos y cobros</h2>
        <ul className="space-y-2 text-center">
          <li><Link className="text-gray-600 hover:underline" to="/precios-y-tarifas">Precios y tarifas</Link></li>
          <li><Link className="text-gray-600 hover:underline" to="/facturas-y-recibos">Facturas y recibos</Link></li>
        </ul>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default CentroDeAyuda;
