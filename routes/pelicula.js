import express from 'express'
import * as servicespelicula from '../services/peliculas.js'

const router = express.Router()

// Obtener películas
router.get('/', async (req, res) => {
    const data = await servicespelicula.obtenerPeliculas()
    res.send(data)
})

// Obtener película por id
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const data = await servicespelicula.obtenerPeliculaId(id)
    res.send(data)
})

// Crear película
router.post('/', async (req, res) => {
    const body = req.body
    const data = await servicespelicula.crearPelicula(body)
    res.send(data)
})

// Actualizar película
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const body = req.body
    const peliculaActualizada = await servicespelicula.actualizarPelicula(id, body)
    res.send(peliculaActualizada)
})

// Eliminar película
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const resultado = await servicespelicula.eliminarPelicula(id)
    res.send(resultado)
})

export default router