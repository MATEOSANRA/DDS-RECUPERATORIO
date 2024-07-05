import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <a className="navbar-brand">
                <i className="fa fa-industry"></i>
                &nbsp;<i>Pymes 2024</i>
            </a>
            <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/inicio" className="nav-link">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/articulosfamilias" className="nav-link">
              Artículos Familias
            </NavLink>
          </li>
          <li className="nav-item">	
            <NavLink className="nav-link" to="/articulos">
              Articulos
            </NavLink>
          </li>

        </ul>
        </div>
        </nav>
    );
}
export { Menu };
