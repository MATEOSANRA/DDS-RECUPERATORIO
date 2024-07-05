import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ProveedorRegistro({
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

          {/* campo Razon Social */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="ApellidoYNombre">
                Razon Social<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                {...register("RazonSocial", {
                  required: { value: true, message: "Razon Social es requerido" },
                  minLength: {
                    value: 4,
                    message: "Razon Social debe tener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 55,
                    message: "Razon Social debe tener como máximo 55 caracteres",
                  },
                })}
                autoFocus
                className={
                  "form-control " + (errors?.RazonSocial ? "is-invalid" : "")
                }
              />
              {errors?.RazonSocial && touchedFields.RazonSocial && (
                <div className="invalid-feedback">
                  {errors?.RazonSocial?.message}
                </div>
              )}
            </div>
          </div>

          {/* campo Telefono */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Telefono">
                Telefono<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                {...register("Telefono", {
                  required: { value: true, message: "Telefono es requerido" },
                  pattern: {
                    value: /^\d{9}$/,
                    message: "Telefono debe tener exactamente 9 dígitos",
                  },
                })}
                className={
                  "form-control " + (errors?.Telefono ? "is-invalid" : "")
                }
              />
              <div className="invalid-feedback">{errors?.Telefono?.message}</div>
            </div>
          </div>

          {/* campo Fecha Alta */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="FechaAlta">
                Fecha Alta<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="date"
                {...register("FechaAlta", {
                  required: { value: true, message: "Fecha Alta es requerido" }
                })}
                className={
                  "form-control " + (errors?.FechaAlta ? "is-invalid" : "")
                }
              />
              <div className="invalid-feedback">
                {errors?.FechaAlta?.message}
              </div>
            </div>
          </div>
        </fieldset>

        {/* Botones Registrar, Volver */}
        <hr />
        <div className="row justify-content-center">
          <div className="col text-center botones">
            {AccionABMC !== "C" && (
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-check"></i> Registrar
              </button>
            )}
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => Volver()}
            >
              <i className="fa fa-undo"></i>
              {AccionABMC === "C" ? " Volver" : " Volver"}
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
