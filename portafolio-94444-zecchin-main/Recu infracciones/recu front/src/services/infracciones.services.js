const URL = "http://localhost:3001/infracciones";

async function save(inf) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inf),
  };

  const res = await fetch(URL, requestOptions);
  const data = await res.json();
  return data;
}

async function getById(id) {
  const res = await fetch(`${URL}/${id}`);
  if (!res.ok) {
    throw new Error(`Error al obtener la infracción con ID ${id}`);
  }
  const data = await res.json();
  return data;
}
export default { getById, save };
