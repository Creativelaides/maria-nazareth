// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Conectar a la base de datos MongoDB (reemplaza 'tu_url_de_mongodb' por la URL de tu base de datos)
mongoose
  .connect("mongodb://localhost/empleados", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión a MongoDB exitosa");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB", err);
  });

app.use(cors());
app.use(bodyParser.json());

// Rutas de empleados
const empleadosRoutes = require('./empleadoRoutes');
app.use('/api/empleados', empleadosRoutes);

app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});


