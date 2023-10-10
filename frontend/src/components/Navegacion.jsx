// import React from 'react';
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (
    <nav className="bg-UT-orange dark:bg-Timberwolf p-4">
      <div className="max-w-2xl mx-auto">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link
              to="/"
              className="text-white dark:text-UT-orange hover:text-light-gray dark:hover:text-dark-gray"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/empleados"
              className="text-white dark:text-UT-orange hover:text-light-gray dark:hover:text-dark-gray"
            >
              Lista de Empleados
            </Link>
          </li>
          <li>
            <Link
              to="/empleados/crear"
              className="text-white dark:text-UT-orange hover:text-light-gray dark:hover:text-dark-gray"
            >
              Crear Empleado
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navegacion;
