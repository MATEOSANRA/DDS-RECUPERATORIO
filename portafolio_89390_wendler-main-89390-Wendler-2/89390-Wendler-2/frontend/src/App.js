import { BrowserRouter, Routes, Route } from "react-router-dom";
// imports componentes 
import { Menu } from "./components/Menu/Menu";
import { Registro } from "./components/Registro";
import { Consulta } from "./components/Consulta";

function App() {
  return (
    <div className="m-4">
      <BrowserRouter>
      {/* RUTAS (referencia a los componentes) */}
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/nueva-cancion" element={<Registro />} />
          <Route path="/lista-canciones" element={<Consulta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
