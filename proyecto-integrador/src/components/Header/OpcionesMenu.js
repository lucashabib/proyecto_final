import React from "react";
import {Link} from 'react-router-dom';

function OpcionesMenu(props){
    return(
        <ul className="OpcionesMenu">
            {
                props.opciones.map((elm, idx) => 
                <li key={`${elm.nombre}-${idx}`}> 
                    <Link to={elm.path}>
                        {elm.nombre} 
                    </Link>
                </li>)
            }
    </ul>
    );
}

export default OpcionesMenu