// Configuramos ORM Sequelize
const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite:" + process.env.base);
const sequelize = new Sequelize("sqlite:" + "./.data/clubes.db");

// ######################### TODO: Agregar HOOKS a los modelos para validar los datos
// DEFINICIÓN DE MODELOS ORM:



// MODELO LIGAS
const Ligas = sequelize.define(
  "ligas",
  {
    IdLiga: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre del autor es requerido",
        },
        len: {
          args: [5, 30],
          msg: "Nombre debe ser tipo caracteres, entre 5 y 30 de longitud",
        },
      },
    },
  },
  {
    // pasar a mayusculas los nombres de las ligas
    hooks: {
      beforeValidate: function (liga, options) {
        if (typeof liga.Nombre === "string") {
          liga.Nombre = liga.Nombre.toUpperCase().trim();
        }
      },
    },
    timestamps: false,
  }
);


// MODELO CLUBES
const Clubes = sequelize.define(
  "clubes",
  {
    IdClub: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre del Club es requerido",
        },
        len: {
          args: [5, 30],
          msg: "Nombre debe ser tipo caracteres, entre 5 y 30 de longitud",
        },
      },
    },
    FechaFundacion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Fecha es requerido",
        }
      }
    },
    IdLiga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Abono: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Abono es requerido",
        },
      },
    },
    Abierto: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Abierto es requerido",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);








// MODELO JUGADORES 
const Jugadores = sequelize.define(
  "jugadores",
  {
    IdJugador: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre del Jugador es requerido",
        },
        len: {
          args: [5, 30],
          msg: "Nombre debe ser tipo caracteres, entre 5 y 30 de longitud",
        },
      },
    },
    FechaNacimiento: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Fecha de Nacimiento es requerida",
        },
      },
    },
    IdPosicion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "La posición del Jugador es requerida",
        },
      },
    },
    Retirado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Retirado es requerido",
        },
      },
    },
    

  },
  {
    timestamps: false,
  }
);




// MODELO POSICIONES
const Posiciones = sequelize.define(
  "posiciones",
  {
    IdPosicion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre del autor es requerido",
        },
        len: {
          args: [5, 30],
          msg: "Nombre debe ser tipo caracteres, entre 5 y 30 de longitud",
        },
      },
    },
  },
  {
    // pasar a mayusculas los nombres de las ligas
    hooks: {
      beforeValidate: function (posicion, options) {
        if (typeof posicion.Nombre === "string") {
          posicion.Nombre = posicion.Nombre.toUpperCase().trim();
        }
      },
    },
    timestamps: false,
  }
);





// MODELO ESTADIOS
const Estadios = sequelize.define(
  "estadios",
  {
    IdEstadio: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre del Club es requerido",
        },
        len: {
          args: [5, 40],
          msg: "Nombre debe ser tipo caracteres, entre 5 y 40 de longitud",
        },
      },
    },
    Capacidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Capacidad es requerido",
        },
      },
    },
    FechaInauguracion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Fecha de Inauguracion es requerido",
        }
      }
    },
    Abono: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Abono es requerido",
        },
      },
    },
    Activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Activo es requerido",
        },
      },
    },
    IdProvincia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "El IdProvincia es requerido"
        }
      }
    },
  },
  {
    timestamps: false,
  }
);



// MODELO PROVINCIAS
const Provincias = sequelize.define(
  "provincias",
  {
    IdProvincia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "El nombre del autor es requerido",
        },
        len: {
          args: [5, 30],
          msg: "Nombre debe ser tipo caracteres, entre 5 y 30 de longitud",
        },
      },
    },
  },
  {
    // pasar a mayusculas los nombres de las ligas
    hooks: {
      beforeValidate: function (provincia, options) {
        if (typeof provincia.Nombre === "string") {
          provincia.Nombre = provincia.Nombre.toUpperCase().trim();
        }
      },
    },
    timestamps: false,
  }
);



module.exports = {
  sequelize,
  Clubes,
  Ligas,
  Jugadores,
  Posiciones,
  Estadios,
  Provincias,
};
