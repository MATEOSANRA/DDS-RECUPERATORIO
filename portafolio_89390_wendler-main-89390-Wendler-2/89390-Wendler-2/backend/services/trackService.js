import { Op } from "sequelize";
import Track from "../models/tracks.js";

// Función para obtener las primeras 15 canciones ordenadas por album y nombre
export const getTracks = async () => {
    try {
        const tracks = await Track.findAll({
            order: [["album", "ASC"], ["name", "ASC"]],
        });
        return tracks;
    }
    catch (error) {
        return { error: error.message };
    }
};

// Función para obtener una canción por ID
export const getTrackById = async (id) => {
    try {
        const track = await Track.findByPk(id);
        if (!track) {
            return { error: "Track not found" };
        }
        return track;
    }
    catch (error) {
        return { error: error.message };
    }
};

// Función para obtener canciones por filtro en name, album, artistName o composer
export const getTracksByFilter = async (filterText, genre) => {
    try {
        const filterConditions = [];

        if (filterText) {
            filterConditions.push({
                [Op.or]: [
                    { name: { [Op.like]: `%${filterText}%` } },
                    { album: { [Op.like]: `%${filterText}%` } },
                    { artistName: { [Op.like]: `%${filterText}%` } },
                    { composer: { [Op.like]: `%${filterText}%` } },
                ],
            });
        }

        if (genre) {
            filterConditions.push({ genre });
        }

        // Verificamos que al menos un filtro esté presente
        if (filterConditions.length === 0) {
            return { error: "At least one filter parameter must be provided." };
        }

        // Consulta a la base de datos con las condiciones de filtro
        const tracks = await Track.findAll({
            where: {
                [Op.and]: filterConditions,
            },
            order: [["album", "ASC"], ["name", "ASC"]],
        });

        return tracks;
    }
    catch (error) {
        return { error: error.message };
    }
};

// Función para crear una nueva Canción
export const createTrack = async (data) => {
    try {
        const { name, album, artistName, composer, milliseconds, genre, mediaType } = data;

        // Verificación de unicidad de name y album
        const existingTrack = await Track.findOne({
            where: {
                name,
                album
            }
        });
        if (existingTrack) {
            return { error: "Track with the same name and album already exists" };
        }
        if (milliseconds < 10000) {
            return { error: "Track with less duration than the minimum required" };
        }

        const newTrack = await Track.create({
            name,
            album,
            artistName,
            composer,
            milliseconds,
            genre,
            mediaType,
        });
        return newTrack;
    }
    catch (error) {
        return { error: error.message };
    }
};

// Función para actualizar una Canción por ID
export const updateTrack = async (id, data) => {
    try {
        const { artistName, composer, genre } = data;
        const track = await Track.findByPk(id);
        if (!track) {
            return { error: "Track not found" };
        }

        // Actualizamos solo los campos permitidos
        if (artistName !== undefined) track.artistName = artistName;
        if (composer !== undefined) track.composer = composer;
        if (genre !== undefined) track.genre = genre;

        await track.save();
        return track;
    }
    catch (error) {
        return { error: error.message };
    }
};
