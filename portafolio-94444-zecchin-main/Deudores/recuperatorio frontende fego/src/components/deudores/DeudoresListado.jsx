import React from "react";
import moment from "moment";

export default function DeudoresListado({
    Items,
    Agregar,
}) {
return (
    <div className="table-responsive">
        <table className="table table-hover table-sm table-bordered table-striped">
            <thead>
                <tr>
                    <th className="text-center">Apellido y nombre</th>
                    <th className="text-center">Fecha Deuda</th>
                    <th className="text-center">Importe</th>
                </tr>
            </thead>
            <tbody>
                {Items &&
                    Items.map((Item) => (
                        <tr key={Item.IdDeudor}>
                            <td>{Item.ApellidoYNombre}</td>
                            <td className="text-center">
                                {moment(Item.FechaDeuda).format("DD/MM/YYYY")}
                            </td>
                            <td className="text-center">{Item.ImporteAdeudado}</td>
                        </tr>
                    ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3">
                        <div className="text-end">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => Agregar()}
                            >
                                <i className="fa fa-plus"> </i> Agregar
                            </button>
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
);
}
