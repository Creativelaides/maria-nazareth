import { useState, useEffect } from "react";
import axios from "axios";

function EmpleadoList() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de empleados
    axios
      .get("http://localhost:5000/api/empleados") // Cambia la URL según tu configuración
      .then((response) => {
        const empleadosTransformados = response.data.map((empleado) => {
          return {
            _id: empleado._id,
            name: empleado.name,
            position: empleado.position,
            office: empleado.office,
            salary: empleado.salary,
            remote: empleado.remote, // Añade el campo 'remote' si es necesario
          };
        });
        setEmpleados(empleadosTransformados);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de empleados", error);
      });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
          {/* Agrega tu logo aquí desde la carpeta "assets" */}
          <img
            src="./src/assets/sena_logo.png" // Cambia la ruta de acuerdo a la ubicación de tu logo
            alt="Logo"
            className="w-16 h-16 mx-auto mt-4 mb-4"
          />

          <table className="min-w-full divide-y divide-primary">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-secondary text-left text-s leading-4 font-medium text-slate-800 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 bg-secondary text-left text-s leading-4 font-medium text-slate-800 uppercase tracking-wider">
                  Nombre
                </th>
                <th className="px-6 py-3 bg-secondary text-left text-s leading-4 font-medium text-slate-800 uppercase tracking-wider">
                  Cargo
                </th>
                <th className="px-6 py-3 bg-secondary text-left text-s leading-4 font-medium text-slate-800 uppercase tracking-wider">
                  Oficina
                </th>
                <th className="px-6 py-3 bg-secondary text-left text-s leading-4 font-medium text-slate-800 uppercase tracking-wider">
                  Salario
                </th>
                <th className="px-6 py-3 bg-secondary text-left text-s leading-4 font-medium text-slate-800 uppercase tracking-wider">
                  Remoto
                </th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((empleado) => (
                <tr key={empleado._id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {empleado._id}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {empleado.name}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {empleado.position}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {empleado.office}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    ${empleado.salary}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {empleado.remote ? "Sí" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmpleadoList;
