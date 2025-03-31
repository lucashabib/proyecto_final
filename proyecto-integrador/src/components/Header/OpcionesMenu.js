import React from "react";

function OpcionesMenu(props){
    return(
        <ul className="menu">
        {
            props.opciones.map((elm, idx) => (
                <li key={idx}>
                    <a href={elm.path}>{elm.nombre}</a>
                </li>
            ))
        }
    </ul>
    );
}

export default OpcionesMenu