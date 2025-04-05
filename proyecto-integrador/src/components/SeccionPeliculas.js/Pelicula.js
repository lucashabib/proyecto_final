import React from "react";

function Pelicula(props){
    return(
        <article ClassName='data-pelicula'>
        <div className='carta-contenido'>

            <h4>{props.data.title}</h4>
            <p>{props.data.director}</p>
            <p>{props.data.duracion}</p>
            <p>{props.data.categoria}</p>
        </div>

    </article>
    );
    
}

export default Pelicula;