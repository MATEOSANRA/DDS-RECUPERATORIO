import React from 'react';

const Consulta = ({rows, onRegistrar}) => {
  
    console.log(rows)
    const tbody = rows.map(e => 
        <tr key={e.IdDeudor}>
          <td>{e.ApellidoYNombre}</td>
          <td>{e.FechaDeuda}</td>
          <td>{e.ImporteAdeudado}</td>
        </tr>
      );


  return (
    <div className="container mt-5">
      <div className="p-3 mb-2 bg-primary text-white rounded">
        <h2 className="mb-0" style={{ fontFamily: 'monospace' }}>Deudores</h2>
      </div>
      <table className="table table-bordered">
        <thead className="bg-light">
          <tr>
            <th scope="col">Nombre y Apellido</th>
            <th scope="col">Fecha Deduda</th>
            <th scope="col">Importe</th>
          </tr>
        </thead>
        <tbody>
          {tbody}
        </tbody>
      </table>

      <button className="btn btn-secondary mt-3" onClick={onRegistrar}>Regitrar Deudor</button>
      
    </div>

  );
};

export default Consulta;