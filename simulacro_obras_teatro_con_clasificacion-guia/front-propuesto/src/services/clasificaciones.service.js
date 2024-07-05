
import axios from "axios";

const baseUrl = `http://localhost:3001/api`;


const getClasificaciones = async () => {
    const response = await axios.get(`${baseUrl}/clasificaciones`)
    return response.data
}

const clasificacionesService = {
    getClasificaciones
}

export default clasificacionesService;

