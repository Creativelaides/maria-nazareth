const mongoose = require("mongoose");

const empleadoSchema = new mongoose.Schema({
  name: String,
  position: String,
  office: String,
  salary: Number,
});
const Empleado = mongoose.model("Empleado", empleadoSchema);
module.exports = Empleado;
