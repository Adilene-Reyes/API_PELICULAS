import express from 'express'
import fs from 'fs' // Crear el archivo de texto (txt) para el logger
import path from 'path' // Para utilizar path_join unir textos con \
import { sequelize } from './models/pelicula.js'
import router from './routes/pelicula.js'
const port = 3000

const logger = (req, res, next) => {
    const log = (`${new Date().toLocaleString()} - ${req.method} en ${req.url} \n`);
    const ruta = path.join ( import.meta.dirname, 'log.txt' );
    fs.writeFileSync( ruta, log, { flag: 'a' } ) // Crear el archivo log.txt
    next(); // ¡Crucial para que la petición no se quede colgada!
};

const validarApiKey = (req, res, next) => {
    const apiKey = req.query.key;
    if (apiKey === '12345') {
        next();
    } else {
        res.status(403).send('Acceso Prohibido: API Key inválida');
    }
};

const app = express()
app.use(express.json())
app.use ( logger )

app.listen ( port, () => {
    console.log ( 'Servicio iniciado. ')
})

//http://localhost:3000/?key=12345
app.get ( '/', validarApiKey, ( req, res ) => {
    res.send ( ' API - OK ')
})

app.use('/peliculas', validarApiKey, router)
