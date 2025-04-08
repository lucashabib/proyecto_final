import React from "react";
import Pelicula from "./Pelicula";
import './styles.css'

function SeccionPeliculas(){
    const peliculasData = [
        {
            poster: '',
            title: 'Peli 1',
            director: 'Director',
            duracion: 'Duracion',
            categoria:'Categoria'
        },
        {
            poster: '',
            title: 'Peli 2',
            director: 'Director',
            duracion: 'Duracion',
            categoria:'Categoria'
        },
        {
            poster: '',
            title: 'Peli 3',
            director: 'Director',
            duracion: 'Duracion',
            categoria:'Categoria'
        },
        {
            poster: '',
            title: 'Peli 4',
            director: 'Director',
            duracion: 'Duracion',
            categoria:'Categoria'
        },
    ]

    return (
        <section className='contenedor'>

            <h3 className="titulo-seccion">Peliculas en Cartelera</h3>

            <div className='peliculas-populares'>
            {
                peliculasData.map((elm, idx)=> <Pelicula data={elm}/> )
            }
            </div>

        </section>
    )
}

export default SeccionPeliculas