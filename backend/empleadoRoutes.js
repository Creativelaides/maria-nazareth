const express = require("express");
const router = express.Router();
const Empleado = require("./empleadoSchema");

// Ruta para obtener todos los empleados
router.get("/", async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los empleados" });
  }
});

// Ruta para crear un nuevo empleado
router.post("/", async (req, res) => {
  const { name, position, office, salary } = req.body;

  try {
    const nuevoEmpleado = new Empleado({ name, position, office, salary });
    await nuevoEmpleado.save();
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear un nuevo empleado" });
  }
});

// Ruta para actualizar un empleado por su ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, position, office, salary } = req.body;

  try {
    const empleado = await Empleado.findByIdAndUpdate(
      id,
      { name, position, office, salary },
      { new: true }
    );

    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }

    res.json(empleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el empleado" });
  }
});

// Ruta para eliminar un empleado por su ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const empleado = await Empleado.findByIdAndRemove(id);

    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }

    res.json({ message: "Empleado eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el empleado" });
  }
});

module.exports = router;
