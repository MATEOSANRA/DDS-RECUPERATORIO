import React from 'react';
import moment from 'moment';

export default function ProveedorListado({ Items, Consultar, Modificar, ActivarDesactivar, Imprimir, Pagina, RegistrosTotal, Paginas, Buscar }) {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-sm table-bordered table-striped">
        <thead>
          <tr>
            <th className="text-center">Razon social</th>
            <th className="text-center">Telefono</th>
            <th className="text-center">Fecha de alta</th>
          </tr>
        </thead>
        <tbody>
          {Items &&
            Items.map((item) => (
              <tr key={item.IdProveedor}>
                <td>{item.RazonSocial}</td>
                <td className="text-end">{item.Telefono}</td>
                <td className="text-end">{moment(item.FechaAlta).format('DD/MM/YYYY')}</td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Paginador */}
      <div className="paginador">
        <div className="row">
          <div className="col">
            <span className="pyBadge">Registros: {RegistrosTotal}</span>
          </div>
          <div className="col text-center">
            Pagina: &nbsp;
            <select
              value={Pagina}
              onChange={(e) => {
                Buscar(e.target.value);
              }}
            >
              {Paginas?.map((x) => (
                <option value={x} key={x}>
                  {x}
                </option>
              ))}
            </select>
            &nbsp; de {Paginas?.length}
          </div>
        </div>
      </div>
    </div>
  );
}
