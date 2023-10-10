import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListaEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    // Hacer una solicitud GET al servidor para obtener la lista de empleados
    axios.get('/api/empleados')
      .then((response) => {
        setEmpleados(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        Lista de Empleados
      </h2>
      <div className="mb-4">
        <Link
          to="/empleados/crear"
          className="bg-UT-orange text-white hover:bg-yellow-600 px-4 py-2 rounded"
        >
          Crear Empleado
        </Link>
      </div>
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
        <thead>
          <tr className="bg-UT-orange dark:bg-Timberwolf text-white">
            <th className="py-2 px-4">Nombre</th>
            <th className="py-2 px-4">Cargo</th>
            <th className="py-2 px-4">Oficina</th>
            <th className="py-2 px-4">Salario</th>
            <th className="py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado._id} className="border-t border-gray-300 dark:border-gray-600">
              <td className="py-2 px-4">{empleado.name}</td>
              <td className="py-2 px-4">{empleado.position}</td>
              <td className="py-2 px-4">{empleado.office}</td>
              <td className="py-2 px-4">${empleado.salary}</td>
              <td className="py-2 px-4">
                <Link
                  to={`/empleados/editar/${empleado._id}`}
                  className="text-UT-orange hover:underline mr-2"
                >
                  Editar
                </Link>
                <Link
                  to={`/empleados/eliminar/${empleado._id}`}
                  className="text-Carmine hover:underline text-red-700"
                >
                  Eliminar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaEmpleados;
