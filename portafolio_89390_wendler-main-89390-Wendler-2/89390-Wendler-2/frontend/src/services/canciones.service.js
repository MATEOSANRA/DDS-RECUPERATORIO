import axios from 'axios';

// SERVICE (vinculacion backend)

// URL del backend - service (App.js)
const URL_TRACKS = 'http://localhost:3001/api/tracks';
const URL_GENRES = 'http://localhost:3001/api/genres';

// GET (sin filtro)
const getCanciones = async () => {
    const response = await axios.get(URL_TRACKS);
    return response.data;
}

// GET (con filtros)
const getCancionesFiltrados = async (filtro) => {
    const params = new URLSearchParams();

    if (filtro) {
        params.append('filter', filtro);
    }

    const response = await axios.get(`${URL_TRACKS}`, { params });
    return response.data;
}
// GET genres
const getGenres = async () => {
    const response = await axios.get(URL_GENRES);
    return response.data;
}

// POST
const postCanciones = async (cancion) => {
    const response = await axios.post(URL_TRACKS, cancion);
    return response.data;
}


// exports
const service = { getCanciones, getCancionesFiltrados, postCanciones, getGenres };

export default service;
