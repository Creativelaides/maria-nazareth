// frontend/src/Routes.jsx
// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaEmpleados from './components/ListaEmpleados';
import CrearEmpleado from './components/CrearEmpleado';
import EditarEmpleado from './components/EditarEmpleado';
import EliminarEmpleado from './components/EliminarEmpleado';
import Inicio from './components/Inicio';
import Navegacion from './components/Navegacion';

const AppRoutes = () => {
   return (
    <BrowserRouter>
    <Navegacion/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/empleados" element={<ListaEmpleados />} />
        <Route path="/empleados/crear" element={<CrearEmpleado />} />
        <Route path="/empleados/editar/:id" element={<EditarEmpleado />} />
        <Route path="/empleados/eliminar/:id" element={<EliminarEmpleado />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AppRoutes;


