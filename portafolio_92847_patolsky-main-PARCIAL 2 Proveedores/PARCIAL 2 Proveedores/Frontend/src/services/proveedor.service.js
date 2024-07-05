import httpService from "./http.service";

const urlResource = "http://localhost:4000/api/proveedores";

async function Buscar(RazonSocial, Pagina) {
  const resp = await httpService.get(urlResource, {
    params: { RazonSocial, Pagina },
  });
  return resp.data;
}

async function BuscarPorId(item) {
  const resp = await httpService.get(`${urlResource}/${item.IdProveedor}`);
  return resp.data;
}

async function ActivarDesactivar(item) {
  await httpService.delete(`${urlResource}/${item.IdProveedor}`);
}

async function Grabar(item) {
  if (item.IdProveedor === 0) {
    await httpService.post(urlResource, item);
  } else {
    await httpService.put(`${urlResource}/${item.IdProveedor}`, item);
  }
}

export const proveedorService = {
  Buscar,
  BuscarPorId,
  ActivarDesactivar,
  Grabar,
};
