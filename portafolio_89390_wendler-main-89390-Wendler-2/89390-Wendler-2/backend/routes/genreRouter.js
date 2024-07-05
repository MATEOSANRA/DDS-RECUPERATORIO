import { Router } from "express";
import getAllGenres from "../services/genreService.js";

const router = Router();

// GET de "/": Obtener todos los géneros únicos
router.get("/", async (req, res) => {
    const result = await getAllGenres();
    return res.json(result);
});

export default router;
