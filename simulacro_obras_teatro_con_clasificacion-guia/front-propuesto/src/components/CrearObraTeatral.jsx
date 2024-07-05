import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'

import TablaDatos from "./shared/TablaDatos";
import obrasTeatralesService from "../services/obras-teatrales.service";
import clasificacionesService from "../services/clasificaciones.service";

export default function CrearObraTeatral() {
    const [rows, setRows] = useState([])
    const [clasificaciones, setClasificaciones] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm()

    useEffect(() => {
        console.log('useEffect')
        const getData = async () => {
            const data = await obrasTeatralesService.getObrasTeatrales()
            setRows(data);

            const clasificaciones = await clasificacionesService.getClasificaciones()
            setClasificaciones(clasificaciones);
        }
        getData();
    }, [])

    const onSubmit = async (data) => {
        console.log('onSubmit', data) // podria pasar el data directamente porque tiene lasmismas propiedades que el objeto `nuevo`
        const nuevo = {
            director: data.director,
            idClasificacion: parseInt(data.idClasificacion),
            titulo: data.titulo
        };
        await obrasTeatralesService.postObraTeatral(nuevo)
        const obras = await obrasTeatralesService.getObrasTeatrales()
        setRows(obras);
    }

    return (
        <>
            <div className="row">
                <br></br>
                <div className="col-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h5>Registro de Obra</h5>
                        <div className="form-group">
                            <label htmlFor="titulo">Título:</label>
                            <input type="text" className="form-control" id="titulo"  {...register("titulo", { required: 'Este campo es requerido' })} />
                            {errors.titulo && <span className='error'>{errors.titulo.message}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="director">Director:</label>
                            <input type="text" className="form-control" id="director" {...register("director", { required: 'Este campo es requerido' })} />
                            {errors.director && <span className='error'>{errors.director.message}</span>}
                        </div>
                        <div className="form-group" >
                            <label htmlFor="stay">Clasificacion:</label>
                            <select className="form-control" id="idClasificacion" {...register("idClasificacion", { required: 'Este campo es requerido' })}>
                                {clasificaciones.map((c) => (
                                    <option key={c.id} value={c.id}>
                                        {c.titulo}
                                    </option>
                                ))}
                            </select>
                            {errors.idClasificacion && <span className='error'>{errors.idClasificacion.message}</span>}
                        </div>
                        <div className="form-group text-center mt-3">
                            <button type="submit" className="btn btn-primary mx-1">Registrar</button>
                        </div>
                    </form>
                </div>
                <div className="col-12">
                    <br></br>
                    <TablaDatos items={rows}>
                    </TablaDatos>
                </div>
            </div>
        </>
    )
}