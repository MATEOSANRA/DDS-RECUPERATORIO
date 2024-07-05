import { Sequelize } from "sequelize";
import Track from "../models/tracks.js";

// Función para obtener todos los géneros únicos
export default async function getAllGenres() {
    try {
        const genres = await Track.findAll({
            attributes: [
                [Sequelize.fn("DISTINCT", Sequelize.col("genre")), "genre"]
            ],
            order: [["genre", "ASC"]], // Ordenamos alfabéticamente los géneros
        });
        // Mapear los géneros a una lista de strings
        return genres.map((g) => g.genre);
    }
    catch (error) {
        return { error: error.message };
    }
}
