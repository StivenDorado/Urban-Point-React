
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/headerlg';
import SearchBar from './components/barraBusqueda/busqueda';
import Landing from './pages/home/Home';
import Iniciosesion from './pages/inicioSesion/iniciosesion';
import Registrarse from './pages/inicioSesion/registrarse';
import { AppRouter } from './router/AppRouter';

function App() {
  return <AppRouter/>;
}

export default App;
