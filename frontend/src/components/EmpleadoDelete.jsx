import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Indica al modal dónde se encuentra la raíz de tu aplicación

const EmpleadoDelete = () => {
  const [empleados, setEmpleados] = useState([]);
  const [selectedEmpleado, setSelectedEmpleado] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Llamada a la API para obtener la lista de empleados
    axios
      .get("http://localhost:5000/api/empleados") // Cambia la URL según tu configuración
      .then((response) => {
        setEmpleados(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de empleados", error);
      });
  }, []);

  const handleEmpleadoSelect = (empleado) => {
    setSelectedEmpleado(empleado);
    // No establecer modalIsOpen aquí, lo configuraremos al confirmar la eliminación
  };

  const handleDelete = async () => {
    try {
      if (selectedEmpleado) {
        const response = await axios.delete(
          `http://localhost:5000/api/empleados/${selectedEmpleado._id}`
        );

        if (response.status === 200) {
          setSelectedEmpleado(null); // Limpiar la selección después de la eliminación exitosa
          // Actualizar la lista de empleados después de la eliminación
          const updatedEmpleados = empleados.filter(
            (empleado) => empleado._id !== selectedEmpleado._id
          );
          setEmpleados(updatedEmpleados);
        }
      }
    } catch (error) {
      console.error("Error al eliminar el empleado", error);
    } finally {
      setModalIsOpen(false); // Cerrar el modal después de la eliminación, independientemente del resultado
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Eliminar Empleado</h2>
        <div className="mb-4">
          <label
            htmlFor="empleado"
            className="block text-sm font-medium text-gray-700"
          >
            Selecciona un Empleado:
          </label>
          <select
            id="empleado"
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            onChange={(e) => handleEmpleadoSelect(JSON.parse(e.target.value))}
            required
          >
            <option value="" disabled selected>
              Seleccione un empleado
            </option>
            {empleados.map((empleado) => (
              <option key={empleado._id} value={JSON.stringify(empleado)}>
                {empleado.name} - ID: {empleado._id}
              </option>
            ))}
          </select>
        </div>
        {selectedEmpleado && (
          <div>
            <p className="text-red-500 text-lg font-semibold mb-2">
              ¿Estás seguro de que quieres eliminar a este empleado?
            </p>
            <p className="text-gray-700 mb-4">
              Esta acción no se puede deshacer.
            </p>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
            >
              Eliminar Empleado
            </button>
          </div>
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
          <h2 className="text-center text-green-500 text-2xl font-semibold mb-4">
            Empleado Eliminado con Éxito
          </h2>
          <button
            onClick={() => setModalIsOpen(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default EmpleadoDelete;
