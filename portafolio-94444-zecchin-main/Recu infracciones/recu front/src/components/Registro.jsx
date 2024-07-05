import React, { useState } from "react";
import "./styles.css";
import VerRegistro from "./VerRegistro.jsx";
import service from "../services/infracciones.services.js";
import { useForm } from "react-hook-form";

export default function Registro() {
  const [id, setId] = useState(0);
  const [action, setAction] = useState("R");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const idNew = await service.save(data);
    console.log(idNew.Id);
    setId(idNew.Id);
    setAction("V");
  };

  const onVolver = () => {
    setAction("R");
  };

  return (
    <div className="container_app">
      {action === "R" && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5>Registro de infracciones</h5>
          <div className="form-group">
            <label htmlFor="Dni">DNI responsable:</label>
            <input
              type="text"
              className="form-control"
              id="Dni"
              {...register("Dni", { required: "Este campo es requerido" })}
            />
            {errors.Dni && <span className="error">{errors.Dni.message}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="Fecha">Fecha [dd-MM-yyyy]:</label>
            <input
              type="date"
              className="form-control"
              id="Fecha"
              {...register("Fecha", { required: "Este campo es requerido" })}
            />
            {errors.HoraIngreso && (
              <span className="error">{errors.Fecha.message}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="Importe">Importe $:</label>
            <input
              type="number"
              className="form-control"
              id="Importe"
              {...register("Importe")}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Lugar">Lugar:</label>
            <input
              type="text"
              className="form-control"
              id="Lugar"
              {...register("Lugar", { required: "Este campo es requerido" })}
            />
            {errors.HoraIngreso && (
              <span className="error">{errors.Lugar.message}</span>
            )}
          </div>

          <div className="form-group text-center mt-3">
            <button type="submit" className="btn btn-primary mx-1">
              Registrar
            </button>
            <button type="reset" className="btn btn-secondary mx-1">
              Limpiar
            </button>
          </div>
        </form>
      )}
      {action === "V" && <VerRegistro id={id}></VerRegistro>}
    </div>
  );
}
