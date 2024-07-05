import httpService from "./http.service";
import axios from "axios";
const urlResource = "http://localhost:4000/api/deudores";

// mas adelante podemos usar un archivo de configuracion para el urlResource


async function Buscar() {
    const resp = await axios.get(urlResource);
    return resp.data;
  }



async function Grabar(item) {
  if (item.IdDeudor === 0) {
    await httpService.post(urlResource, item);
  } else {
    await httpService.put(urlResource + "/" + item.IdDeudor, item);
  }
}


export const DeudoresService = {
  Buscar,Grabar
};
