import express from "express";
import service from "./src/services/infracciones.service.js";

import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/infracciones", async (req, res) => {
  try {
    const data = await service.mostrar();
    res.json(data);
  } catch (error) {
    console.error("Error al obtener las infracciones:", error);
    res.status(500).json({ mensaje: "Ha ocurrido un error interno." });
  }
});

app.get("/infracciones/:id", async (req, res) => {
  try {
    const infraccionId = req.params.id;
    const infraccion = await service.getById(infraccionId);
    if (!infraccion) {
      return res.status(404).json({ mensaje: "Infracción no encontrada" });
    }
    res.json(infraccion);
  } catch (error) {
    console.error("Error al obtener la infracción por ID:", error);
    res.status(500).json({ mensaje: "Ha ocurrido un error interno" });
  }
});

app.post("/infracciones", async (req, res) => {
  try {
    const infId = await service.create(req.body);
    return res.json(infId);
  } catch (e) {
    console.log(e);
    res.status(500).send({ mensaje: "Ha ocurrido un error interno." });
  }
});

app.listen(3001, () => {
  console.log("Servidor iniciado en el puerto 3001");
});
