import Sequelize from "sequelize";
import model from "./infracciones.js";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './infracciones.db'
})

sequelize.define(
    'Infracciones',
    model.InfraccionAttributes,
    model.InfraccionOptions
)

try {
    await sequelize.sync()
}
catch (err){
    console.log({msg: err.message})
}

export default sequelize
