// frontend/src/routes/Routes.jsx
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// Asegúrate de importar tus componentes
import EmpleadoList from "../components/EmpleadoList";
import EmpleadoCreate from "../components/EmpleadoCreate";
import EmpleadoUpdate from "../components/EmpleadoUpdate";
import EmpleadoDelete from "../components/EmpleadoDelete";

const AppRoutes = () => {
  return (
    <Router>
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link to="/" className="text-white">
              Lista de Empleados
            </Link>
          </li>
          <li>
            <Link to="/crear" className="text-white">
              Crear Empleado
            </Link>
          </li>
          <li>
            <Link to="/actualizar" className="text-white">
              Actualizar Empleado
            </Link>
          </li>
          <li>
            <Link to="/eliminar" className="text-white">
              Eliminar Empleado
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<EmpleadoList />} />
        <Route path="/crear" element={<EmpleadoCreate />} />
        <Route path="/actualizar" element={<EmpleadoUpdate />} />
        <Route path="/eliminar" element={<EmpleadoDelete />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
