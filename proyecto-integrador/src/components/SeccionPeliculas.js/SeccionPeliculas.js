import React from "react";
import Pelicula from "./Pelicula";

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
        <section className='peliculas-populares'>

            {
                peliculasData.map((elm, idx)=> <Pelicula data={elm}/> )
            }
           


        </section>
    )
}

export default SeccionPeliculas