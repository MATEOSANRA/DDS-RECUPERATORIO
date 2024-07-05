import sequelize from "../models/database.js";

const create = async (infraccion) => {
  try {
    const resultado = await sequelize.models.Infracciones.create({
      Dni: infraccion.Dni,
      Fecha: infraccion.Fecha,
      Importe: infraccion.Importe,
      Lugar: infraccion.Lugar,
    });

    console.log(resultado);

    return {
      Id: resultado.null,
    };
  } catch (error) {
    throw new Error(`Error al crear la infracción: ${error.message}`);
  }
};

const mostrar = async () => {
  try {
    const data = await sequelize.models.Infracciones.findAll();
    return data; // Devuelve los datos obtenidos de la base de datos
  } catch (error) {
    console.error("Error al consultar las infracciones:", error);
    throw error; // Propaga el error para que sea manejado en la capa superior
  }
};

const getById = async (id) => {
  try {
    const infraccion = await sequelize.models.Infracciones.findByPk(id);
    return infraccion; // Devuelve la infracción encontrada
  } catch (error) {
    console.error("Error al buscar la infracción por ID:", error);
    throw error;
  }
};

export default {
  mostrar,
  getById,
  create,
};
