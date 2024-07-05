import httpService from "./http.service";
const urlResource = "http://localhost:4000/api/deudores";



async function Buscar(ApellidoYNombre) {
  const resp = await httpService.get(urlResource, {
    params: { ApellidoYNombre},
  });
  return resp.data;
}

async function Grabar(item) {
  if (item.IdDeudor === 0) {
    await httpService.post(urlResource, item);
  } else {
    await httpService.put(urlResource + "/" + item.IdDeudor, item);
  }
}
export const deudoresService = {
  Buscar,BuscarPorId,Grabar
};