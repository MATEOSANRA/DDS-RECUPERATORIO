
import axios from "axios";

const baseUrl = `http://localhost:3001/api`;


const getObrasTeatrales = async () => {
    const response = await axios.get(`${baseUrl}/obras-teatrales`)
    return response.data
}

const postObraTeatral = async (obraTeatral) => {
    console.log(obraTeatral);
    const response = await axios.post(`${baseUrl}/obras-teatrales`,
        obraTeatral,
        {
            headers: { "content-type": 'application/json' }
        }
    )
    return response.data
}

const obrasTeatralesService = {
    getObrasTeatrales,
    postObraTeatral
}

export default obrasTeatralesService;

