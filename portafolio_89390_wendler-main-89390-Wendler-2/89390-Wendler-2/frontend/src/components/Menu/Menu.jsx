import React from "react";
// import router
import { Link } from "react-router-dom";

// MENU (gestion de las rutas)
export const Menu = () => {
  return (
    <div className="container mt-4 border p-5 w-50 rounded">
      <h1 className="text-center mb-4">Parcial II - Turno 2</h1>
      <hr />
      <div className="d-flex justify-content-center">
        {/* LIKS: Agregar, Consultar (vinculan Menu.jsx y App.jsx)*/}
        {/* Agregar */}
        <Link to="/nueva-cancion" className="me-2">
          <button className="btn btn-success px-5">Agregar Cancion</button>
        </Link>
        {/* Consultar */}
        <Link to="/lista-canciones">
          <button className="btn btn-secondary px-5">
            Consultar Canciones
          </button>
        </Link>
      </div>
    </div>
  );
};
