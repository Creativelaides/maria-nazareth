import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EliminarEmpleado = () => {
  const { id } = useParams();
  const history = useNavigate ();
  const [empleado, setEmpleado] = useState(null);

  useEffect(() => {
    // Hacer una solicitud GET al servidor para obtener los detalles del empleado a eliminar
    axios.get(`/api/empleados/${id}`)
      .then((response) => {
        setEmpleado(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleEliminar = () => {
    // Hacer una solicitud DELETE al servidor para eliminar el empleado
    axios.delete(`/api/empleados/${id}`)
      .then(() => {
        history.push('/empleados'); // Redirigir a la lista de empleados después de eliminar
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!empleado) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        ¿Estás seguro de que deseas eliminar a {empleado.name}?
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Esta acción eliminará permanentemente al empleado y no se puede deshacer.
      </p>
      <button
        onClick={handleEliminar}
        className="bg-Carmine text-white hover:bg-red-700 px-4 py-2 rounded"
      >
        Eliminar Empleado
      </button>
    </div>
  );
};

export default EliminarEmpleado;
