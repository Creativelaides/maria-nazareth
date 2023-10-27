import { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Indica al modal dónde se encuentra la raíz de tu aplicación

const EmpleadoCreate = () => {
  const [nombre, setNombre] = useState("");
  const [cargo, setCargo] = useState("");
  const [oficina, setOficina] = useState("");
  const [salario, setSalario] = useState("");
  // const [remote, setRemote] = useState(false); // Inicializar con false
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/empleados", {
        name: nombre,
        position: cargo,
        office: oficina,
        salary: salario,
        // remote: remote, // Establecer el valor de 'remote' correctamente
      });

      if (response.status === 201) {
        setModalIsOpen(true);
      }
    } catch (error) {
      console.error("Error al crear el empleado", error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-700"
            >
              Nombre
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
              Cargo
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
              Oficina
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
              Salario
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
          {/* Campo 'remote' */}
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
              checked={remote} // Utiliza el estado 'remote' para el valor checked
              onChange={(e) => setRemote(e.target.checked)} // Actualiza 'remote' con el valor del checkbox
            />
          </div> */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
          >
            Crear Empleado
          </button>
        </form>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="overlay"
      >
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
          <h2 className="text-center text-green-500 text-2xl font-semibold mb-4">
            Empleado Creado con Éxito
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

export default EmpleadoCreate;
