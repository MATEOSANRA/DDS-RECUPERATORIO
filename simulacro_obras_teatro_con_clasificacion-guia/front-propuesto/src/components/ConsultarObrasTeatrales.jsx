import { useEffect, useState } from "react";
import TablaDatos from "./shared/TablaDatos";
import obrasTeatralesService from "../services/obras-teatrales.service";

export default function ConsultarObrasTeatrales() {
    const [rows, setRows] = useState([])

    useEffect(() => {
        console.log('useEffect')
        const getData = async () => {
            const data = await obrasTeatralesService.getObrasTeatrales()
            setRows(data);
        }
        getData();
    }, [])

    const onConsultar = async () => {
        console.log('onConsultar')
        const data = await obrasTeatralesService.getObrasTeatrales()
        setRows(data);
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-auto">
                                    <button type="button"
                                        className="btn btn-primary mb-3"
                                        onClick={onConsultar}>Consultar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <TablaDatos items={rows}>
                    </TablaDatos>
                </div>
            </div>
        </>
    )
}