import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-success navbar navbar-expand-lg sticky-top container-fluid">
      <div className="container-fluid">
        <Link to={'/obras-teatrales'}>
          <div className="navbar-brand text-light">
            <i className="bi bi-bicycle logo-in-nav"> Obras Teatrales</i>
          </div>
        </Link>
        <Link to={'/obras-teatrales/crear'}>
          <div className="navbar-brand text-light">
            <i className="bi bi-bicycle logo-in-nav"> Crear Obra Teatral</i>
          </div>
        </Link>
      </div>
    </nav>
  );
};
