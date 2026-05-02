// Adilene Reyes Salazar 2-3

import express from 'express'
import jwt from 'jsonwebtoken'
import fs from 'fs' // Crear el archivo de texto (txt) para el logger
import path from 'path' // Para utilizar path_join unir textos con \
import { sequelize } from './models/pelicula.js'
import router from './routes/pelicula.js'
import { validarToken } from './middleware/token.js'

const port = 3000
const SECRET_KEY = 'mi_clave_secreta_super_segura'

const app = express()
app.use(express.json())

const logger = (req, res, next) => {
    const log = (`${new Date().toLocaleString()} - ${req.method} en ${req.url} \n`);
    const ruta = path.join ( import.meta.dirname, 'log.txt' );
    fs.writeFileSync( ruta, log, { flag: 'a' } ) // Crear el archivo log.txt
    next(); // ¡Crucial para que la petición no se quede colgada!
};

app.use ( logger )

// Login
app.post ('/login', (req, res) => {
    const { username, password } = req.body;
    // Simulación de validación de usuario
    if (username === 'adilene' && password === '1234') {
        const user = { id: 1, name: 'Adilene' };
        // Generar JWT (expira en 1 hora)
        const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
        res.json({ message: 'Login exitoso', token });
    } else {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
});

app.listen ( port, () => {
    console.log ( 'Servicio iniciado. ')
})

//http://localhost:3000/?key=12345
app.get ( '/', ( req, res ) => {
    res.send ( ' API - OK ')
})

app.use('/peliculas', validarToken, router)
