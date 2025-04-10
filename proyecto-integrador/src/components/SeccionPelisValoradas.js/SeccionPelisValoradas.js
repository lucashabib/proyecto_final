import React from "react";
import PeliValorada from "./PeliValorada";
import './styles.css'

function SeccionPelisValoradas() {

    const pelisValoradas = [
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
        }
    ]


    return(
        <section className="contenedor">

            <h3 className="titulo-seccion">Peliculas con Mayor Valoración</h3>

            <div className="peliculas-valoradas">
                {
                    pelisValoradas.map((elm, idx) => <PeliValorada data={elm} /> )
                }
            </div>


        </section>
    )
}

export default SeccionPelisValoradas