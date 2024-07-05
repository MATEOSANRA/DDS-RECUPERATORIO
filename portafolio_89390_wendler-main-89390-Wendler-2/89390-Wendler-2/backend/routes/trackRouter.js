import { Router } from "express";
import * as svcTracks from "../services/trackService.js";

const router = Router();

// GET de "/": Obtener canciones con o sin filtros
router.get("/", async (req, res) => {
    if (Object.keys(req.query).length === 0) {
        // Si no hay filtros, obtener las primeras 15 canciones
        const result = await svcTracks.getTracks();
        return res.json(result);
    }
    // Si hay al menos un filtro, obtener canciones por filtro
    const { filterText, genre } = req.query;

    const result = await svcTracks.getTracksByFilter(filterText, genre);
    return res.json(result);
});

// GET de "/:id": Obtener una canción por ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await svcTracks.getTrackById(id);
    return res.json(result);
});

// POST de "/": Crear una nueva canción
router.post("/", async (req, res) => {
    const result = await svcTracks.createTrack(req.body);
    return res.json(result);
});

// PATCH de "/:id": Actualizar una canción existente
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await svcTracks.updateTrack(id, req.body);
    return res.json(result);
});

export default router;
