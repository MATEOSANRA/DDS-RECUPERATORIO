export default function TablaDatos({ items }) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Director</th>
                                <th scope="col">Calificacion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items && items.map((item, index) => {
                                return (
                                    <>
                                        <tr key={`item-${index}`}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.titulo}</td>
                                            <td>{item.director}</td>
                                            <td>{item.clasificacion.titulo}</td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}