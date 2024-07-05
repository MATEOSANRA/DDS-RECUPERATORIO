import React, { useState, useEffect } from "react";
import moment from "moment";
import DeudoresListado from "./DeudoresListado";
import DeudoresRegistro from "./DeudoresRegistro";
import { deudoresService } from "../../services/deudores.service";
import modalDialogService from "../../services/modalDialog.service";

console.log("DeudoresListado:", DeudoresListado);
console.log("DeudoresRegistro:", DeudoresRegistro);




function Deudor() {
    const TituloAccionABMC = {
      A: "(Agregar)",
      L: "(Listado)",
    };
  
    const [AccionABMC, setAccionABMC] = useState("L");
    const [Items, setItems] = useState(null);
    const [Item, setItem] = useState(null); // usado en BuscarporId (Modificar, Consultar)
  
    // Cargar Listado al Iniciar la pantalla
    useEffect(() => {
      async function fetchData() {
        await Buscar();
      }
      fetchData();
    }, []);
  
    // Función para buscar deudores
    async function Buscar() {
      modalDialogService.BloquearPantalla(true);
      try {
        const data = await deudoresService.Buscar();
        setItems(data.Items);
        console.log("Devuelve:", data.Items);
      } catch (error) {
        console.error("Error al buscar deudores:", error);
        modalDialogService.Alert("Hubo un error al buscar los deudores.");
      }
      modalDialogService.BloquearPantalla(false);
    }
  
    // Función para preparar el formulario de alta
    async function Agregar() {
      setAccionABMC("A");
      setItem({
        IdDeudor: 0,
        ApellidoYNombre: '',
        FechaDeuda: moment(new Date()).format("YYYY-MM-DD"),
        ImporteAdeudado: '',
      });
    }
  
    // Función para grabar (agregar o modificar) un deudor
    async function Grabar(item) {
      try {
        await deudoresService.Grabar(item);
        await Buscar(); // Volver a cargar la lista después de grabar
        Volver();
        modalDialogService.Alert(
          "Registro " +
          (AccionABMC === "A" ? "agregado" : "modificado") +
          " correctamente."
        );
      } catch (error) {
        modalDialogService.Alert(error?.response?.data?.message ?? error.toString());
      }
    }
  
    // Función para volver a la vista de listado
    function Volver() {
      setAccionABMC("L");
    }
  
    return (
      <div>
    <div className="tituloPagina">
        Deudores <small>{TituloAccionABMC[AccionABMC]}</small>
      </div>
  
        {/* Tabla de resultados de búsqueda y Paginador */}
        {AccionABMC === "L" && Items?.length > 0 && (
          <DeudoresListado
            Items={Items}
            Agregar={Agregar}
          />
        )}
  
        {AccionABMC === "L" && Items?.length === 0 && (
          <div className="alert alert-info">
            No se encontraron registros...
          </div>
        )}
  
        {/* Formulario de alta/modificación/consulta */}
        {AccionABMC !== "L" && (
          <DeudoresRegistro
            AccionABMC={AccionABMC}
            Item={Item}
            Grabar={Grabar}
            Volver={Volver}
          />
        )}
      </div>
    );
  }
  
  export { Deudor };