// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext'; // Importa el proveedor de temas
import Navegacion from './Navegacion';
import AppRoutes from './Routes';

const App = () => {
  return (
    <Router>
      <ThemeProvider> {/* Envuelve tu aplicación con el proveedor de temas */}
        <Navegacion />
        <AppRoutes />
      </ThemeProvider>
    </Router>
  );
};

export default App;
