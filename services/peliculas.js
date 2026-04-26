import { Pelicula } from '../models/pelicula.js'

// Obtener las películas
export const obtenerPeliculas = async () => {
    return await Pelicula.findAll()
}

// Obtener película por ID
export const obtenerPeliculaId = async (id) => {
    return await Pelicula.findByPk(id)
}

// Crear película
export const crearPelicula = async (body) => {
    return await Pelicula.create(body)
}

// Actualizar película
export const actualizarPelicula = async (id, body) => {
    const pelicula = await Pelicula.findByPk(id)
    await pelicula.update(body)
    return pelicula
}

// Eliminar película
export const eliminarPelicula = async (id) => {
    const pelicula = await Pelicula.findByPk(id)
    await pelicula.destroy()
    return { mensaje: 'Eliminado :(' }
}