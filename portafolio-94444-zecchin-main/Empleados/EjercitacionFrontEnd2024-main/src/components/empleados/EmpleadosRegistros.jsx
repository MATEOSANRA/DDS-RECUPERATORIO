import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function EmpleadosRegistro({
  AccionABMC,
  Item,
  Grabar,
  Volver,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm({ values: Item });

  const onSubmit = (data) => {
    Grabar(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-fluid">

        <fieldset disabled={AccionABMC === "C"}>

          {/* campo nombre */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="ApellidoYNombre">
                Apellido y Nombre<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                {...register("ApellidoYNombre", {
                  required: { value: true, message: "ApellidoYNombre es requerido" },
                  minLength: {
                    value: 5,
                    message: "Nombre debe tener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 60,
                    message: "Apellido y Nombre debe tener como máximo 60 caracteres",
                  },
                })}
                autoFocus
                className={
                  "form-control " + (errors?.ApellidoYNombre ? "is-invalid" : "")
                }
              />
              {errors?.ApellidoYNombre && touchedFields.ApellidoYNombre && (
                <div className="invalid-feedback">
                  {errors?.ApellidoYNombre?.message}
                </div>
              )}
            </div>
          </div>
        {/* campo FechaNacimiento */}
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="FechaNacimiento">
                Fecha Nacimiento<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="date"
                {...register("FechaNacimiento", {
                  required: { value: true, message: "Fecha Nacimiento es requerido" }
                })}
                className={
                  "form-control " + (errors?.FechaNacimiento ? "is-invalid" : "")
                }
              />
              <div className="invalid-feedback">
                {errors?.FechaNaccimiento?.message}
              </div>
            </div>
        
          </div>
          {/* campo Dni */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Dni">
                Dni<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="Number"
                {...register("Dni", {
                  required: {
                    value: true,
                    message: "Dni es requerido",
                  },
                })}
                className={
                  "form-control" + (errors?.Dni ? " is-invalid" : "")
                }
              />
              <div className="invalid-feedback">
                {errors?.Dni?.message}
              </div>
            </div>
          </div>

          {/* campo Suspendido */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Suspendido">
                Suspendido<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <select
                name="Suspendido"
                {...register("Suspendido", {
                  required: { value: true, message: "Suspendido es requerido" },
                })}
                className={
                  "form-control" + (errors?.Suspendido ? " is-invalid" : "")
                }
                disabled
              >
                <option value={null}></option>
                <option value={false}>False</option>
                <option value={true}>True</option>
              </select>
              <div className="invalid-feedback">{errors?.Suspendido?.message}</div>
            </div>
          </div>
          
        </fieldset>

        {/* Botones Grabar, Cancelar/Volver' */}
        <hr />
        <div className="row justify-content-center">
          <div className="col text-center botones">
            {AccionABMC !== "C" && (
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-check"></i> Grabar
              </button>
            )}
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => Volver()}
            >
              <i className="fa fa-undo"></i>
              {AccionABMC === "C" ? " Volver" : " Cancelar"}
            </button>
          </div>
        </div>

        {/* texto: Revisar los datos ingresados... */}
        {!isValid && isSubmitted && (
          <div className="row alert alert-danger mensajesAlert">
            <i className="fa fa-exclamation-sign"></i>
            Revisar los datos ingresados...
          </div>
        )}

      </div>
    </form>
  );
}

