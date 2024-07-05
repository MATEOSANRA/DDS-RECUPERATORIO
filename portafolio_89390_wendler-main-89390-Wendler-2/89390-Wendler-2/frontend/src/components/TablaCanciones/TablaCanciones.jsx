// CANCIONES A HORAS:SEGUNDOS
function conversion(milliseconds) {
  let minutes = Math.floor(milliseconds / 60000);
  let seconds = ((milliseconds % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}


// TABLA
export default function TablaCanciones({ item, onReturn }) {
  return (
    <div>
      <h5 className="text-center">LISTADO DE CANCIONES</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Album</th>
            <th scope="col">Artista</th>
            <th scope="col">Genero</th>
            <th scope="col">Duracion</th>
          </tr>
        </thead>
        <tbody>
          {item &&
            item.map((cancion, index) => {
              return (
                <tr key={cancion.trackId}>
                  <th scope="row">{index + 1}</th>
                  <td>{cancion.name}</td>
                  <td>{cancion.album}</td>
                  <td>{cancion.artistName}</td>
                  <td>{cancion.genre}</td>
                  <td>{conversion(cancion.milliseconds)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary px-5" onClick={onReturn}>
          Volver
        </button>
      </div>
    </div>
  );
}
