import { DataTypes } from "sequelize";

const InfraccionAttributes = {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    Dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El DNI del ingresante es necesario"
            }
        }
    },
    Fecha: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La hora de ingreso es necesaria"
            }
        }
    },
    Importe: {
        type: DataTypes.FLOAT
    },
    Lugar: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El chequeo de ingreso con notebook es necesario"
            }
        }
    }
}

const InfraccionOptions = {    
    timestamps: false
}

export default {
    InfraccionAttributes,
    InfraccionOptions
}
