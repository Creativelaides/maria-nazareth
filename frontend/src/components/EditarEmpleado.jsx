import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditarEmpleado = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [empleado, setEmpleado] = useState({
    name: '',
    position: '',
    office: '',
    salary: '',
  });

  useEffect(() => {
    // Hacer una solicitud GET al servidor para obtener los detalles del empleado a editar
    axios.get(`/api/empleados/${id}`)
      .then((response) => {
        setEmpleado(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado({ ...empleado, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hacer una solicitud PUT al servidor para actualizar el empleado
    axios.put(`/api/empleados/${id}`, empleado)
      .then(() => {
        history.push('/empleados'); // Redirigir a la lista de empleados después de editar
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
        Editar Empleado
      </h2>
      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 dark:text-gray-400">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={empleado.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="position" className="block text-gray-600 dark:text-gray-400">
            Cargo:
          </label>
          <input
            type="text"
            id="position"
            name="position"
            value={empleado.position}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="office" className="block text-gray-600 dark:text-gray-400">
            Oficina:
          </label>
          <input
            type="text"
            id="office"
            name="office"
            value={empleado.office}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block text-gray-600 dark:text-gray-400">
            Salario:
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={empleado.salary}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-UT-orange text-white hover:bg-yellow-600 px-4 py-2 rounded"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarEmpleado;
