import { useState, useEffect } from "react";
import axios from "axios";

const EmpleadoUpdate = () => {
  const [empleados, setEmpleados] = useState([]);
  const [selectedEmpleado, setSelectedEmpleado] = useState(null);
  const [nombre, setNombre] = useState("");
  const [cargo, setCargo] = useState("");
  const [oficina, setOficina] = useState("");
  const [salario, setSalario] = useState("");
  // const [remote, setRemote] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("/empleados")
      .then((response) => {
        setEmpleados(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de empleados", error);
      });
  }, []);

  const handleEmpleadoSelect = (empleado) => {
    setSelectedEmpleado(empleado);
    setNombre(empleado.name);
    setCargo(empleado.position);
    setOficina(empleado.office);
    setSalario(empleado.salary);
    // setRemote(empleado.remote);
    setModalIsOpen(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      if (selectedEmpleado) {
        const response = await axios.put(`/empleados/${selectedEmpleado._id}`, {
          name: nombre,
          position: cargo,
          office: oficina,
          salary: salario,
          // remote: remote,
        });

        if (response.status === 200) {
          setModalIsOpen(true); // Abre el modal de éxito
        }
      }
    } catch (error) {
      console.error("Error al actualizar el empleado", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Actualizar Empleado</h2>
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
            <option value="" disabled>
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
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nuevo Nombre:
              </label>
              <input
                type="text"
                id="nombre"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cargo"
                className="block text-sm font-medium text-gray-700"
              >
                Nuevo Cargo:
              </label>
              <input
                type="text"
                id="cargo"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="oficina"
                className="block text-sm font-medium text-gray-700"
              >
                Nueva Oficina:
              </label>
              <input
                type="text"
                id="oficina"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                value={oficina}
                onChange={(e) => setOficina(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="salario"
                className="block text-sm font-medium text-gray-700"
              >
                Nuevo Salario:
              </label>
              <input
                type="number"
                id="salario"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                value={salario}
                onChange={(e) => setSalario(e.target.value)}
                required
              />
            </div>
            {/* <div className="mb-4">
              <label
                htmlFor="remote"
                className="block text-sm font-medium text-gray-700"
              >
                Trabajo Remoto
              </label>
              <input
                type="checkbox"
                id="remote"
                className="mt-1 p-2 border border-gray-300 rounded-lg"
                checked={remote}
                onChange={(e) => setRemote(e.target.checked)}
              />
            </div> */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
            >
              Actualizar Empleado
            </button>
          </form>
        )}
      </div>
      {modalIsOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
              <h2 className="text-center text-green-500 text-2xl font-semibold mb-4">
                Empleado Actualizado con Éxito
              </h2>
              <button
                onClick={() => setModalIsOpen(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmpleadoUpdate;
