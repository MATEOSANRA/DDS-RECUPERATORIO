import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-success navbar navbar-expand-lg sticky-top container-fluid">
      <div className="container-fluid">
        <Link to={'/proveedores'}>
          <div className="navbar-brand text-light">
            <i className="bi bi-bicycle logo-in-nav"> Proveedores</i>
          </div>
        </Link>
        <Link to={'/proveedores/crear'}>
          <div className="navbar-brand text-light">
            <i className="bi bi-bicycle logo-in-nav"> Crear Proveedor</i>
          </div>
        </Link>
      </div>
    </nav>
  );
};
