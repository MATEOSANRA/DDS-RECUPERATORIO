import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from './components/navbar/Navbar'
import ConsultarObrasTeatrales from './components/ConsultarObrasTeatrales';
import CrearObraTeatral from './components/CrearObraTeatral';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<ConsultarObrasTeatrales />} />
          <Route path="/obras-teatrales" element={<ConsultarObrasTeatrales />} />
          <Route path="/obras-teatrales/crear" element={<CrearObraTeatral />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
