import React from "react";

function Pelicula(props){
    return(
        <article className='data-pelicula'>

                  
        <div className='carta-contenido'>
            <img src="/poster.jpg" alt="poster" className="moviePoster" /> {/*Este poster es solo de relleno hasta que importemos el api */}
            <h4>{props.data.title}</h4>
            <p>{props.data.director}</p>
            <p>{props.data.duracion}</p>
            <p>{props.data.categoria}</p>
            
        </div>

    </article>
    );
    
}

export default Pelicula;