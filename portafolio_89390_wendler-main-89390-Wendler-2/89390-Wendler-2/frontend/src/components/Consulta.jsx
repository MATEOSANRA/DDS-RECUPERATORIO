import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../services/canciones.service.js";
import TablaCanciones from "./TablaCanciones/TablaCanciones.jsx";

// CONSULTAR
export const Consulta = () => {
  const [canciones, setCanciones] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerCanciones = async () => {
      const data = await service.getCanciones();
      setCanciones(data);
    };
    obtenerCanciones();
  }, []);

  const onReturn = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h2>CONSULTAR</h2>
      <hr />
      <TablaCanciones
        item={canciones}
        onReturn={onReturn}
      ></TablaCanciones>
    </div>
  );
};
