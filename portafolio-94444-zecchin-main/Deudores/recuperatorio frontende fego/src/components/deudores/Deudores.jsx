import React, { useState, useEffect } from "react";
import moment from "moment";
import DeudoresListado from "./DeudoresListado";
import DeudoresRegistro from "./DeudoresRegistro";
import { DeudoresService } from "../../services/deudores.service";
//import { articulosFamiliasMockService as articulosfamiliasService } from "../../services/articulosFamilias-mock.service";
import modalDialogService from "../../services/modalDialog.service";



function Deudores() {
    const TituloAccionABMC = {
      A: "(Agregar)",
      L: "(Listado)",
    };
    const [AccionABMC, setAccionABMC] = useState("L");
  
    const [Items, setItems] = useState(null);
    const [Item, setItem] = useState(null); // usado en BuscarporId (Modificar, Consultar)
  
  // cargar Listado al Iniciar la pantalla
    useEffect(() => {
        async function fetchData() {
            await Buscar();
        }
        fetchData();
    }, []);
    
  
    async function Buscar() {
      modalDialogService.BloquearPantalla(true);
      const data = await DeudoresService.Buscar();
      modalDialogService.BloquearPantalla(false);
      setItems(data.Items);
      console.log("Devuelve:", data.Items);
    }
    async function Agregar() {
      setAccionABMC("A");
      setItem({
          IdDeudor: 0,
          ApellidoYNombre: '',
          FechaDeuda: moment(new Date()).format("YYYY-MM-DD"),
          ImporteAdeudado: '',
        });
      //modalDialogService.Alert("preparando el Alta...");
    }
      
    async function Grabar(item) {
      // agregar o modificar
      try
      {
        await DeudoresService.Grabar(item);
      }
      catch (error)
      {
        modalDialogService.Alert(error?.response?.data?.message ?? error.toString())
        return;
      }
      await Buscar();
      Volver();
    
      //setTimeout(() => {
        modalDialogService.Alert(
          "Registro " +
            (AccionABMC === "A" ? "agregado" : "modificado") +
            " correctamente."
        );
      //}, 0);
    }
    
  
    // Volver/Cancelar desde Agregar/Modificar/Consultar
    function Volver() {
      setAccionABMC("L");
    }
  
    return (
      <div>
        <div className="tituloPagina">
          Deudores <small>{TituloAccionABMC[AccionABMC]}</small>
        </div>
  
        {/* Tabla de resutados de busqueda y Paginador */}
        {AccionABMC === "L" && Items?.length > 0 && (
          <DeudoresListado
            {...{
              Items,
                Agregar,
            }}
          />
        )}
  
        {AccionABMC === "L" && Items?.length === 0 && (
          <div className="alert alert-info mensajesAlert">
            <i className="fa fa-exclamation-sign"></i>
            No se encontraron registros...
          </div>
        )}
  
        {/* Formulario de alta/modificacion/consulta */}
        {AccionABMC !== "L" && (
          <DeudoresRegistro
            {...{ AccionABMC,Item, Grabar, Volver }}
          />
        )}
      </div>
    );
  }
  export { Deudores };