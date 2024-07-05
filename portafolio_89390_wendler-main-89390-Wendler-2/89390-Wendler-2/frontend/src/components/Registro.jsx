import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TablaCanciones from "./TablaCanciones/TablaCanciones.jsx";
import service from "../services/canciones.service.js";
import { useNavigate } from "react-router-dom";

export const Registro = () => {
  const [rows, setRows] = useState([]);
  const [genres, setGenres] = useState([]); // Estado para almacenar los géneros
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
    fetchGenres(); // Cargar géneros cuando el componente se monta
  }, []);

  const onSubmit = async (data) => {
    await service.postCanciones(data);
    await loadData();
  };

  const loadData = async () => {
    const data = await service.getCanciones();
    setRows(data);
  };

  const fetchGenres = async () => {
    try {
      const response = await service.getGenres(); // Llamada al endpoint para obtener géneros
      console.log("Genres fetched from API:", response); // Depuración
      setGenres(response);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  const onFiltrar = async () => {
    const filtro = document.getElementById("filtro").value;
    const data = await service.getCancionesFiltrados(filtro);
    setRows(data);
  };

  const onReturn = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h2>REGISTRO DE CANCIONES</h2>
      <hr />
      {/* Formulario de registro */}
      <div className="d-flex justify-content-center border mb-3 rounded p-3">
        <form onSubmit={handleSubmit(onSubmit)} className="w-100">
          {/* NOMBRE */}
          <div className="form-group">
            <label htmlFor="name">Nombre de Cancion:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              {...register("name", {
                required: "Este campo es requerido",
              })}
            />
            {errors.name && (
              <span className="text-danger small">{errors.name.message}</span>
            )}
          </div>
          {/* ALBUM */}
          <div className="form-group">
            <label htmlFor="album">Nombre del Album</label>
            <input
              type="text"
              className="form-control"
              id="album"
              {...register("album", {
                required: "Este campo es requerido",
              })}
            />
            {errors.album && (
              <span className="text-danger small">{errors.album.message}</span>
            )}
          </div>
          {/* ARTIST NAME */}
          <div className="form-group">
            <label htmlFor="artistName">Nombre del Artista:</label>
            <input
              type="text"
              className="form-control"
              id="artistName"
              {...register("artistName", {
                required: "Este campo es requerido",
              })}
            />
            {errors.artistName && (
              <span className="text-danger small">
                {errors.artistName.message}
              </span>
            )}
          </div>
          {/* COMPOSER */}
          <div className="form-group">
            <label htmlFor="composer">Nombre del Compositor:</label>
            <input
              type="text"
              className="form-control"
              id="composer"
              {...register("composer", {
                required: "Este campo es requerido",
              })}
            />
            {errors.composer && (
              <span className="text-danger small">
                {errors.composer.message}
              </span>
            )}
          </div>
          {/* MILLISECONDS */}
          <div className="form-group">
            <label htmlFor="milliseconds">Milisegundos:</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              id="milliseconds"
              {...register("milliseconds", {
                required: "Este campo es requerido",
              })}
            />
            {errors.milliseconds && (
              <span className="text-danger small">
                {errors.milliseconds.message}
              </span>
            )}
          </div>
          {/* GENRE */}
          <div className="form-group">
            <label htmlFor="genre">Género:</label>
            <select
              className="form-control"
              id="genre"
              {...register("genre", {
                required: "Este campo es requerido",
              })}
            >
              <option value="">Seleccione un género</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
            {errors.genre && (
              <span className="text-danger small">{errors.genre.message}</span>
            )}
          </div>
          {/* MEDIA TYPE */}
          <div className="form-group">
            <label htmlFor="mediaType">Tipo de Codificacion:</label>
            <input
              type="text"
              className="form-control"
              id="mediaType"
              {...register("mediaType", {
                required: "Este campo es requerido",
              })}
            />
            {errors.mediaType && (
              <span className="text-danger small">
                {errors.mediaType.message}
              </span>
            )}
          </div>
          {/* BOTONES */}
          <div className="form-group text-center mt-4">
            <button type="submit" className="btn btn-warning mx-1">
              Registrar
            </button>
            <button type="reset" className="btn btn-secondary mx-1">
              Limpiar
            </button>
          </div>
        </form>
      </div>
      {/* Input de filtrar y botón */}
      <div className="d-flex justify-content-center my-4 border rounded p-3">
        <div className="form-group w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Filtrar"
            id="filtro"
          />
        </div>
        <button className="btn btn-success ml-2 mx-2" onClick={onFiltrar}>
          Filtrar Canciones
        </button>
      </div>
      {/* Tabla de repositorios */}
      <TablaCanciones item={rows} onReturn={onReturn}></TablaCanciones>
    </div>
  );
};
