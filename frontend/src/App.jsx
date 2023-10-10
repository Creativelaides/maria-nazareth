import axios from "axios";
import AppRoutes from "./routes/Routes";

// Configura la base de la URL de Axios
axios.defaults.baseURL = "http://localhost:5000/api"; // Cambia la URL según tu configuración

function App() {
  return (
    <AppRoutes/>
  );
}

export default App;
