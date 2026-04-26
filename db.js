//Adilene Reyes Salazar

import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({ //Conexión a la base de datos
    dialect: 'sqlite',
    storage: 'pelicula.sqlite'
});

export default sequelize;