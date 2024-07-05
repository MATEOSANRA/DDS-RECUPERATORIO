import React, { useState, useEffect } from "react";
import service from "../services/infracciones.services.js";
import Registro from "./Registro.jsx";

function VerRegistro({ id }) {
  const [infraccion, setInfraccion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchInfraccion() {
      try {
        const data = await service.getById(id);
        setInfraccion(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (id !== 0) {
      fetchInfraccion();
    }
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="card border-success mb-3">
      <div className="card-header bg-transparent border-success">
        Infraccion registrada!
      </div>
      <div className="card-body text-success">
        <h5>Datos de Infraccione: #{infraccion.Id}</h5>
        <p className="card-title">DNI: {infraccion.Dni}</p>
        <p className="card-text">Fecha: {infraccion.Fecha}</p>
        <p className="card-text">Importe: {infraccion.Importe}</p>
        <p className="card-text">Lugar: {infraccion.Lugar}</p>
      </div>
      <div className="card-footer bg-transparent border-success">
        <button onClick={() => window.location.reload()}>
          Registrar otra infracción
        </button>
      </div>
    </div>
  );
}

export default VerRegistro;
