import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../db.js';

const Pelicula = sequelize.define('Pelicula', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idiomas: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duracion: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

async function init() {
    sequelize.sync(); // Sincronizar los modelos a las tablas
}

init();

export { sequelize, Pelicula };